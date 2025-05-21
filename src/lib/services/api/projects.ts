import { fetchData } from '$lib/utils/api';

export const getProjectsKey = async () => {
	return await fetchData<string[]>('/api/projects/');
};
