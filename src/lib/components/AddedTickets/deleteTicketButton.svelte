<script lang="ts">
	import { Trash2Icon } from '@lucide/svelte';

	interface Props {
		handleDeleteTicket: () => void;
	}
	let { handleDeleteTicket }: Props = $props();
</script>

<div class="grid h-full">
	<button
		class="hover:bg-danger-bg hover:text-foreground-light flex cursor-pointer items-center-safe gap-1 bg-neutral-400/50 p-1 px-2"
		onclick={handleDeleteTicket}
	>
		<span>Delete</span>
		<Trash2Icon class="size-4 stroke-current" />
	</button>
</div>
