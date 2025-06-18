<script lang="ts">
	import { Trash2Icon } from '@lucide/svelte';

	interface Props {
		handleDeleteTicket: () => void;
	}
	let { handleDeleteTicket }: Props = $props();
</script>

<div class="grid h-full">
	<button
		class="flex h-8 w-fit cursor-pointer items-center justify-center gap-2 rounded-full border border-red-400 bg-red-600/20 stroke-red-200 px-4 hover:bg-red-400 hover:stroke-white"
		onclick={handleDeleteTicket}
	>
		<span>Delete</span>
		<Trash2Icon class="size-4 stroke-inherit" />
	</button>
</div>
