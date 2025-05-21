import type { Ticket } from '$lib/types/entities';
import { fetchData } from '$lib/utils/api';

export const getAllTickets = async () => {
	return await fetchData<Ticket[]>('/api/tasks/added/');
};

export const postStartTicketTimeLog = async (ticketNo: string) => {
	if (!ticketNo) return { error: true, message: 'No Ticket ID provided!' };
	const data = await fetchData<string>(`/api/tasks/${ticketNo}/`, { method: 'POST' });
	console.log('postStartTicketTimeLog', { data });
	return data;
};
