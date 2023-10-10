import { Injectable, NotFoundException } from '@nestjs/common';

import { v4 as uuidv4 } from 'uuid';
import { CreateTaskDTO } from './dto/create-task.dto';
import { QueryTasksDTO } from './dto/query-tasks.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entity/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private tasksRepositoy: Repository<Task>,
  ) {}

  findAllTasks(): Promise<Task[]> {
    return this.tasksRepositoy.find();
  }

  findTasksWithQuery(queryTasks: QueryTasksDTO): string {
    /* const { search, status } = queryTasks;

    let tasks = this.findAllTasks();

    if (status) tasks = tasks.filter((task) => task.status === status);
    if (search) {
      console.log(search);
      tasks = tasks.filter(
        (task) =>
          task.title.includes(search) || task.description.includes(search),
      );
    }
*/
    return 'TODO';
  }

  findTaskById(id: string): string {
    /* const task = this.tasks.find((task) => task.id === id);

    if (!task) {
      throw new NotFoundException(`Task with id "${id}" not found`);
    } else return task;*/

    return 'TODO';
  }

  createTask(createTaskDTO: CreateTaskDTO): string {
    /*const { title, description } = createTaskDTO;
    const createdTask: Task = {
      id: uuidv4(),
      title,
      description,
      status: TaskStatus.TODO,
    };

    this.tasks.push(createdTask);*/
    return 'TODO';
  }

  deleteTask(id: string): string {
    /*const task = this.findTaskById(id);
    this.tasks.filter((task) => task.id !== task.id);
    return { message: `Item deleted with ID ${task.id}`, information: task };*/
    return 'TODO';
  }
}
