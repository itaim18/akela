import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TasksDal } from './tasks.dal';

@Module({
  imports: [],
  controllers: [TasksController],
  providers: [TasksService, TasksDal],
})
export class TasksModule {}
