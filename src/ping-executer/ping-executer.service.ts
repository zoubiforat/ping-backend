import { Injectable } from '@nestjs/common';
import { PingExecuterDto } from './dto/ping-executer.dto';
import { exec } from 'child_process';
import { promisify } from 'util';

const prom_exec = promisify(exec);

@Injectable()
export class PingExecuterService {

  async execute(pingExecuterDto: PingExecuterDto) {
    const command = `ping ${pingExecuterDto.host} -c ${pingExecuterDto.count}`;
    try {
      const {stdout, stderr} = await prom_exec(command);
      return stdout || stderr;
    } catch (err) {
      const {stdout, stderr} = err
      return stdout || stderr;
    }
  }

}
