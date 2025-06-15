<script lang="ts">
	import { Trash2Icon } from '@lucide/svelte';

	interface Props {
		handleDeleteTicket: () => void;
	}
	let { handleDeleteTicket }: Props = $props();
</script>

<div class="grid h-full">
	<button
		class="grid aspect-square cursor-pointer place-items-center rounded-lg border border-red-400 bg-red-600/20 stroke-red-200 transition-transform hover:scale-110 hover:bg-red-400 hover:stroke-white"
		onclick={handleDeleteTicket}
	>
		<Trash2Icon class="size-5 stroke-inherit" />
	</button>
</div>
