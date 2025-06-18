import type { Notification } from '$lib/types/project';

export const selectedProject = $state<{ key: string | null }>({ key: 'DTS' });

export const notification = $state<Notification>({ type: 'default', message: '' });
