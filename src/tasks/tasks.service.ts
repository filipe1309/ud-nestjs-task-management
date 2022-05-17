import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {
  tasksRepositoryExtended: any;

  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {
    this.tasksRepositoryExtended = this.tasksRepository
      .extend({
        async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
          const { title, description } = createTaskDto;
          const task = this.create({
            title,
            description,
            status: TaskStatus.OPEN,
          });
          await this.save(task);
          return task;
        },
      })
      .extend({
        async getTasks(filterDto: GetTasksFilterDto): Promise<Task[]> {
          const { status, search } = filterDto;
          const query = this.createQueryBuilder('task');

          if (status) {
            query.andWhere('task.status = :status', { status });
          }

          if (search) {
            query.andWhere(
              'LOWER(task.title) LIKE LOWER(:search) OR LOWER(task.description) LIKE LOWER(:search)',
              { search: `%${search}%` },
            );
          }

          const tasks = await query.getMany();
          return tasks;
        },
      });
  }

  getTasks(filterDto: GetTasksFilterDto): Promise<Task[]> {
    return this.tasksRepositoryExtended.getTasks(filterDto);
  }

  async getTaskById(id: string): Promise<Task> {
    const found = await this.tasksRepository.findOneBy({ id });
    if (!found) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }

    return found;
  }

  createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksRepositoryExtended.createTask(createTaskDto);
  }

  async deleteTask(id: string): Promise<void> {
    const result = await this.tasksRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }
  }

  async updateTaskStatus(id: string, status: TaskStatus): Promise<Task> {
    const task = await this.getTaskById(id);

    task.status = status;
    await this.tasksRepository.save(task);

    return task;
  }
}
