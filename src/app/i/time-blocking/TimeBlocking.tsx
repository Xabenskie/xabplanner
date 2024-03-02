'use client'

import { FormProvider, useForm } from 'react-hook-form'

import { TimeBlockingForm } from '@/components/time-blocking/TimeBlockingForm'
import { TimeBlockingList } from '@/components/time-blocking/TimeBlockingList'

import { TypeTimeBlockFromState } from '@/types/time-block.type'

export function TimeBlocking() {
	const methods = useForm<TypeTimeBlockFromState>()

	return (
		<FormProvider {...methods}>
			<div className='grid grid-cols-2 gap-12'>
				<TimeBlockingList />
				<TimeBlockingForm />
			</div>
		</FormProvider>
	)
}
