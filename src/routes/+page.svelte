<script lang="ts">
	import TicketsList from '$lib/components/AddedTickets/ticketsList.svelte';
	import SelectProject from '$lib/components/SelectProject.svelte';
	import TicketNoInput from '$lib/components/TicketNoInput.svelte';
	import TicketNoLengthSetup from '$lib/components/TicketNoLengthSetup.svelte';
	import Notification from '$lib/components/ui/notification/notification.svelte';
	import {
		deleteTicketById,
		getAllTickets,
		postStartTicketTimeLog
	} from '$lib/services/api/tickets';
	import { selectedProject } from '$lib/services/store/project.svelte';
	import type { Ticket } from '$lib/types/entities';
	import { notify } from '$lib/utils/helpers';
	import { onMount } from 'svelte';
	import { SvelteMap } from 'svelte/reactivity';

	// STATES
	let tickets = $state(new SvelteMap<Ticket['id'], Ticket>());
	let isLoadingTasks = $state(false);
	let ticketIdLength = $state(3);

	const handleAddTicket = async (ticketNo: string) => {
		if (!selectedProject.key) {
			notify('Project not selected!', 'error');
			return;
		}
		isLoadingTasks = true;
		const ticketId = `${selectedProject.key}-${ticketNo}`;
		await postStartTicketTimeLog(ticketId);
		const response = await getAllTickets();
		isLoadingTasks = false;
		if (!response.error) {
			const currentTicket = response.data?.tasks?.find((ticket) => ticket.id === ticketId);
			currentTicket && tickets.set(ticketId, currentTicket);
		}
	};

	const handleDeleteTicket = async (ticketId: string) => {
		const data = await deleteTicketById(ticketId);
		if (data.error) return;
		tickets.delete(ticketId);
	};

	onMount(async () => {
		isLoadingTasks = true;
		const response = await getAllTickets();
		isLoadingTasks = false;
		if (!response.error) {
			response.data?.tasks?.forEach((ticket) => tickets.set(ticket.id, ticket));
		}
	});
</script>

<main
	class="text-foreground grid h-full grid-cols-3 items-center justify-items-center pr-10 text-center"
>
	<div class="bg-pattern fixed -z-20 h-screen w-screen"></div>
	<div class="flex size-full flex-col gap-10 p-10 text-left">
		<div
			class="bg-background relative flex w-32 items-center justify-between rounded-xl p-2 shadow-xl"
		>
			<span class="text-primary font-sans">Project:</span>
			<span
				class="bg-primary text-foreground-light absolute right-0 grid aspect-square size-16 translate-x-1/2 place-items-center rounded-full text-2xl leading-0 font-bold"
				>{selectedProject.key}</span
			>
		</div>
		<TicketNoLengthSetup bind:chars={ticketIdLength} />
	</div>
	<div class="col-start-2 flex flex-col gap-5">
		<h1 class="text-primary text-xl">Ticket Time Logger</h1>
		<TicketNoInput
			disabled={!selectedProject.key}
			ticketNoLength={ticketIdLength}
			handleAdd={handleAddTicket}
			loading={isLoadingTasks}
		/>
	</div>
	<TicketsList loading={isLoadingTasks} {handleDeleteTicket} {tickets} />
	<Notification />
</main>
