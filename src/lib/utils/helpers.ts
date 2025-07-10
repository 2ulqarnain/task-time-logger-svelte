import { notification } from '$lib/services/store/project.svelte';
import type { Notification } from '$lib/types/project';
import { differenceInMinutes, differenceInDays } from 'date-fns';

export function formatTicketDuration(minutes: number) {
	if (minutes <= 0) {
		return '0m';
	}

	const hours = Math.floor(minutes / 60);
	const remainingMinutes = minutes % 60;

	if (hours === 0) {
		return `${remainingMinutes}m`;
	} else if (remainingMinutes === 0) {
		return `${hours}h`;
	} else {
		return `${hours}h ${remainingMinutes}m`;
	}
}

export function notify(message: Notification['message'], type: Notification['type'] = 'default') {
	notification.type = type;
	notification.message = message;
	setTimeout(() => {
		notification.type = 'default';
		notification.message = '';
	}, 2000);
}
