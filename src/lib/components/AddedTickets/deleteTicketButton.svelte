<script lang="ts">
	import { Trash2Icon } from '@lucide/svelte';

	interface Props {
		handleDeleteTicket: () => void;
	}
	let { handleDeleteTicket }: Props = $props();
</script>

<div class="grid h-full">
	<button
		class="hover:bg-danger-bg group/delete-button text-foreground-light bg-primary flex cursor-pointer items-center-safe gap-1 rounded-full p-1 px-2 pl-3 transition-[background-color]"
		onclick={handleDeleteTicket}
	>
		<span>Delete</span>
		<Trash2Icon
			class="size-4 stroke-current transition-transform group-hover/delete-button:scale-110"
		/>
	</button>
</div>
