import {
	ITimeBlockResponse,
	TypeTimeBlockFromState
} from '@/types/time-block.type'

import { axiosWithAuth } from '@/api/interceptors'

class TimeBlockService {
	private BASE_URL = '/user/time-blocks'

	async getTimeBlocks() {
		const response = await axiosWithAuth.get<ITimeBlockResponse[]>(
			this.BASE_URL
		)

		return response
	}

	async createTimeBlocks(data: TypeTimeBlockFromState) {
		const response = await axiosWithAuth.post(this.BASE_URL, data)

		return response
	}

	async updateOrderTimeBlocks(ids: string[]) {
		const response = await axiosWithAuth.put(
			`${this.BASE_URL}/update-order`,
			ids
		)

		return response
	}

	async updateTimeBlocks(id: string, data: TypeTimeBlockFromState) {
		const response = await axiosWithAuth.put(`${this.BASE_URL}/${id}`, data)

		return response
	}

	async deleteTimeBlocks(id: string) {
		const response = await axiosWithAuth.delete(`${this.BASE_URL}/${id}`)

		return response
	}
}

export const timeBlockService = new TimeBlockService()
