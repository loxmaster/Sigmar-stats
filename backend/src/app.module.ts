import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DiceRollerModule } from './dice-roller/dice-roller.module';
import { StatisticsModule } from './statistics/statistics.module';

@Module({
  imports: [UsersModule, DiceRollerModule, StatisticsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
