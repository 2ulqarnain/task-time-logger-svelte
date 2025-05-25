<script lang="ts">
	import type { Ticket } from '$lib/types/entities';
	import { formatTicketDuration } from '$lib/utils/helpers';

	interface Props {
		startedOn: Ticket['startedOn'];
	}
	let { startedOn }: Props = $props();
	let ticketDuration = formatTicketDuration(new Date(startedOn));
</script>

<div class="flex items-center justify-end">
	<code class="text-xs text-zinc-400">{ticketDuration}</code>
</div>
