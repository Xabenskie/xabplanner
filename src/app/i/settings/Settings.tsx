'use client'

import { SubmitHandler, useForm } from 'react-hook-form'

import Loader from '@/components/ui/Loader'
import { Button } from '@/components/ui/buttons/Button'
import { Field } from '@/components/ui/fields/Field'

import { TypeUserForm } from '@/types/auth.types'

import { useLoadData } from '@/hooks/useLoadData'
import { useProfile } from '@/hooks/useProfile'
import { useUpdateSettings } from '@/hooks/useUpdateSettings'

export function Settings() {
	const { register, handleSubmit, reset } = useForm<TypeUserForm>({
		mode: 'onChange'
	})

	const { isLoading } = useProfile()

	useLoadData(reset)

	const { isPending, mutate } = useUpdateSettings()

	const onSubmit: SubmitHandler<TypeUserForm> = data => {
		const { password, ...rest } = data

		mutate({
			...rest,
			password: password || undefined
		})
	}

	return isLoading ? (
		<Loader />
	) : (
		<div>
			<form
				className='w-2/4'
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className='grid grid-cols-2'>
					<div>
						<Field
							id='email'
							label='Email: '
							placeholder='Enter email: '
							type='email'
							{...register('email', {
								required: 'Email is required'
							})}
							extra='mb-4'
						/>

						<Field
							id='name'
							label='Name: '
							placeholder='Enter name: '
							type='name'
							{...register('name', {
								required: 'Name is required'
							})}
							extra='mb-4'
						/>

						<Field
							id='password'
							label='Password: '
							placeholder='Enter password: '
							type='password'
							{...register('password')}
							extra='mb-10'
						/>
					</div>
				</div>
				<Button
					type='submit'
					disabled={isPending}
				>
					Save
				</Button>
			</form>
		</div>
	)
}
