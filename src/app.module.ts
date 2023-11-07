import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PingExecuterModule } from './ping-executer/ping-executer.module';
import { PingStatisticModule } from './ping-statistic/ping-statistic.module';

@Module({
  imports: [PingExecuterModule, PingStatisticModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
