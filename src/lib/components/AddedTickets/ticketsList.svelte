<script lang="ts">
	import type { Ticket } from '$lib/types/entities';
	import type { SvelteMap } from 'svelte/reactivity';
	import TicketsListItem from './TicketsListItem.svelte';
	import Asterik from '$lib/components/loaders/asterik.svelte';

	interface Props {
		loading: boolean;
		tickets: SvelteMap<string, Ticket>;
		handleDeleteTicket: (ticketId: string) => void;
	}
	let { loading, tickets, handleDeleteTicket }: Props = $props();
</script>

{#if loading}
	<div class="w-full text-center text-white"><Asterik /></div>
{:else}
	<ul class="flex w-full flex-col gap-2">
		{#each tickets as [_, ticket], index}
			<TicketsListItem itemIndex={index + 1} {ticket} onDeleteTicket={handleDeleteTicket} />
		{/each}
	</ul>
{/if}
