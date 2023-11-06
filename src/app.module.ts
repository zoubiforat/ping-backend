import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PingExecuterModule } from './ping-executer/ping-executer.module';

@Module({
  imports: [PingExecuterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
