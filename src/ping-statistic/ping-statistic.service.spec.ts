import { Test, TestingModule } from '@nestjs/testing';
import { PingStatisticService } from './ping-statistic.service';

describe('PingStatisticService', () => {
  let service: PingStatisticService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PingStatisticService],
    }).compile();

    service = module.get<PingStatisticService>(PingStatisticService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
