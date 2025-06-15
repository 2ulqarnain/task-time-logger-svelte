import type { StartTicketTimerApiPayload } from '$lib/types/api/tickets';
import type { Ticket } from '$lib/types/entities';
import { fetchData } from '$lib/utils/api';

export const getAllTickets = async () => {
	return await fetchData<{ count: number; tasks: Ticket[] }>('/api/tasks/');
};

export const postStartTicketTimeLog = async (ticketId: string) => {
	if (!ticketId) return { error: true, message: 'No Ticket ID provided!' };
	const data = await fetchData<string, StartTicketTimerApiPayload>(`/api/tasks/`, {
		method: 'POST',
		data: {
			id: ticketId,
			title: 'Harcoded Title'
		}
	});
	return data;
};

export const deleteTicketById = async (ticketId: string) => {
	if (!ticketId) return { error: true, message: 'No Ticket ID provided!' };
	const data = await fetchData<string>(`/api/tasks/${ticketId}/`, { method: 'DELETE' });
	return data;
};
