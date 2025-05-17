import { PUBLIC_SERVER_BASE_URL } from '$env/static/public';
import type { FetchDataParams, GenericApiResponse } from '$lib/types';

export async function fetchData<T>(
	endpoint: string,
	{ method = 'GET', data = null, headers = {} }: FetchDataParams = {}
): Promise<GenericApiResponse<T>> {
	const config: RequestInit = {
		method,
		headers: {
			'Content-Type': 'application/json',
			...headers
		}
	};

	if (data && ['POST', 'PUT', 'PATCH'].includes(method)) {
		config.body = JSON.stringify(data);
	}

	try {
		const response = await fetch(PUBLIC_SERVER_BASE_URL + endpoint, config);

		if (!response.ok) {
			const errorResponseMessage = await response.json();
			return { error: true, message: errorResponseMessage, data: null };
		}

		const data = await response.json();

		return { error: false, message: 'success', data };
	} catch (error) {
		console.error('fetchData error:', error);
		throw error; // Re-throw for the caller to handle
	}
}
