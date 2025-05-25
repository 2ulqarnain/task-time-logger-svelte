export interface Notification {
	type: 'success' | 'warning' | 'error' | 'info' | 'default';
	message: string;
}
