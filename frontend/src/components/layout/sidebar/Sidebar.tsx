import { Logo } from './Logo'
import { LogoutButton } from './LogoutButton'
import { MenuItem } from './MenuItem'
import { MENU } from './menu.data'

export function Sidebar() {
	return (
		<aside className='border-r border-r-border h-full bg-sidebar flex flex-col justify-between'>
			<Logo />
			<div className='p-3 relative mb-10'>
				{MENU.map(item => (
					<MenuItem
						item={item}
						key={item.link}
					/>
				))}
				<LogoutButton />
				<footer className='text-xs opacity-40 font-normal text-center p-layout'>
					2024 &copy; Made by{' '}
					<a
						href='https://github.com/Xabenskie'
						target='blank'
						rel='noreferrer'
						className='hover:text-primary/100 text-brand-300 transition-colors'
					>
						Xabenskie
					</a>
					<br /> All rights reserved
				</footer>
			</div>
		</aside>
	)
}
