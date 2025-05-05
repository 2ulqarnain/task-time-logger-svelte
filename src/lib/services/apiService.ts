interface Ticket {
	ticketNo: string;
	title: string;
}

export const getAllTasks = async (): Promise<Ticket[]> => {
	const response = await fetch('http://localhost:8080/api/tasks/');
	const data = await response.json();
	return data;
};
