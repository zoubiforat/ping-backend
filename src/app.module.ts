import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PingExecuterModule } from './ping-executer/ping-executer.module';
import { PingStatisticModule } from './ping-statistic/ping-statistic.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { PingStatistic } from './ping-statistic/entities/ping-statistic.entity';

@Module({
  imports: [PingExecuterModule, PingStatisticModule, 
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: "postgres", 
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || "5432"),
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      ssl: true,
      // TODO: uncomment the line below to enable synchronization and init your database for the first time
      // synchronize: true,  
      // logging: true,
      entities: [PingStatistic],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
