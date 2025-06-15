<script lang="ts">
	import { SquareIcon } from '@lucide/svelte';

	interface Props {
		handleStopTicketTime: () => void;
	}
	let { handleStopTicketTime }: Props = $props();
</script>

<div class="h-full">
	<button
		class="grid aspect-square h-full cursor-pointer place-items-center rounded-lg border border-orange-400 bg-orange-600/20 stroke-orange-200 transition-transform hover:scale-110 hover:bg-red-400 hover:stroke-white"
		onclick={handleStopTicketTime}
	>
		<SquareIcon class="size-5 stroke-inherit" />
	</button>
</div>
