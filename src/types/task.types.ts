export enum EnumTaskPriority {
	low = 'low',
	medium ='medium',
  high = 'high'
}

export interface ITaskResponse{
	id: string;
	createdAt?: string;
	updatedAt?: string;
	name: string;
	priority?: EnumTaskPriority;
	isCompleted: boolean;
}

export type TypeTaskFromState = Partial<Omit<ITaskResponse, 'id' | 'updatedAt'>>