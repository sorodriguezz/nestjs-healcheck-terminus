import { Test, TestingModule } from '@nestjs/testing';
import { HealthMemoryController } from './health-memory.controller';

describe('HealthMemoryController', () => {
  let controller: HealthMemoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthMemoryController],
    }).compile();

    controller = module.get<HealthMemoryController>(HealthMemoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
