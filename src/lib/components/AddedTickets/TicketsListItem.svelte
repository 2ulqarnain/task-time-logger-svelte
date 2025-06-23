<script lang="ts">
	import type { Ticket } from '$lib/types/entities';
	import { ticketStatusColorMap } from '$lib/utils/maps';
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

<li class="group relative h-fit">
	<code class="absolute top-2 left-0 -translate-x-[150%] text-zinc-500">{itemIndex}.</code>
	<div
		class="row-span-2 grid grid-cols-[auto_1fr_auto] grid-rows-[auto_1fr] items-center gap-2 rounded-2xl bg-zinc-600 p-3 shadow-2xl shadow-black/20"
	>
		<code class="text-stone-400">{ticket.id}</code>
		<span
			class="w-fit rounded-xl px-2"
			style="background-color:{ticketStatusColorMap[ticket.status]};">{ticket.status}</span
		>
		<TimeLog className="col-start-3" startedOn={ticket.startedOn} />
		<p class="col-span-3 row-start-2 text-left">{ticket.title}</p>
		<StopTicketTimeButton handleStopTicketTime={() => console.log('stiopoped')} />
		<DeleteTicketButton handleDeleteTicket={() => onDeleteTicket(ticket.id)} />
	</div>
</li>
