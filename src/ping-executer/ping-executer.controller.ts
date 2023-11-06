import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { PingExecuterService } from './ping-executer.service';
import { PingExecuterDto } from './dto/ping-executer.dto';

@Controller('ping-executer')
export class PingExecuterController {
  constructor(private readonly pingExecuterService: PingExecuterService) {}

  @Post()
  execute(@Body() pingExecuterDto: PingExecuterDto) {
    if (!(pingExecuterDto.host && pingExecuterDto.count))
      throw new HttpException("Enter a valid host and positive count", HttpStatus.BAD_REQUEST);
    return this.pingExecuterService.execute(pingExecuterDto);
  }

}
