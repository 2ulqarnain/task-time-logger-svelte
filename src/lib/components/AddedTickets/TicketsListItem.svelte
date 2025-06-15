<script lang="ts">
	import type { Ticket } from '$lib/types/entities';
	import TimeLog from '../TimeLog.svelte';
	import DeleteTicketButton from './deleteTicketButton.svelte';
	import StopTicketTimeButton from './stopTicketTimeButton.svelte';

	interface Props {
		itemIndex: number;
		ticket: Ticket;
		onDeleteTicket: (ticketId: string) => void;
	}
	let { ticket, itemIndex, onDeleteTicket }: Props = $props();
</script>

<li class="group relative flex h-8 gap-2">
	<code class="absolute top-1/2 left-0 -translate-x-[150%] -translate-y-1/2">{itemIndex}.</code>
	<div class="flex grow items-center justify-between rounded-lg bg-zinc-600 p-1 px-2">
		<code>{ticket.id}</code>
		<TimeLog startedOn={ticket.startedOn} />
	</div>
	<StopTicketTimeButton handleStopTicketTime={() => console.log('stiopoped')} />
	<DeleteTicketButton handleDeleteTicket={() => onDeleteTicket(ticket.id)} />
</li>
