import { Injectable } from '@nestjs/common';
import { TasksDal } from './tasks.dal';

@Injectable()
export class TasksService {
  constructor(private readonly tasksDal: TasksDal) {}
}
