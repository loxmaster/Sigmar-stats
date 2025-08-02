import { Test, TestingModule } from '@nestjs/testing';
import { DiceRollerService } from './dice-roller.service';

describe('DiceRollerService', () => {
  let service: DiceRollerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DiceRollerService],
    }).compile();

    service = module.get<DiceRollerService>(DiceRollerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
