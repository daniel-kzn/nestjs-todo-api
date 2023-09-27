import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  Post,
  Query,
} from '@nestjs/common';
import { CreateTaskDTO } from './dto/create-task.dto';
import { TaskService } from './task.service';
import { Task } from './model/task.model';

@Controller('todo')
export class TaskController {
  constructor(private tasksService: TaskService) {}

  @Get()
  async getAllTasks(@Query() query): Promise<Task[]> {
    return this.tasksService.findAllTasks();
  }

  @Get('/:id')
  async getTaskById(@Param('id') id: string): Promise<Task> {
    return this.tasksService.findTaskById(id);
  }

  @Post()
  async createTask(@Body() dto: CreateTaskDTO): Promise<Task> {
    return this.tasksService.createTask(dto);
  }

  @Put()
  async uptade() {
    return 'todo';
  }

  @Delete('/:id')
  async deleteTask(@Param('id') id: string): Promise<void> {
    this.tasksService.deleteTask(id);
  }
}
