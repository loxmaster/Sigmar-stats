import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class WhoAmIService {
  private readonly appName: string;

  constructor(private readonly configService: ConfigService) {
    this.appName = this.configService.get<string>('APP_NAME') || 'Unknown Application';
  }

  whoAmI(): string {
    return this.appName;
  }
}
