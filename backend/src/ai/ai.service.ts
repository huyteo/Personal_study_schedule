import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AiService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async recommendSchedule(preference: any) {
    const aiUrl = this.configService.get<string>('AI_SERVICE_URL');

    const response = await firstValueFrom(
      this.httpService.post(`${aiUrl}/schedule/recommend`, preference),
    );

    return response.data;
  }
}
