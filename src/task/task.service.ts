import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './model/task.model';

import { v4 as uuidv4 } from 'uuid';
import { CreateTaskDTO } from './dto/create-task.dto';

@Injectable()
export class TaskService {
  private readonly tasks: Task[] = [];

  findAllTasks(): Task[] {
    return this.tasks;
  }

  findTaskById(id: string): Task {
    return this.tasks.find((task) => task.id === id);
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
    this.tasks.filter((task) => task.id !== id);
  }
}
