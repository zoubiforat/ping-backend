import { Injectable } from '@nestjs/common';
import { CreatePingStatisticDto } from './dto/create-ping-statistic.dto';
import { UpdatePingStatisticDto } from './dto/update-ping-statistic.dto';

@Injectable()
export class PingStatisticService {
  create(createPingStatisticDto: CreatePingStatisticDto) {
    return 'This action adds a new pingStatistic';
  }

  findAll() {
    return `This action returns all pingStatistic`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pingStatistic`;
  }

  update(id: number, updatePingStatisticDto: UpdatePingStatisticDto) {
    return `This action updates a #${id} pingStatistic`;
  }

  remove(id: number) {
    return `This action removes a #${id} pingStatistic`;
  }
}
