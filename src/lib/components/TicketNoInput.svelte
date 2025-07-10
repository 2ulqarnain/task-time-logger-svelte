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

	$effect(() => {
		ticketNoCharArray = new Array(NO_OF_CHARACTERS).fill('');
		const inputs = document.getElementsByClassName('ticketIdInput');
		for (let i = 0; i < inputs.length; i++) {
			(inputs[i] as HTMLInputElement).value = '';
		}
	});

	const handleInputChange: FormEventHandler<HTMLInputElement> = (e) => {
		e.preventDefault();
		const { id, value } = e.currentTarget ?? {};
		let tempArr = [...ticketNoCharArray];
		tempArr[id] = value;
		ticketNoCharArray = [...tempArr];
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
				if (e.currentTarget.value) {
					e.currentTarget.value = '';
					let tempArray = [...ticketNoCharArray];
					tempArray[e.currentTarget.id] = '';
					ticketNoCharArray = [...tempArray];
				}
				e.currentTarget.previousElementSibling?.focus();
				break;
		}
	};
</script>

<div class="relative flex h-12 gap-2" id="ticketno-container">
	{#each ticketNoCharArray as _, index}
		<input
			class={`ticketIdInput valid:bg-primary valid:text-foreground-light bg-background-content aspect-square w-12 rounded-xl border border-zinc-400 text-center shadow-xl focus:outline-none ${index > ticketNoCharArray.join('').length ? 'pointer-events-none' : ''}`}
			maxlength="1"
			id={`${index}`}
			pattern="\d"
			oninput={handleInputChange}
			onkeydown={handleKeyDown}
			required
		/>
	{/each}
	<button
		class={`disabled:bg-background-muted aspect-[2] h-full cursor-pointer rounded-xl bg-emerald-600 text-zinc-200 shadow-xl outline-offset-1 outline-green-700 hover:bg-emerald-700 focus:outline-2 disabled:pointer-events-none disabled:text-zinc-300`}
		onclick={handleAddButtonClick}
		onkeydown={handleKeyDown}
		disabled={loading || ticketNoCharArray.join('').length < NO_OF_CHARACTERS}
	>
		{loading ? 'Loading...' : 'Start Time'}
	</button>
</div>
