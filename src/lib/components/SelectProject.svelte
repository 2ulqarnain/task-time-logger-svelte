<script lang="ts">
	import { getProjectsKey } from '$lib/services/api/projects';
	import { selectedProject } from '$lib/services/store/project.svelte';
	import { onMount } from 'svelte';
	import type { ChangeEventHandler } from 'svelte/elements';

	let projectsKey = $state<string[]>([]);

	async function fetchDataFromApi() {
		try {
			const { error, data } = await getProjectsKey();
			if (!error && data) {
				projectsKey = data;
			}
		} catch (error) {
			console.error(error);
		}
	}

	const handleChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
		selectedProject.key = e.currentTarget?.value ?? null;
	};

	onMount(fetchDataFromApi);
</script>

<select
	name="projects"
	id="select-project"
	onchange={handleChange}
	value={selectedProject.key ?? ''}
	class="rounded-lg border border-zinc-300 text-zinc-300"
>
	<option value="">--Please choose an option--</option>
	{#each projectsKey as projectKey}
		<option value={projectKey}>{projectKey}</option>
	{/each}
</select>
