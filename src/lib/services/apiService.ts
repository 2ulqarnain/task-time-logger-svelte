export const getAllTasks = async () => {
	const response = await fetch('http://localhost:8080/api/tasks/');
	const data = await response.json();
	console.log({ allTasksResponse: data });
};
