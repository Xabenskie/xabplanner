import TodoLogo from '/public/todomvc.svg'
import Image from 'next/image'
import Link from 'next/link'

import { DASHBOARD_PAGES } from '@/config/pages-url'

export function Logo() {
	return (
		<div className='flex flex-col p-layout relative hover:animate-pulse cursor-pointer'>
			<Link href={DASHBOARD_PAGES.HOME}>
				<Image
					src={TodoLogo}
					width='300'
					height='300'
					alt=''
					draggable={'false'}
				/>
			</Link>
		</div>
	)
}
