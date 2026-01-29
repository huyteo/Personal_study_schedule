import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';
import { StudySchedulesService } from '../study-schedules/study-schedules.service';
import { RecommendScheduleDto } from './dto/recommend-schedule.dto';

@Injectable()
export class AiService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
    private readonly studySchedulesService: StudySchedulesService,
  ) {}

  async recommendSchedule(userId: string, preference: RecommendScheduleDto) {
    const aiUrl = this.configService.get<string>('AI_SERVICE_URL');

    const response = await firstValueFrom(
      this.httpService.post(`${aiUrl}/schedule/recommend`, preference),
    );

    await this.studySchedulesService.create(userId, preference, response.data);

    return response.data;
  }
}
