import { TaskStatus } from '../model/task.model';

export class UpdateTaskDTO {
  title: string;
  description: string;
  status: TaskStatus;
}
