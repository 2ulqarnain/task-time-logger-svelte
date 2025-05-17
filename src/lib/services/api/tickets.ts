import { fetchData } from '$lib/utils/api';

export const getAllTickets = async () => {
	const response = await fetch('http://locahost:8080/api/getAllTickets');
	if (!response.ok) return;
	const api_data = await response.json();
	console.debug({ api_data });
};

export const postStartTicketTimeLog = async (ticketNo: string) => {
	if (!ticketNo) return { error: true, message: 'No Ticket ID provided!' };
	const data = await fetchData<string>(`/api/tasks/${ticketNo}/`, { method: 'POST' });
	console.log('postStartTicketTimeLog', { data });
	return data;
};
