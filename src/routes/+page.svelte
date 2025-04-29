<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import Input from '$lib/components/ui/Input.svelte';
	import type { ChangeEventHandler } from 'svelte/elements';

	let ticketNo = '';

	const onInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		if (!e.currentTarget.value.length) {
			console.debug(ticketNo?.[e.currentTarget.id as any]);
			e.currentTarget.previousElementSibling?.focus();
			return;
		}
		const nextElement = e.currentTarget.nextElementSibling;
		if (e.currentTarget.value.length > 1) e.currentTarget.value = e.currentTarget.value?.[0];
		if (e.currentTarget.value) {
			ticketNo += e.currentTarget.value;
			nextElement?.focus({ focusVisible: true });
		}
	};

	const NUMBER_OF_CHARACTERS = 3;
	const array = new Array(NUMBER_OF_CHARACTERS).fill(null);
</script>

<main class="flex h-screen items-center justify-center text-center">
	<div class="flex flex-col gap-5">
		<h1 class="text-2xl">Task Time Logger</h1>
		<form>
			<label class="grid grid-cols-[repeat(4,48px)] grid-rows-[auto_48px] gap-2">
				<span class="col-span-4 basis-full text-neutral-500">Enter Ticker No.</span>
				{#each array as _, index}
					<Input
						id={index.toString()}
						oninput={onInputChange}
						className="h-full aspect-square w-full !p-0 text-center font-mono text-2xl"
					/>
				{/each}
				<Button className="h-full">Add</Button>
			</label>
		</form>
		{#if ticketNo}
			<p>{ticketNo}</p>
		{/if}
	</div>
</main>
