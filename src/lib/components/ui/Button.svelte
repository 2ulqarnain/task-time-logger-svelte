<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
		className?: string;
	};
	let { children, className }: Props = $props();
</script>

<button class="bg-primary text-bg cursor-pointer rounded-lg hover:bg-orange-700 {className}"
	>{@render children?.()}</button
>
