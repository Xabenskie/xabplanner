import { IsOptional, IsString, MinLength } from 'class-validator'

export class UserDto {
	@IsOptional()
	@IsString()
	name?: string

	@IsOptional()
	@IsString()
	email?: string

	@IsOptional()
	@MinLength(6, { message: 'Password must be at least 6 characters' })
	@IsString()
	password?: string
}
