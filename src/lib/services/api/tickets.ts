export const getAllTickets = async () => {
	const response = await fetch('http://locahost:8080/api/getAllTickets');
	if (!response.ok) return;
	const api_data = await response.json();
	console.debug({ api_data });
};
