<script lang="ts">
	import AddedTaskListItem from '$lib/components/AddedTaskListItem.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import Input from '$lib/components/ui/Input.svelte';
	import { returnFormattedDateTime } from '$lib/utils/helpers';
	import type { ChangeEventHandler } from 'svelte/elements';
	import { Toaster, toast } from 'svelte-sonner';
	import { getAllTasks } from '$lib/services/apiService';

	interface Task {
		ticketNo: string;
		title: string;
		date: string;
	}

	let ticketNo = $state(['', '', '']);
	let ticketsAdded: Task[] = $state([]);
	let ticketNoString = $derived(ticketNo.join(''));

	const onInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		const currentElement = e.currentTarget;
		const currentValue = currentElement.value;
		const nextElement = currentElement.nextElementSibling;
		const previousElement = currentElement.previousElementSibling;
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
		if (!(e.code.includes('Backspace') || e.code.includes('Digit'))) e.preventDefault();
		switch (e.code) {
			case 'Backspace':
				if (!e.currentTarget.value) {
					e.currentTarget.previousElementSibling?.focus();
				}
				break;
			case 'ArrowLeft':
				e.currentTarget.previousElementSibling?.focus();
				break;
			case 'ArrowRight':
				e.currentTarget.nextElementSibling?.focus();
				break;
		}
	};

	const NUMBER_OF_CHARACTERS = 3;
	const array = new Array(NUMBER_OF_CHARACTERS).fill(null);

	const handleClickAdd = async (e: MouseEvent & { currentTarget: HTMLButtonElement }) => {
		if (ticketsAdded.find((ticket) => ticket.ticketNo === ticketNoString)) {
			toast.error('Ticket Already Added!');
			e.preventDefault();
		}
		if (ticketNoString.length < 3) {
			toast.error('Ticket # not complete!');
			e.preventDefault();
			return;
		}
		if (ticketsAdded.length > 1) {
			toast.error('Two tickets already added!');
			e.preventDefault();
			return;
		}

		// ticketsAdded.push({
		// 	ticketNo: ticketNoString,
		// 	title: 'Sample Title',
		// 	date: returnFormattedDateTime(new Date())
		// });

		for (let i = 0; i < ticketNo.length; i++) {
			ticketNo[i] = '';
			document.getElementById(`${i}`).value = '';
		}

		ticketsAdded = await getAllTasks();
	};

	const handleDeleteTaskListItem = (index: number) => {
		const newTicketsList = [];
		for (let i = 0; i < ticketsAdded.length; i++) {
			if (i === index) continue;
			newTicketsList.push(ticketsAdded[i]);
		}
		ticketsAdded = newTicketsList;
	};
</script>

<main class="grid h-screen grid-cols-[1fr_auto_1fr] items-center justify-items-center text-center">
	<Toaster visibleToasts={1} richColors />
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
		<ul class="flex flex-col gap-2">
			{#each ticketsAdded as ticket, index}
				<AddedTaskListItem
					handleClickDelete={handleDeleteTaskListItem}
					ticketNo={ticket.ticketNo}
					datetime={ticket.date}
					indexNo={index}
				/>
			{/each}
		</ul>
	</div>
	{#if ticketNoString.length}
		<p class="fixed bottom-5 left-1/2 -translate-x-1/2 font-mono">DTS-{ticketNoString}</p>
	{/if}
</main>
