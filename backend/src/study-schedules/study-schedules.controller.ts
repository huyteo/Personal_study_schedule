import { Controller, Get } from '@nestjs/common';
import { StudySchedulesService } from './study-schedules.service';

@Controller('api/v1/study-schedules')
export class StudySchedulesController {
  constructor(private readonly schedulesService: StudySchedulesService) {}

  @Get()
  getMySchedules() {
    const userId = 'demo-user-id';
    return this.schedulesService.findByUser(userId);
  }
}
