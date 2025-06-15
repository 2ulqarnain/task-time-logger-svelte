export type FetchDataParams<D, M extends string = string> = M extends 'GET' | 'DELETE'
	? {
			method: M;
			data?: never;
			headers?: HeadersInit;
		}
	: {
			method: M;
			data?: D;
			headers?: HeadersInit;
		};

export interface GenericApiResponse<T> {
	error: boolean;
	message: string | null;
	data: T | null;
}
