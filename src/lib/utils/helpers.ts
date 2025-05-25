import { notification } from '$lib/services/store/project.svelte';
import type { Notification } from '$lib/types/project';
import { differenceInMinutes, differenceInDays } from 'date-fns';

export function formatTicketDuration(startDate: Date) {
	const now = new Date();
	const totalMinutes = differenceInMinutes(now, startDate);
	const days = differenceInDays(now, startDate);
	const hours = Math.floor((totalMinutes % (24 * 60)) / 60);
	const minutes = totalMinutes % 60;

	if (days > 0) {
		return `${days}d ${hours}h ${minutes}m`;
	}
	if (hours > 0) {
		return `${hours}h ${minutes}m`;
	}
	if (minutes > 0) {
		return `${minutes}m`;
	}
	return 'just now';
}

export function notify(message: Notification['message'], type: Notification['type'] = 'default') {
	notification.type = type;
	notification.message = message;
	setTimeout(() => {
		notification.type = 'default';
		notification.message = '';
	}, 2000);
}
