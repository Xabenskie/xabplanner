import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { TaskController } from './task.controller'
import { TaskService } from './task.service'

@Module({
	controllers: [TaskController],
	providers: [TaskService, PrismaService],
	exports: [TaskService]
})
export class TaskModule {}
