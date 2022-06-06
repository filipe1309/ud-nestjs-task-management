import { TasksRepository } from './tasks.repository';
import { TasksService } from './tasks.service';
import { Test } from '@nestjs/testing';
import { TaskStatus } from './task-status.enum';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

const mockTasksRepository = () => ({
  findAll: jest.fn(),
  findById: jest.fn(),
});

const mockUser = {
  username: 'john.doe',
  id: 'some_id',
  password: 'some_password',
  tasks: [],
};

const mockTask = {
  id: 'some_id',
  title: 'Test title',
  description: 'Test desc',
  status: TaskStatus.OPEN,
};

describe('TasksService', () => {
  let tasksService: TasksService;
  let tasksRepository;
  let tasksEntityRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        TasksService,
        {
          provide: TasksRepository,
          useFactory: mockTasksRepository,
        },
      ],
    }).compile();

    tasksService = await module.get(TasksService);
    tasksRepository = await module.get(TasksRepository);
  });

  describe('getTasks', () => {
    it('calls TasksRepository.findAll and returns the result', async () => {
      tasksRepository.findAll.mockResolvedValue('some_value');
      const result = await tasksService.getTasks(null, mockUser);
      expect(result).toEqual('some_value');
    });
  });

  describe('getTaskById', () => {
    it('calls TasksRepository.findById and returns the result', async () => {
      tasksRepository.findById.mockResolvedValue(mockTask);
      const result = await tasksService.getTaskById('some_id', mockUser);
      expect(result).toEqual(mockTask);
    });

    it('calls TasksRepository.findById and handles an error', async () => {
      expect.assertions(1);
      jest
        .spyOn(tasksRepository, 'findById')
        .mockRejectedValue(new NotFoundException());
      try {
        await tasksService.getTaskById('some_id', mockUser);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });
  });
});
