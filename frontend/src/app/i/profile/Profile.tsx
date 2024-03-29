'use client'

import Loader from '@/components/ui/Loader'

import { useProfile } from '@/hooks/useProfile'

export function Profile() {
	const { data, isLoading } = useProfile()

	return isLoading ? (
		<Loader />
	) : (
		<div className='cursor-default'>
			<div className='flex flex-col min-w-screen justify-center items-center'>
				<p className=' font-bold text-3xl -mb-2'>{data?.user.name}</p>
				<p className=' font-medium text-xl -mr-5 text-white/20'>
					{data?.user.email}
				</p>
			</div>

			<div className='grid grid-cols-4 gap-12 mt-7'>
				{data?.statistics.length ? (
					data.statistics.map(statistic => (
						<div
							key={statistic.label}
							className='flex flex-col bg-border/5 rounded-xl hover:-translate-y-1 duration-800 transition-transform text-3xl justify-center items-center'
						>
							<p>{statistic.label}</p>
							<p>{statistic.value}</p>
						</div>
					))
				) : (
					<div>Profile not loaded!</div>
				)}
			</div>
		</div>
	)
}
