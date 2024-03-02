import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { AuthModule } from './auth/auth.module'
import { TaskModule } from './task/task.module'
import { TimeBlockModule } from './time-block/time-block.module'
import { UserModule } from './user/user.module'

@Module({
	imports: [
		ConfigModule.forRoot(),
		AuthModule,
		UserModule,
		TaskModule,
		TimeBlockModule
	]
})
export class AppModule {}
