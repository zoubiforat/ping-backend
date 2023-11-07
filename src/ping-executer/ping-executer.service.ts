import { Injectable } from '@nestjs/common';
import { PingExecuterDto } from './dto/ping-executer.dto';
import { exec } from 'child_process';
import { promisify } from 'util';
import { PingStatisticService } from '../ping-statistic/ping-statistic.service';

const prom_exec = promisify(exec);

@Injectable()
export class PingExecuterService {

  constructor(private pingStatisticService: PingStatisticService){}

  async execute(pingExecuterDto: PingExecuterDto) {
    const command = `ping ${pingExecuterDto.host} -c ${pingExecuterDto.count}`;
    try {
      const {stdout, stderr} = await prom_exec(command);
      this.pingStatisticService.addStatistic(pingExecuterDto);
      return stdout || stderr;
    } catch (err) {
      const {stdout, stderr} = err
      return stdout || stderr;
    }
  }

}
