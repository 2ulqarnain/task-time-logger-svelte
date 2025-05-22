import type { Ticket } from '$lib/types/entities';
import { fetchData } from '$lib/utils/api';

export const getAllTickets = async () => {
	return await fetchData<Ticket[]>('/api/tasks/added/');
};

export const postStartTicketTimeLog = async (ticketId: string) => {
	if (!ticketId) return { error: true, message: 'No Ticket ID provided!' };
	const data = await fetchData<string>(`/api/tasks/${ticketId}/`, { method: 'POST' });
	return data;
};

export const deleteTicketById = async (ticketId: string) => {
	if (!ticketId) return { error: true, message: 'No Ticket ID provided!' };
	const data = await fetchData<string>(`/api/tasks/${ticketId}/`, { method: 'DELETE' });
	return data;
};
