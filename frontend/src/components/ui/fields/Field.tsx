import { forwardRef } from 'react'

interface InputFieldProps {
	id: string
	label: string
	extra?: string
	placeholder: string
	variant?: string
	state?: 'error' | 'success'
	disabled?: boolean
	type?: string
	isNumber?: boolean
}

export const Field = forwardRef<HTMLInputElement, InputFieldProps>(
	(
		{ label, id, extra, type, placeholder, state, disabled, isNumber, ...rest },
		ref
	) => {
		return (
			<div className={`${extra}`}>
				<label
					htmlFor={id}
					className={`text-sm text-white/60 ml-1.5 font-medium `}
				>
					{label}
				</label>
				<input
					ref={ref}
					disabled={disabled}
					type={type}
					id={id}
					placeholder={placeholder}
					className='peer h-full w-full border-b border-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-xl font-normal text-white outline outline-0 transition-all placeholder:text-white/20 placeholder-shown:text-white/20 focus:border-orange-500 focus:outline-0 disabled:border-0 '
					onKeyDown={event => {
						if (
							isNumber &&
							!/[0-9]/.test(event.key) &&
							event.key !== 'Backspace' &&
							event.key !== 'Tab' &&
							event.key !== 'Enter' &&
							event.key !== 'ArrowLeft' &&
							event.key !== 'ArrowRight'
						) {
							event.preventDefault()
						}
					}}
					{...rest}
				/>
			</div>
		)
	}
)

Field.displayName = 'field'
