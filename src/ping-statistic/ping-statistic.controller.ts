import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PingStatisticService } from './ping-statistic.service';
import { CreatePingStatisticDto } from './dto/create-ping-statistic.dto';
import { UpdatePingStatisticDto } from './dto/update-ping-statistic.dto';

@Controller('ping-statistic')
export class PingStatisticController {
  constructor(private readonly pingStatisticService: PingStatisticService) {}

  @Post()
  create(@Body() createPingStatisticDto: CreatePingStatisticDto) {
    return this.pingStatisticService.create(createPingStatisticDto);
  }

  @Get()
  findAll() {
    return this.pingStatisticService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pingStatisticService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePingStatisticDto: UpdatePingStatisticDto) {
    return this.pingStatisticService.update(+id, updatePingStatisticDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pingStatisticService.remove(+id);
  }
}
