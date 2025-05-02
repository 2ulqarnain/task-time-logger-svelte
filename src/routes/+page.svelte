<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import Input from '$lib/components/ui/Input.svelte';
	import type { ChangeEventHandler } from 'svelte/elements';

	let ticketNo = $state(['', '', '']);

	$inspect(ticketNo);

	const onInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		const currentElement = e.currentTarget;
		const currentValue = currentElement.value;
		const nextElement = currentElement.nextElementSibling;
		const previousElement = currentElement.previousElementSibling;
		const firstSiblingElement = currentElement.parentElement?.firstElementChild;
		const currentElementId = +currentElement.id;

		if (!currentValue.length) {
			ticketNo[currentElementId] = '';
			previousElement?.focus();
		} else if (currentValue.length > 1) currentElement.value = currentValue?.[0];
		else if (currentValue) {
			ticketNo[currentElementId] = currentValue;
			nextElement?.focus({ focusVisible: true });
		}
	};

	const handleKeyDown = (e: KeyboardEvent & { currentTarget: HTMLInputElement }) => {
		if (!+e.currentTarget.id) return;
		if (
			e.code === 'Backspace' &&
			!e.currentTarget.value &&
			!e.currentTarget.previousElementSibling?.value
		) {
			e.currentTarget.previousElementSibling?.focus();
		}
	};

	const NUMBER_OF_CHARACTERS = 3;
	const array = new Array(NUMBER_OF_CHARACTERS).fill(null);

	let ticketsAdded: string[] = $state([]);
	const handleClickAdd = () => {
		let tempSet = new Set(ticketsAdded);
		tempSet.add(ticketNo.join(''));
		ticketsAdded = Array.from(tempSet);
	};
</script>

<main class="grid h-screen grid-cols-3 items-center justify-items-center text-center">
	<div class="col-start-2 flex flex-col gap-5">
		<h1 class="text-2xl">Task Time Logger</h1>
		<form>
			<div class="col-span-4 mb-2 basis-full text-neutral-500">Enter Ticker No.</div>
			<label class="grid grid-cols-[repeat(3,48px)_72px] grid-rows-[auto_48px] gap-x-2">
				{#each array as _, index}
					<Input
						id={index.toString()}
						oninput={onInputChange}
						onkeydown={handleKeyDown}
						className="!border-0 user-valid:bg-primary user-valid:text-bg h-full aspect-square w-full !p-0 text-center font-mono text-2xl"
						required
					/>
				{/each}
				<Button className="h-full font-bold" onclick={handleClickAdd}>Add</Button>
			</label>
		</form>
	</div>
	<div>
		<ul>
			{#each ticketsAdded as ticket}
				<li>{ticket}</li>
			{/each}
		</ul>
	</div>
	{#if ticketNo.join('').length}
		<p class="fixed bottom-5 left-1/2 -translate-x-1/2 font-mono">DTS-{ticketNo.join('')}</p>
	{/if}
</main>
