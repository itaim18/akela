import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TaskService } from './tasks.service';
import { CreateTaskDto } from 'src/dtos/create-task.dto';

@Controller('task')
export class TasksController {
  constructor(private readonly TaskService: TaskService) {}

  @Post()
  async createTask(@Body() createTaskDto: CreateTaskDto) {
    try {
      const createdTask = await this.TaskService.createTask(createTaskDto);
      return {
        message: 'Task created successfully',
        Task: createdTask,
      };
    } catch (error) {
      throw new HttpException(
        'Error creating Task',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get()
  async findAllTasks() {
    return this.TaskService.findAllTasks();
  }

  @Get(':id')
  async findTaskById(@Param('id') id: string) {
    return this.TaskService.findTaskById(id);
  }

  @Put(':id')
  async updateTask(
    @Param('id') id: string,
    @Body() updateTaskDto: CreateTaskDto,
  ) {
    return this.TaskService.updateTask(id, updateTaskDto);
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: string) {
    return this.TaskService.deleteTask(id);
  }
}
