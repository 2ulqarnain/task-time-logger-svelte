<script lang="ts">
	import Trash2 from '@lucide/svelte/icons/trash-2';
	interface Props {
		ticketNo: string;
		indexNo: number;
		title?: string;
		datetime: string;
		handleClickDelete: (index: number) => void;
	}
	let { ticketNo, indexNo, title = 'Sample Title', datetime, handleClickDelete }: Props = $props();
	const serialNo = $derived(indexNo + 1);
</script>

<div
	class="group relative grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-lg border border-zinc-200 bg-gradient-to-r from-blue-100/50 to-orange-100/50 p-1 px-3 text-sm"
>
	<code class="absolute -left-6 text-zinc-500">{serialNo}.</code>
	<code>DTS-{ticketNo}</code>
	<span>{title}</span>
	<span>{datetime}</span>
	<div
		class="absolute right-0 translate-x-full scale-0 transition-transform group-hover:inline group-hover:scale-100"
	>
		<button
			class="group/deleteButton ml-2 flex cursor-pointer items-center gap-2 overflow-hidden rounded-lg bg-red-600 p-1 text-white transition-[padding] hover:bg-red-500 active:scale-75"
			onclick={() => handleClickDelete(indexNo)}
			><span class="-ml-[50px] transition-[margin] group-hover/deleteButton:ml-1">Delete</span
			><Trash2 size="1rem" /></button
		>
	</div>
</div>
