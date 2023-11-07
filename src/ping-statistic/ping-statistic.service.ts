import { Injectable } from '@nestjs/common';
import { AddPingStatisticDto } from './dto/add-ping-statistic.dto';
import { PingStatistic } from './entities/ping-statistic.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PingStatisticService {

  constructor(@InjectRepository(PingStatistic)
  private pingStatisticRepository: Repository<PingStatistic>){}

  async addStatistic(addPingStatisticDto: AddPingStatisticDto) {
    const statistic: PingStatistic | null = await this.pingStatisticRepository.findOne(
      {
       where: {
        host: addPingStatisticDto.host,
       }
      }
    );
    if (statistic){
      this.pingStatisticRepository.update(
        {
          id: statistic.id,
        },
        {
          ...statistic,
          count: statistic.count + addPingStatisticDto.count,
        }
      );
    } else {
      this.pingStatisticRepository.insert(addPingStatisticDto);
    }
  }

  getTopStatistics(count: number): Promise<PingStatistic[]>{
    return this.pingStatisticRepository.find(
      {
        order: {
          count: "DESC",
        },
        take: count,
      }
    );
  }

  removeAll() {
    return `This action removes pingStatistics`;
  }
}
