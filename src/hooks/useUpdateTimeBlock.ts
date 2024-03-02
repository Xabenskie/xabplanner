import { useMutation, useQueryClient } from '@tanstack/react-query'

import { TypeTimeBlockFromState } from '@/types/time-block.type'

import { timeBlockService } from '@/services/time-block.service'

export function useUpdateTimeBlock(key?: string) {
	const queryClient = useQueryClient()

	const { mutate: updateTimeBlock } = useMutation({
		mutationKey: ['update time-block', key],
		mutationFn: ({ id, data }: { id: string; data: TypeTimeBlockFromState }) =>
			timeBlockService.updateTimeBlocks(id, data),
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ['time-blocks'] })
		}
	})

	return { updateTimeBlock }
}
