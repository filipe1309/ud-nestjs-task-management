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
    this.tasksRepositoryExtended = this.tasksRepository.extend({
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
    });
  }

  // getAllTasks(): Task[] {
  //   return this.tasks;
  // }

  async getTaskById(id: string): Promise<Task> {
    const found = await this.tasksRepository.findOneBy({ id });
    if (!found) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }

    return found;
  }

  // getTasksWithFilters(filterDto: GetTasksFilterDto): Task[] {
  //   const { status, search } = filterDto;

  //   let tasks = this.getAllTasks();

  //   if (status) {
  //     tasks = tasks.filter((task) => task.status === status);
  //   }

  //   if (search) {
  //     tasks = tasks.filter((task) => {
  //       return (
  //         task.title.toLowerCase().includes(search) ||
  //         task.description.toLowerCase().includes(search)
  //       );
  //     });
  //   }

  //   return tasks;
  // }

  createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksRepositoryExtended.createTask(createTaskDto);
  }

  async deleteTask(id: string): Promise<void> {
    const result = await this.tasksRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }
  }

  // updateTaskStatus(id: string, status: TaskStatus): Task {
  //   const task = this.getTaskById(id);
  //   task.status = status;
  //   return task;
  // }
}
