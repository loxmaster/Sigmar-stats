import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { WhoAmIService } from './whoami.service';
import type { WhoAmI } from './whoami.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private whoAmiService: WhoAmIService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('whoami')
  whoAmI(): WhoAmI {
    return this.whoAmiService.getWhoAmI();
  }
}
