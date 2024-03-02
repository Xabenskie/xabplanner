import dayjs from 'dayjs'
import type { DateFormatter } from 'react-day-picker'

export const formatCaption: DateFormatter = month => {
	return <>{dayjs(month).format('MMMM')}</>
}
