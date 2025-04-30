<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	type Props = Omit<HTMLButtonAttributes, 'class'> & { className: string };
	let { className, children, ...restProps }: Props = $props();
</script>

<button
	class="bg-sunset hover:bg-sunset-light cursor-pointer rounded-lg text-zinc-700 outline-offset-2 focus:ring-0 focus:outline focus:outline-orange-400 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400 {className}"
	{...restProps}>{@render children?.()}</button
>
