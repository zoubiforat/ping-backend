import { Module } from '@nestjs/common';
import { PingStatisticService } from './ping-statistic.service';
import { PingStatisticController } from './ping-statistic.controller';

@Module({
  controllers: [PingStatisticController],
  providers: [PingStatisticService],
})
export class PingStatisticModule {}
