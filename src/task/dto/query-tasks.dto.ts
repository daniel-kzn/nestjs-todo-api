import { TaskStatus } from '../model/task.model';

export class QueryTasksDTO {
  search: string;
  status: TaskStatus;
}
