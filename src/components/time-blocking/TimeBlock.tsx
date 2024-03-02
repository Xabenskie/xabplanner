import { Edit, GripVertical, Loader, Trash } from 'lucide-react'
import { useFormContext } from 'react-hook-form'

import {
	ITimeBlockResponse,
	TypeTimeBlockFromState
} from '@/types/time-block.type'

import { useDeleteTimeBlock } from '@/hooks/useDeleteTimeBlock'
import { useTimeBlockSortable } from '@/hooks/useTimeBlockSortable'

import styles from './TimeBlock.module.scss'

export function TimeBlock({ item }: { item: ITimeBlockResponse }) {
	const { attributes, listeners, setNodeRef, style } = useTimeBlockSortable(
		item.id
	)
	const { reset } = useFormContext<TypeTimeBlockFromState>()
	const { deleteTimeBlock, isDeletePending } = useDeleteTimeBlock(item.id)

	return (
		<div
			ref={setNodeRef}
			style={style}
		>
			<div
				className={styles.block}
				style={{
					backgroundColor: item.color || 'Purple',
					height: `${item.duration}px`
				}}
			>
				<div className='flex items-center'>
					<button
						{...attributes}
						{...listeners}
						aria-describedby='time-block'
					>
						<GripVertical className={styles.grip} />
					</button>
					<div>
						{item.name}{' '}
						<i className='text-xs opacity-50'>({item.duration} min.)</i>
					</div>
				</div>

				<div className={styles.actions}>
					<button
						onClick={() => {
							reset({
								id: item.id,
								color: item.color,
								duration: item.duration,
								name: item.name,
								order: item.order
							})
						}}
						className='opacity-50 transition-opacity hover:opacity-100 mr-2'
					>
						<Edit size={16} />
					</button>
					<button
						onClick={() => deleteTimeBlock()}
						className='opacity-50 transition-opacity hover:opacity-100'
					>
						{isDeletePending ? <Loader size={16} /> : <Trash size={16} />}
					</button>
				</div>
			</div>
		</div>
	)
}
