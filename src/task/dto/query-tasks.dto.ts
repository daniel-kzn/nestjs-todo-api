import { IsIn, IsNotEmpty, IsOptional } from 'class-validator';
import { TaskStatus } from '../model/task.model';

export class QueryTasksDTO {
  @IsOptional()
  @IsIn([TaskStatus.TODO, TaskStatus.IN_PROGRESS, TaskStatus.DONE])
  search: string;

  @IsOptional()
  @IsNotEmpty()
  status: TaskStatus;
}
