'use client'

import Link from 'next/link'

import { useProfile } from '@/hooks/useProfile'

import { ProfileLoader } from './ProfileLoader'

export function Profile() {
	const { data, isLoading } = useProfile()

	return (
		<div className='absolute top-big-layout right-big-layout'>
			{isLoading ? (
				<ProfileLoader />
			) : (
				<div className='flex cursor-default'>
					<div className='text-right mr-6'>
						{data?.user.name === '' ? (
							<p className=' font-bold text-2xl -mb-2 text-horizonRed-500'>
								Sent your user name
							</p>
						) : (
							<p className=' font-bold text-2xl -mb-2'>{data?.user.name}</p>
						)}
						<p className=' font-sm -mr-5 text-white/20'>{data?.user.email}</p>
					</div>
					<div className='flex w-10 h-10 justify-center items-center text-2xl text-white bg-white/20 rounded-full uppercase -mb-5'>
						<Link
							href={'/i/profile'}
							legacyBehavior
						>
							<span className='cursor-pointer hover:text-white/65 transition-colors '>
								{data?.user.name?.charAt(0) || 'A'}
							</span>
						</Link>
					</div>
				</div>
			)}
		</div>
	)
}
