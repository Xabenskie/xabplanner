import { useMutation, useQueryClient } from '@tanstack/react-query'

import { TypeTimeBlockFromState } from '@/types/time-block.type'

import { timeBlockService } from '@/services/time-block.service'

export function useCreateTimeBlock() {
	const queryClient = useQueryClient()

	const { mutate: createTimeBlock, isPending } = useMutation({
		mutationKey: ['create time-block'],
		mutationFn: (data: TypeTimeBlockFromState) =>
			timeBlockService.createTimeBlocks(data),
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ['time-blocks'] })
		}
	})

	return { createTimeBlock, isPending }
}
