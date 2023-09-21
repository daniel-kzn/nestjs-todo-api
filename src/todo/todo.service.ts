import { Injectable } from '@nestjs/common';
import { ITodo } from './interface/todo.interface';

@Injectable()
export class TodoService {
  private readonly todos: ITodo[] = [];

  create(todo: ITodo) {
    this.todos.push(todo);
  }

  delete(todo: ITodo) {
    this.todos.pop()
  };

  getAll(): ITodo[] {
    return this.todos;
  }
}
