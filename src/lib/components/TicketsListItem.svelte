<script lang="ts">
	interface Props {
		itemIndex: number;
		ticketID: string;
	}
	let { ticketID, itemIndex }: Props = $props();
</script>

<li
	class="gradient-purple relative grid grid-cols-[max-content_1fr_auto] rounded-lg border border-[purple] bg-[purple]/20 p-1 px-2 even:border-[orange] even:bg-[orange]/20"
>
	<code class="absolute top-1/2 left-0 -translate-x-[150%] -translate-y-1/2">{itemIndex}.</code>
	<code>{ticketID}</code>
</li>
