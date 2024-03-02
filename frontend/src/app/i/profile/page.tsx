import type { Metadata } from 'next'

import { Heading } from '@/components/ui/Heading'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { Profile } from './Profile'

export const metadata: Metadata = {
	title: 'Profile',
	...NO_INDEX_PAGE
}

export default function Page() {
	return (
		<div>
			<Heading title='Profile' />
			<Profile />
		</div>
	)
}
