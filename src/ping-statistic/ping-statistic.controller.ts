import { Controller, Get, Delete } from '@nestjs/common';
import { PingStatisticService } from './ping-statistic.service';

@Controller('ping-statistic')
export class PingStatisticController {
  constructor(private readonly pingStatisticService: PingStatisticService) {}

  @Get('top')
  findTop() {
    return this.pingStatisticService.getTopStatistics(5);
  }

  @Delete('reset')
  remove() {
    return this.pingStatisticService.removeAll();
  }
}
