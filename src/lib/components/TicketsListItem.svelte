<script lang="ts">
	import type { Ticket } from '$lib/types/entities';

	interface Props {
		itemIndex: number;
		ticket: Ticket;
	}
	let { ticket, itemIndex }: Props = $props();
</script>

<li
	class="relative grid grid-cols-[max-content_1fr_auto] items-center rounded-lg bg-zinc-600 p-1 px-2"
>
	<code class="absolute top-1/2 left-0 -translate-x-[150%] -translate-y-1/2">{itemIndex}.</code>
	<code>{ticket.id}</code>
	<code class="ml-auto text-sm text-zinc-400">{ticket.age}</code>
</li>
