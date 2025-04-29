<script lang="ts">
	import type { ChangeEventHandler, HTMLInputAttributes } from 'svelte/elements';

	let { className, ...rest }: Omit<HTMLInputAttributes, 'class'> & { className: string } = $props();
</script>

<input {...rest} class="rounded-lg bg-neutral-200 focus:border-orange-400 {className}" />
