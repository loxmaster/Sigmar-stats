import { Test, TestingModule } from '@nestjs/testing';
import { DiceRollerController } from './dice-roller.controller';

describe('DiceRollerController', () => {
  let controller: DiceRollerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DiceRollerController],
    }).compile();

    controller = module.get<DiceRollerController>(DiceRollerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
