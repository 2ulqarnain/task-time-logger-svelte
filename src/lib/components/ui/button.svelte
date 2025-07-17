<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	interface ButtonProps extends HTMLButtonAttributes {}
	const { children, ...buttonProps }: ButtonProps = $props();
</script>

{#if children}
	<button
		class={'bg-primary hover:bg-eggplant flex items-center gap-1 rounded-full p-1 px-2 ' +
			buttonProps.class}
		{...buttonProps}>{@render children()}</button
	>
{/if}
