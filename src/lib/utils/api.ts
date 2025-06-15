import { PUBLIC_SERVER_BASE_URL } from '$env/static/public';
import type { FetchDataParams, GenericApiResponse } from '$lib/types/api';

export async function fetchData<T, D = undefined, M extends string = string>(
	endpoint: string,
	params?: FetchDataParams<D, M>
): Promise<GenericApiResponse<T | null>> {
	const { method, data, headers } = params || {};
	const config: RequestInit = {
		method,
		headers: {
			'Content-Type': 'application/json',
			...headers
		}
	};

	if (data && ['POST', 'PUT', 'PATCH'].includes(method ?? 'GET')) {
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

		return data;
	} catch (error) {
		console.error('fetchData error:', error);
		throw error;
	}
}
