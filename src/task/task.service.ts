import { Injectable, NotFoundException } from '@nestjs/common';

import { CreateTaskDTO } from './dto/create-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskEntity } from './entity/task.entity';
import { Repository } from 'typeorm';
import { UpdateTaskDTO } from './dto/update-task.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskEntity)
    private tasksRepositoy: Repository<TaskEntity>,
  ) {}

  /**
   * Permet de retourner toutes les tâches
   */
  async getAll(): Promise<TaskEntity[]> {
    return await this.tasksRepositoy.find();
  }

  /**
   * Permet de retourner une tâche
   */
  async getOneTask(id: string): Promise<TaskEntity> {
    return this.tasksRepositoy.findOne({ where: { id: id } });
  }

  /**
   * Permet de créer qu'une tâche à cause de l'argument
   */
  async createTask(dto: CreateTaskDTO): Promise<TaskEntity> {
    const task = this.tasksRepositoy.create(dto);
    return await this.tasksRepositoy.save(task);
  }

  async updateTask(id: string, dto: UpdateTaskDTO): Promise<TaskEntity> {
    const existingTask = await this.getOneTask(id);

    if (!existingTask) {
      throw new NotFoundException(`Can't delete the task with id ${id}`);
    }

    this.tasksRepositoy.merge(existingTask, dto);
    const updatedTask = await this.tasksRepositoy.save(existingTask);
    return updatedTask;
  }

  /**
   * Permet de supprimer qu'une tâche
   */
  async deleteTask(id: string): Promise<string> {
    const task = await this.getOneTask(id);
    if (!task)
      throw new NotFoundException(`The task with id ${id} was not found`);
    await this.tasksRepositoy.remove(task);
    return `The task with id ${id} was deleted`;
  }
}
