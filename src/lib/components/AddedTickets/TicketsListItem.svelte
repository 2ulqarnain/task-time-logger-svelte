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

<li class="group relative -mb-20 transition-[margin] hover:-mb-3 last:hover:-mb-20">
	<code class="absolute top-2 left-0 -translate-x-[150%] text-zinc-400">{itemIndex}.</code>
	<div
		class="bg-background-content row-span-2 grid grid-cols-1 grid-rows-[auto_1fr_auto] items-center gap-2 overflow-hidden rounded-2xl border border-zinc-400 shadow-[0_-10px_20px_#0001]"
	>
		<div class="flex w-full gap-2 p-2">
			<code class="text-foreground-muted font-semibold">{ticket.id}</code>
			<span
				class="text-foreground-light w-fit rounded-xl px-2"
				style="background-color:{ticketStatusColorMap[ticket.status] ?? 'gray'};"
				>{ticket.status}</span
			>
			<TimeLog className="ml-auto" minutes={ticket.duration} />
		</div>
		<p class="line-clamp-1 px-2 text-left">{ticket.title}</p>
		<div
			class="bg-background-muted/30 border-background-muted flex items-center justify-end border-t p-1 text-sm text-neutral-500"
		>
			<i class="mr-auto ml-5">
				<span class="font-medium">Started On:</span>
				<span class="text-primary"
					>{Intl.DateTimeFormat('en-pk', {
						dateStyle: 'full',
						timeStyle: 'medium'
					}).format(new Date(ticket.startedOn))}</span
				>
			</i>
			<DeleteTicketButton handleDeleteTicket={() => onDeleteTicket(ticket.id)} />
		</div>
	</div>
</li>
