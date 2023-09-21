import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateTodoDTO } from './dto/create-todo.dto';
import { TodoService } from './todo.service';
import { ITodo } from './interface/todo.interface';

@Controller('todo')
export class TodoController {
  constructor(private todosService: TodoService) {}

  @Get()
  async getAll(@Query() query): Promise<ITodo[]> {
    return this.todosService.getAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: number) {
    return 'todo';
  }

  @Post()
  async create(@Body() createTodoDTO: CreateTodoDTO) {
    this.todosService.create(createTodoDTO);
    return 'Todo crée';
  }

  @Patch()
  async uptade() {
    return 'todo';
  }

  @Delete()
  async deleteOne() {
    return 'one';
  }
}
