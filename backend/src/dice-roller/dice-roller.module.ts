import { Module } from '@nestjs/common';
import { DiceRollerController } from './dice-roller.controller';
import { DiceRollerService } from './dice-roller.service';

@Module({
  controllers: [DiceRollerController],
  providers: [DiceRollerService]
})
export class DiceRollerModule {}
