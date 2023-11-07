import { Module } from '@nestjs/common';
import { PingStatisticService } from './ping-statistic.service';
import { PingStatisticController } from './ping-statistic.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PingStatistic } from './entities/ping-statistic.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PingStatistic])],
  controllers: [PingStatisticController],
  providers: [PingStatisticService],
  exports:[PingStatisticService, TypeOrmModule]
})
export class PingStatisticModule {}
