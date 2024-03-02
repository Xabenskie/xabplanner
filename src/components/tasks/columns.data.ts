import dayjs, { type Dayjs } from 'dayjs'
import 'dayjs/locale/ru'
import isoWeek from 'dayjs/plugin/isoWeek'
import weekOfYear from 'dayjs/plugin/weekOfYear'

dayjs.extend(isoWeek)

dayjs.extend(weekOfYear)

export const FILTERS: Record<string, Dayjs> = {
	today: dayjs().startOf('day'),
	tomorrow: dayjs().add(1, 'day').startOf('day'),
	'on-this-week': dayjs().endOf('isoWeek'),
	'on-next-week': dayjs().add(1, 'week').startOf('day'),
	later: dayjs().add(2, 'week').startOf('day')
}

export const COLUMNS = [
	{
		label: 'Today',
		value: 'today'
	},
	{
		label: 'Tomorrow',
		value: 'tomorrow'
	},
	{
		label: 'On this week',
		value: 'on-this-week'
	},
	{
		label: 'On next week',
		value: 'on-next-week'
	},
	{
		label: 'Later',
		value: 'later'
	},
	{
		label: 'Completed',
		value: 'completed'
	}
]
