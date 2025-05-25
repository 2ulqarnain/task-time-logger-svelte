<script lang="ts">
	import { notification } from '$lib/services/store/project.svelte';
	import type { Notification } from '$lib/types/project';
	import { InfoIcon } from '@lucide/svelte';

	let notificationStyles: Record<Notification['type'], string> = {
		error: 'bg-red-900 text-zinc-300',
		default: 'bg-primary text-zinc-800',
		success: 'bg-emerald-500 text-zinc-300',
		warning: 'bg-orange-400 text-zinc-700',
		info: 'bg-blue-700 text-zinc-300'
	};
	const styles = $derived(notificationStyles[notification.type]);
</script>

{#if notification.message}
	<p
		class={`fixed top-5 left-1/2 grid max-w-sm -translate-x-1/2 grid-cols-[auto_1fr] gap-2 rounded-2xl p-2 pr-3 ${styles}`}
	>
		<InfoIcon class="mt-0.5 size-5" />
		<span class="text-left">{notification.message}</span>
	</p>
{/if}
