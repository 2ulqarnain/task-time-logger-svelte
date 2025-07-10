<script lang="ts">
	import type { WheelEventHandler } from 'svelte/elements';

	let { chars = $bindable() } = $props();
	const handleWheel: WheelEventHandler<HTMLElement> = (e) => {
		e.preventDefault();
		if (e.deltaY < 0) chars = 4;
		else chars = 3;
	};
</script>

<div
	class="bg-background text-primary relative flex w-32 items-center justify-between rounded-xl p-2 shadow-xl"
>
	<span>Characters:</span>
	<code
		class="bg-primary text-foreground-light absolute right-0 grid aspect-square size-16 translate-x-1/2 place-items-center rounded-full text-3xl leading-0"
		onwheel={handleWheel}>{chars}</code
	>
</div>
