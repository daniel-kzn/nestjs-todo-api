import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  Put,
} from '@nestjs/common';
import { CreateTaskDTO } from './dto/create-task.dto';
import { TaskService } from './task.service';
import { Task } from './model/task.model';
import { UpdateTaskDTO } from './dto/update-task.dto';
import { QueryTasksDTO } from './dto/query-tasks.dto';

@Controller('task')
export class TaskController {
  constructor(private tasksService: TaskService) {}

  @Get()
  async getTasks(@Query() queryTasks: QueryTasksDTO): Promise<Task[]> {
    console.log('eyy');
    if (Object.keys(queryTasks).length) {
      return this.tasksService.findTasksWithQuery(queryTasks);
    } else return this.tasksService.findAllTasks();
  }

  @Get('/:id')
  async getTaskById(@Param('id') id: string): Promise<Task> {
    return this.tasksService.findTaskById(id);
  }

  @Post()
  async createTask(@Body() dto: CreateTaskDTO): Promise<Task> {
    return this.tasksService.createTask(dto);
  }

  @Put('/:id')
  async uptadeTask(@Param('id') id: string, @Body() dto: UpdateTaskDTO) {
    return this.uptadeTask(id, dto);
  }

  @Delete('/:id')
  async deleteTask(@Param('id') id: string): Promise<void> {
    console.log(id);
    this.tasksService.deleteTask(id);
  }
}
