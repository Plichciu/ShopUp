import { Status } from '../types/storeTypes'

export const STATUS: Record<string, Status> = {
	IDLE: 'IDLE',
	LOADING: 'LOADING',
	SUCCEEDED: 'SUCCEEDED',
	FAILED: 'FAILED',
}
