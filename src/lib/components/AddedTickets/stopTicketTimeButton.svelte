<script lang="ts">
	interface Props {
		handleStopTicketTime: () => void;
	}
	let { handleStopTicketTime }: Props = $props();
</script>

<button class="" onclick={handleStopTicketTime}>
	<span>Stop</span>
</button>
