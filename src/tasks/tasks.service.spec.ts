import { TasksRepository } from './tasks.repository';
import { TasksService } from './tasks.service';
import { Test } from '@nestjs/testing';

const mockTasksRepository = () => ({
  findAll: jest.fn(),
});

const mockUser = {
  username: 'john.doe',
  id: 'some_id',
  password: 'some_password',
  tasks: [],
};

describe('TasksService', () => {
  let tasksService: TasksService;
  let tasksRepository;

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

  describe('findAll', () => {
    it('calss TasksRepository.findAll and returns the result', async () => {
      tasksRepository.findAll.mockResolvedValue('some_value');
      const result = await tasksService.getTasks(null, mockUser);
      expect(result).toEqual('some_value');
    });
  });
});
