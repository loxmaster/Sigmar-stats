import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export interface WhoAmI {
  appName: string;
  version: string;
  environment: string;
}

@Injectable()
export class WhoAmIService {
  private readonly whoAmI: WhoAmI;

  constructor(private readonly configService: ConfigService) {
    const appName = this.configService.get<string>('APP_NAME') || 'OOPS! APP_NAME not set';
    const version = this.configService.get<string>('APP_VERSION') || 'OOPS! APP_VERSION not set';
    const environment = this.configService.get<string>('NODE_ENV') || 'OOPS! NODE_ENV not set';
    this.whoAmI = {
      appName,
      version,
      environment,
    };
  }

  getWhoAmI(): WhoAmI {
    return this.whoAmI;
  }
}
