import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  ValidationPipe,
  UsePipes,
  Patch,
} from '@nestjs/common';
import { CreateTaskDTO } from './dto/create-task.dto';
import { TaskService } from './task.service';
import { UpdateTaskDTO } from './dto/update-task.dto';
import { TaskEntity } from './entity/task.entity';

@Controller('task')
export class TaskController {
  constructor(private tasksService: TaskService) {}

  @Get()
  async getTasks(): Promise<TaskEntity[]> {
    return await this.tasksService.getAll();
  }

  @Get('/:id')
  async getTaskById(@Param('id') id: string): Promise<TaskEntity> {
    return await this.tasksService.getOneTask(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  async createTask(@Body() dto: CreateTaskDTO): Promise<TaskEntity> {
    return await this.tasksService.createTask(dto);
  }

  @Patch('/:id')
  async uptadeTask(
    @Param('id') id: string,
    @Body() dto: UpdateTaskDTO,
  ): Promise<TaskEntity> {
    return await this.tasksService.updateTask(id, dto);
  }

  @Delete('/:id')
  async deleteTask(@Param('id') id: string) {
    return await this.tasksService.deleteTask(id);
  }
}
