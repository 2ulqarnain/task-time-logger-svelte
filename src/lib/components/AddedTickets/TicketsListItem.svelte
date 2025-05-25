<script lang="ts">
	import type { Ticket } from '$lib/types/entities';
	import TimeLog from '../TimeLog.svelte';
	import DeleteTicketButton from './deleteTicketButton.svelte';

	interface Props {
		itemIndex: number;
		ticket: Ticket;
		onDeleteTicket: (ticketId: string) => void;
	}
	let { ticket, itemIndex, onDeleteTicket }: Props = $props();
</script>

<li
	class="group relative grid grid-cols-[max-content_1fr_auto] items-center rounded-lg bg-zinc-600 p-1 px-2"
>
	<code class="absolute top-1/2 left-0 -translate-x-[150%] -translate-y-1/2">{itemIndex}.</code>
	<code>{ticket.id}</code>
	<TimeLog startedOn={ticket.startedOn} />
	<DeleteTicketButton handleDeleteTicket={() => onDeleteTicket(ticket.id)} />
</li>
