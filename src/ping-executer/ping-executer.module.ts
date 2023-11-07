import { Module } from '@nestjs/common';
import { PingExecuterService } from './ping-executer.service';
import { PingExecuterController } from './ping-executer.controller';
import { PingStatisticModule } from '../ping-statistic/ping-statistic.module';

@Module({
  imports: [PingStatisticModule],
  controllers: [PingExecuterController],
  providers: [PingExecuterService],
})
export class PingExecuterModule {}
