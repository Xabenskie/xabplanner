import { useMutation, useQueryClient } from '@tanstack/react-query'

import { TypeTaskFromState } from '@/types/task.types'

import { taskService } from '@/services/task.service'

export function useUpdateTask(key?: string) {
	const queryClient = useQueryClient()

	const { mutate: updateTask } = useMutation({
		mutationKey: ['updateTask', key],
		mutationFn: ({ id, data }: { id: string; data: TypeTaskFromState }) =>
			taskService.updateTask(id, data),
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ['tasks'] })
		}
	})

	return { updateTask }
}
