import { Test, TestingModule } from '@nestjs/testing';
import { HealthDbController } from './health-db.controller';

describe('HealthDbController', () => {
  let controller: HealthDbController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthDbController],
    }).compile();

    controller = module.get<HealthDbController>(HealthDbController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
