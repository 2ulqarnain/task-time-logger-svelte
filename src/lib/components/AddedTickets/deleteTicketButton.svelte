<script lang="ts">
	import { Trash2Icon } from '@lucide/svelte';

	interface Props {
		handleDeleteTicket: () => void;
	}
	let { handleDeleteTicket }: Props = $props();
</script>

<div class="absolute top-0 right-0 grid h-full translate-x-full pl-2">
	<button
		class="aspect-square cursor-pointer place-items-center rounded-lg border border-red-400 bg-red-600/20 stroke-red-200 transition-transform hover:scale-110 hover:bg-red-400 hover:stroke-white"
		onclick={handleDeleteTicket}
	>
		<Trash2Icon class="size-5 stroke-inherit" />
	</button>
</div>
