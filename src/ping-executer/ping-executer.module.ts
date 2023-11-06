import { Module } from '@nestjs/common';
import { PingExecuterService } from './ping-executer.service';
import { PingExecuterController } from './ping-executer.controller';

@Module({
  controllers: [PingExecuterController],
  providers: [PingExecuterService],
})
export class PingExecuterModule {}
