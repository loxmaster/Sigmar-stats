import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DiceRollerModule } from './dice-roller/dice-roller.module';
import { StatisticsModule } from './statistics/statistics.module';
import { WhoAmIService } from './whoami.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    UsersModule,
    DiceRollerModule,
    StatisticsModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, WhoAmIService, ConfigService],
})
export class AppModule {}
