<script lang="ts">
	import TicketNoInput from '$lib/components/TicketNoInput.svelte';
	import TicketsListItem from '$lib/components/TicketsListItem.svelte';
	import { SvelteSet } from 'svelte/reactivity';

	let addedTickets = $state(new SvelteSet());

	const handleAddTicket = (ticketNo: string) => {
		addedTickets.add(ticketNo);
	};
</script>

<main
	class="grid h-full grid-cols-3 items-center justify-items-center bg-zinc-800 text-center text-zinc-300"
>
	<div class="col-start-2 flex flex-col gap-5">
		<h1 class="text-primary text-xl">Ticket Time Logger</h1>
		<TicketNoInput ticketNoLength={3} handleAdd={handleAddTicket} />
	</div>
	<ul class="flex w-1/2 flex-col gap-2">
		{#each addedTickets as ticket, index}
			<TicketsListItem itemIndex={index + 1} ticketID={ticket} />
		{/each}
	</ul>
</main>
