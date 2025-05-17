export interface FetchDataParams {
	method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
	data?: Record<string, any> | null;
	headers?: HeadersInit;
}

export interface GenericApiResponse<T> {
	error: boolean;
	message: string | null;
	data: T | null;
}
