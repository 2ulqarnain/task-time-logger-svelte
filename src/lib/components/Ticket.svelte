<script>
	import { Trash2Icon } from '@lucide/svelte';
	import Button from './ui/button.svelte';
</script>

<div
	class="bg-card-background border-card-border text-card-foreground [&>div]:border-card-border relative rounded-xl border shadow-xl [&>div:not(:last-child)]:border-b"
>
	<div class="flex p-2">
		<span>DTS-1434</span>
		<p>This is title of ticket</p>
	</div>
	<div class="bg-card-background-light rounded-b-xl p-2">
		<p>This is the description of the ticket, its very long descirption and somewhat misspelled</p>
		<p>This is the description of the ticket, its very long descirption and somewhat misspelled</p>
		<p>This is the description of the ticket, its very long descirption and somewhat misspelled</p>
	</div>
	<div class="absolute -bottom-2 flex translate-y-full items-center rounded-full">
		<Button>Delete <Trash2Icon class="size-4" /></Button>
	</div>
</div>
