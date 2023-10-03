import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, TaskStatus } from './model/task.model';

import { v4 as uuidv4 } from 'uuid';
import { CreateTaskDTO } from './dto/create-task.dto';
import { UpdateTaskDTO } from './dto/update-task.dto';
import { QueryTasksDTO } from './dto/query-tasks.dto';

@Injectable()
export class TaskService {
  private readonly tasks: Task[] = [];

  findAllTasks(): Task[] {
    return this.tasks;
  }

  findTasksWithQuery(queryTasks: QueryTasksDTO): Task[] {
    const { search, status } = queryTasks;

    let tasks = this.findAllTasks();

    if (status) tasks = tasks.filter((task) => task.status === status);
    if (search) {
      console.log(search);
      tasks = tasks.filter(
        (task) =>
          task.title.includes(search) || task.description.includes(search),
      );
    }

    return tasks;
  }

  findTaskById(id: string): Task {
    const task = this.tasks.find((task) => task.id === id);

    if (!task) {
      throw new NotFoundException(`Task with id "${id}" not found`);
    } else return task;
  }

  createTask(createTaskDTO: CreateTaskDTO): Task {
    const { title, description } = createTaskDTO;
    const createdTask: Task = {
      id: uuidv4(),
      title,
      description,
      status: TaskStatus.TODO,
    };

    this.tasks.push(createdTask);
    return createdTask;
  }

  deleteTask(id: string): void {
    const task = this.findTaskById(id);
    this.tasks.filter((task) => task.id !== task.id);
    return { message: `Item deleted with ID ${task.id}`, information: task };
  }

  /*updateTask(id: string, dto: UpdateTaskDTO): Task {
    const task = this.findTaskById(id);
  }*/
}
