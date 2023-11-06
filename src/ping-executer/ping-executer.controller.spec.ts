import { Test, TestingModule } from '@nestjs/testing';
import { PingExecuterController } from './ping-executer.controller';
import { PingExecuterService } from './ping-executer.service';

describe('PingExecuterController', () => {
  let controller: PingExecuterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PingExecuterController],
      providers: [PingExecuterService],
    }).compile();

    controller = module.get<PingExecuterController>(PingExecuterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
