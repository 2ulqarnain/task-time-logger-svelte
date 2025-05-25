<script lang="ts">
	import type { FormEventHandler, KeyboardEventHandler, MouseEventHandler } from 'svelte/elements';

	interface Props {
		ticketNoLength: number;
		handleAdd: (ticketNo: string) => void;
		loading: boolean;
		disabled?: boolean;
	}
	const { ticketNoLength: NO_OF_CHARACTERS, handleAdd, loading }: Props = $props();

	let ticketNoCharArray = $state(new Array(NO_OF_CHARACTERS).fill(''));
	let ticketNo = $derived(ticketNoCharArray.join(''));

	const handleInputChange: FormEventHandler<HTMLInputElement> = (e) => {
		e.preventDefault();
		const { id, value } = e.currentTarget ?? {};
		ticketNoCharArray[+id] = value;
		if (value) e.currentTarget.nextElementSibling?.focus();
		else e.currentTarget.previousElementSibling?.focus();
	};
	const handleAddButtonClick = () => {
		handleAdd(ticketNo);
	};
	const handleKeyDown: KeyboardEventHandler<HTMLInputElement | HTMLButtonElement> = (e) => {
		switch (e.code) {
			case 'ArrowLeft':
				e.preventDefault();
				e.currentTarget.previousElementSibling?.focus();
				break;
			case 'ArrowRight':
				e.preventDefault();
				e.currentTarget.nextElementSibling?.focus();
				break;
			case 'Backspace':
				e.preventDefault();
				if (e.currentTarget.value) e.currentTarget.value = '';
				else e.currentTarget.previousElementSibling?.focus();
				break;
		}
	};
</script>

<div class="relative flex h-12 gap-2" id="ticketno-container">
	{#each ticketNoCharArray as _, index}
		<input
			class={`aspect-square w-12 rounded-xl border border-zinc-500 bg-zinc-700 text-center focus:outline-none ${index <= ticketNoCharArray.join('').length ? 'hover:bg-zinc-600' : 'pointer-events-none'}`}
			maxlength="1"
			id={`${index}`}
			pattern="\d"
			oninput={handleInputChange}
			onkeydown={handleKeyDown}
		/>
	{/each}
	<button
		class={`aspect-[2] h-full rounded-xl shadow-blue-200 outline-offset-1 outline-green-700 focus:outline-2 disabled:pointer-events-none disabled:bg-zinc-500 disabled:text-zinc-300 ${ticketNoCharArray.join('').length > 2 ? 'cursor-pointer bg-emerald-600 text-zinc-200 hover:bg-emerald-700' : 'pointer-events-none bg-zinc-700 text-zinc-500'}`}
		onclick={handleAddButtonClick}
		onkeydown={handleKeyDown}
		disabled={loading}
	>
		{loading ? 'Loading...' : 'Start Time'}
	</button>
</div>
