import { ClipboardEdit, LayoutDashboard, Settings2, User } from 'lucide-react'

import { DASHBOARD_PAGES } from '@/config/pages-url'
import { IMenuItem } from './menu.interface'

export const MENU: IMenuItem[] = [
	{
		link: DASHBOARD_PAGES.HOME,
		title: 'Tasks',
		icon: LayoutDashboard
	},

	{
		link: DASHBOARD_PAGES.TIME_BLOCKING,
		title: 'Time Blocking',
		icon: ClipboardEdit
	},
	{
		link: DASHBOARD_PAGES.PROFILE,
		title: 'Profile',
		icon: User
	},
	{
		link: DASHBOARD_PAGES.SETTINGS,
		title: 'Settings',
		icon: Settings2
	}
]
