import { TasksDal } from './tasks.dal';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Task, TaskDocument } from 'src/schemas/task.schema';
import { CreateTaskDto } from 'src/dtos/create-task.dto';

@Injectable()
export class TaskService {
  constructor(@InjectModel(Task.name) private TaskModel: Model<TaskDocument>) {}

  async createTask(CreateTaskDto: CreateTaskDto): Promise<Task> {
    const createdTask = new this.TaskModel(CreateTaskDto);
    return await createdTask.save();
  }

  async findAllTasks(): Promise<Task[]> {
    return this.TaskModel.find().populate('name').exec();
  }

  async findTaskById(id: string): Promise<Task> {
    const task = await this.TaskModel.findById(id)
      .populate('name')

      .exec();
    if (!task) {
      throw new NotFoundException('task not found');
    }
    return task;
  }

  async updateTask(id: string, updateTaskDto: CreateTaskDto): Promise<Task> {
    const updatedTask = await this.TaskModel.findByIdAndUpdate(
      id,
      updateTaskDto,
      { new: true },
    ).exec();
    if (!updatedTask) {
      throw new NotFoundException('task not found');
    }
    return updatedTask;
  }

  async deleteTask(id: string): Promise<Task> {
    const deletedTask = await this.TaskModel.findByIdAndDelete(id).exec();
    if (!deletedTask) {
      throw new NotFoundException('Task not found');
    }
    return deletedTask;
  }
}
