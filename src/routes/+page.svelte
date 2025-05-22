<script lang="ts">
	import SelectProject from '$lib/components/SelectProject.svelte';
	import TicketNoInput from '$lib/components/TicketNoInput.svelte';
	import TicketsListItem from '$lib/components/TicketsListItem.svelte';
	import {
		deleteTicketById,
		getAllTickets,
		postStartTicketTimeLog
	} from '$lib/services/api/tickets';
	import { selectedProject } from '$lib/services/store/project.svelte';
	import type { Ticket } from '$lib/types/entities';
	import { onMount } from 'svelte';
	import { SvelteMap } from 'svelte/reactivity';

	let addedTickets = $state(new SvelteMap<Ticket['id'], Ticket>());

	const handleAddTicket = async (ticketNo: string) => {
		if (!selectedProject.key) return;
		const ticketId = `${selectedProject.key}-${ticketNo}`;
		postStartTicketTimeLog(ticketId);
		const data = await getAllTickets();
		if (!data.error) {
			const currentTicket = data.data?.find((ticket) => ticket.id === ticketId);
			currentTicket && addedTickets.set(ticketId, currentTicket);
		}
	};

	const handleDeleteTicket = async (ticketId: string) => {
		const data = await deleteTicketById(ticketId);
		if (data.error) return;
		addedTickets.delete(ticketId);
	};

	onMount(async () => {
		const data = await getAllTickets();
		if (!data.error) {
			data.data?.forEach((ticket) => addedTickets.set(ticket.id, ticket));
		}
	});
</script>

<main
	class="grid h-full grid-cols-3 items-center justify-items-center bg-zinc-800 text-center text-zinc-300"
>
	<div class="absolute top-5 left-5">
		<SelectProject />
	</div>
	<div class="col-start-2 flex flex-col gap-5">
		<h1 class="text-primary text-xl">Ticket Time Logger</h1>
		<TicketNoInput ticketNoLength={3} handleAdd={handleAddTicket} />
	</div>
	<ul class="flex w-1/2 flex-col gap-2">
		{#each addedTickets as [_, ticket], index}
			<TicketsListItem itemIndex={index + 1} {ticket} onDeleteTicket={handleDeleteTicket} />
		{/each}
	</ul>
</main>
