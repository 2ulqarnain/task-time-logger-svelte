import { PUBLIC_SERVER_BASE_URL } from '$env/static/public';
import type { FetchDataParams, GenericApiResponse } from '$lib/types/api';

export async function fetchData<T>(
	endpoint: string,
	{ method = 'GET', data = null, headers = {} }: FetchDataParams = {}
): Promise<GenericApiResponse<T | null>> {
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
		let data;
		if (response.headers.get('Content-Type')?.includes('text/plain')) {
			data = await response.text();
		} else {
			data = await response.json();
		}

		return { error: false, message: 'success', data };
	} catch (error) {
		console.error('fetchData error:', error);
		throw error; // Re-throw for the caller to handle
	}
}
