import { Test, TestingModule } from '@nestjs/testing';
import { PingExecuterService } from './ping-executer.service';

describe('PingExecuterService', () => {
  let service: PingExecuterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PingExecuterService],
    }).compile();

    service = module.get<PingExecuterService>(PingExecuterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
