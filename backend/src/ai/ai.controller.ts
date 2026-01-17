import { Controller, Post, Body } from '@nestjs/common';
import { AiService } from './ai.service';
import { RecommendScheduleDto } from './dto/recommend-schedule.dto';

@Controller('api/v1/ai')
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @Post('recommend-schedule')
  recommend(@Body() body: RecommendScheduleDto) {
    return this.aiService.recommendSchedule(body);
  }
}
