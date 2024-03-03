import cn from 'clsx'
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'

type TypeButton = ButtonHTMLAttributes<HTMLButtonElement>

export function Button({
	children,
	className,
	...rest
}: PropsWithChildren<TypeButton>) {
	return (
		<button
			className={cn(
				'linear rounded-lg bg-transparent border border-secondary py-2 px-7 text-base font-medium text-white transition hover:bg-secondary active:bg-secondary',
				className
			)}
			{...rest}
		>
			{children}
		</button>
	)
}
