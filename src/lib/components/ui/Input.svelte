<script lang="ts">
	import type { ChangeEventHandler, HTMLInputAttributes } from 'svelte/elements';

	let { className, ...rest }: Omit<HTMLInputAttributes, 'class'> & { className: string } = $props();
</script>

<input
	{...rest}
	class="rounded-lg bg-neutral-200 focus:ring-0 focus:outline-orange-400 {className}"
/>
