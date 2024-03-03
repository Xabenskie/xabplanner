'use client'

import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { Heading } from '@/components/ui/Heading'
import { Button } from '@/components/ui/buttons/Button'
import { Field } from '@/components/ui/fields/Field'

import { IAuthForm } from '@/types/auth.types'

import { authService } from '@/services/auth.service'

export function Register() {
	const { register, handleSubmit, reset } = useForm<IAuthForm>({
		mode: 'onChange'
	})

	// const [isLoginForm, setIsLoginForm] = useState(false)

	const { push } = useRouter()

	const { mutate } = useMutation({
		mutationKey: ['register'],
		mutationFn: (data: IAuthForm) => authService.register('register', data),
		onSuccess() {
			toast.success('Successfully register!')
			reset()
		},
		onError() {
			toast.error('User registered!')
		}
	})

	const onSubmit: SubmitHandler<IAuthForm> = data => {
		mutate(data)
	}

	return (
		<div className='flex min-h-screen'>
			<form
				className='w-1/4 m-auto shadow bg-sidebar rounded-xl p-layout'
				onSubmit={handleSubmit(onSubmit)}
			>
				<Heading title='Register' />

				<Field
					id='email'
					label='Email'
					placeholder='johnDoe123@example.com'
					type='email'
					extra='mb-4'
					{...register('email', {
						required: 'Email is required!'
					})}
				/>

				<Field
					id='password'
					label='Password '
					placeholder='****** '
					type='password'
					{...register('password', {
						required: 'Password is required!'
					})}
					extra='mb-6'
				/>

				<div className='flex items-center gap-5 justify-center'>
					{/* <Button onClick={() => setIsLoginForm(true)}>Login</Button> */}
					<Button onClick={() => push('/')}>Register</Button>
				</div>
			</form>
		</div>
	)
}
