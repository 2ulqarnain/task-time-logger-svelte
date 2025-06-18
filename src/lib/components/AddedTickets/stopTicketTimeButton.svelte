<script lang="ts">
	interface Props {
		handleStopTicketTime: () => void;
	}
	let { handleStopTicketTime }: Props = $props();
</script>

<button
	class="mt-auto flex h-8 cursor-pointer items-center justify-between gap-2 rounded-2xl border border-orange-400 bg-orange-600/20 stroke-orange-200 p-1 px-5 hover:bg-orange-500/50 hover:stroke-white"
	onclick={handleStopTicketTime}
>
	<span>Stop</span>
</button>
