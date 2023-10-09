import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { TaskEntity } from './task/entity/task.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5434,
      username: 'root',
      password: 'root',
      database: 'nestjs-todo',
      entities: [TaskEntity],
      synchronize: true,
    }),
    TaskModule,
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
