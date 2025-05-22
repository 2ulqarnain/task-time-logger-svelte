<script lang="ts">
	import type { Ticket } from '$lib/types/entities';
	import { Trash2Icon } from '@lucide/svelte';

	interface Props {
		itemIndex: number;
		ticket: Ticket;
		onDeleteTicket: (ticketID: string) => void;
	}
	let { ticket, itemIndex, onDeleteTicket }: Props = $props();
</script>

<li
	class="group relative grid grid-cols-[max-content_1fr_auto] items-center rounded-lg bg-zinc-600 p-1 px-2"
>
	<code class="absolute top-1/2 left-0 -translate-x-[150%] -translate-y-1/2">{itemIndex}.</code>
	<code>{ticket.id}</code>
	<code class="ml-auto text-sm text-zinc-400">{ticket.age}</code>
	<div class="absolute top-0 right-0 hidden h-full translate-x-full pl-2 group-hover:grid">
		<button
			class="aspect-square cursor-pointer place-items-center rounded-lg border border-red-400 bg-red-600/20 stroke-red-200 transition-transform hover:scale-110 hover:bg-red-400 hover:stroke-white"
			onclick={() => onDeleteTicket(ticket.id)}
		>
			<Trash2Icon class="size-5 stroke-inherit" />
		</button>
	</div>
</li>
