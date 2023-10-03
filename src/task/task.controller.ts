import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  Put,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { CreateTaskDTO } from './dto/create-task.dto';
import { TaskService } from './task.service';
import { Task } from './model/task.model';
import { UpdateTaskDTO } from './dto/update-task.dto';
import { QueryTasksDTO } from './dto/query-tasks.dto';
import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe';

@Controller('task')
export class TaskController {
  constructor(private tasksService: TaskService) {}

  @Get()
  async getTasks(@Query() queryTasks: QueryTasksDTO): Promise<Task[]> {
    if (Object.keys(queryTasks).length) {
      console.log(queryTasks);
      return this.tasksService.findTasksWithQuery(queryTasks);
    } else return this.tasksService.findAllTasks();
  }

  @Get('/:id')
  async getTaskById(@Param('id') id: string): Promise<Task> {
    return this.tasksService.findTaskById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  async createTask(@Body() dto: CreateTaskDTO): Promise<Task> {
    return this.tasksService.createTask(dto);
  }

  @Put('/:id')
  async uptadeTask(
    @Param('id') id: string,
    @Body('data', TaskStatusValidationPipe) dto: UpdateTaskDTO,
  ) {
    return this.uptadeTask(id, dto);
  }

  @Delete('/:id')
  async deleteTask(@Param('id') id: string): Promise<undefined> {
    this.tasksService.deleteTask(id);
  }
}
