import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  StudySchedule,
  StudyScheduleSchema,
} from './schemas/study-schedule.schema';
import { StudySchedulesService } from './study-schedules.service';
import { StudySchedulesController } from './study-schedules.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: StudySchedule.name, schema: StudyScheduleSchema },
    ]),
  ],
  providers: [StudySchedulesService],
  controllers: [StudySchedulesController],
  exports: [StudySchedulesService],
})
export class StudySchedulesModule {}
