import { IsNumber, IsOptional, IsString, Max, Min } from 'class-validator'

export class TimeBlockDto {
	@IsString()
	name: string

	@IsString()
	@IsOptional()
	color?: string

	@IsNumber()
	@Max(1440)
	@Min(1)
	duration: number

	@IsNumber()
	@IsOptional()
	order: number
}
