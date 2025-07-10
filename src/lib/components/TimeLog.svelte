<script lang="ts">
	import type { Ticket } from '$lib/types/entities';
	import { formatTicketDuration } from '$lib/utils/helpers';

	interface Props {
		minutes: Ticket['duration'];
		className?: string;
	}
	let { minutes, className }: Props = $props();
	let ticketDuration = formatTicketDuration(minutes);
</script>

<code class="text-xs text-zinc-400 {className}">{ticketDuration}</code>
