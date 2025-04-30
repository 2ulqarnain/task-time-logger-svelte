<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import Input from '$lib/components/ui/Input.svelte';
	import type { ChangeEventHandler } from 'svelte/elements';

	let ticketNo = '';

	const onInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		const currentElement = e.currentTarget;
		const currentValue = currentElement.value;
		const nextElement = e.currentTarget.nextElementSibling;
		const previousElement = e.currentTarget.previousElementSibling;
		const firstSiblingElement = e.currentTarget.parentElement?.firstElementChild;

		if (!currentValue.length) {
			ticketNo = ticketNo
				.split('')
				.filter((_, index) => {
					index !== +currentElement.id;
					debugger;
				})
				.join('');
			ticketNo.length
				? e.currentTarget.previousElementSibling?.focus()
				: e.currentTarget.parentElement?.firstElementChild?.focus();
			return;
		}

		if (currentValue.length > 1) e.currentTarget.value = currentValue?.[0];

		if (currentValue) {
			ticketNo += currentValue;
			nextElement?.focus({ focusVisible: true });
		}
	};

	const NUMBER_OF_CHARACTERS = 3;
	const array = new Array(NUMBER_OF_CHARACTERS).fill(null);
</script>

{@debug ticketNo}

<main class="flex h-screen items-center justify-center text-center">
	<div class="flex flex-col gap-5">
		<h1 class="text-2xl">Task Time Logger</h1>
		<form>
			<div class="col-span-4 mb-2 basis-full text-neutral-500">Enter Ticker No.</div>
			<label class="grid grid-cols-[repeat(3,48px)_72px] grid-rows-[auto_48px] gap-x-2">
				{#each array as _, index}
					<Input
						id={index.toString()}
						oninput={onInputChange}
						className="!border-0 user-valid:bg-primary user-valid:text-bg h-full aspect-square w-full !p-0 text-center font-mono text-2xl"
						required
					/>
				{/each}
				<Button className="h-full font-bold">Add</Button>
			</label>
		</form>
		<p>{ticketNo}</p>
	</div>
</main>
