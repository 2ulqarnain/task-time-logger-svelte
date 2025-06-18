<script lang="ts">
	import type { Ticket } from '$lib/types/entities';
	import { formatTicketDuration } from '$lib/utils/helpers';

	interface Props {
		startedOn: Ticket['startedOn'];
		className?: string;
	}
	let { startedOn, className }: Props = $props();
	let ticketDuration = formatTicketDuration(new Date(startedOn));
</script>

<code class="text-xs text-zinc-400 {className}">{ticketDuration}</code>
