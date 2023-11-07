import { Test, TestingModule } from '@nestjs/testing';
import { PingStatisticController } from './ping-statistic.controller';
import { PingStatisticService } from './ping-statistic.service';

describe('PingStatisticController', () => {
  let controller: PingStatisticController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PingStatisticController],
      providers: [PingStatisticService],
    }).compile();

    controller = module.get<PingStatisticController>(PingStatisticController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
