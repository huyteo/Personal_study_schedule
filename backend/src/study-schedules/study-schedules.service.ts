import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StudySchedule } from './schemas/study-schedule.schema';
import { RecommendScheduleDto } from '../ai/dto/recommend-schedule.dto';

@Injectable()
export class StudySchedulesService {
  constructor(
    @InjectModel(StudySchedule.name)
    private readonly scheduleModel: Model<StudySchedule>,
  ) {}

  async create(
    userId: string,
    input: RecommendScheduleDto,
    result: Record<string, unknown>,
  ) {
    return this.scheduleModel.create({
      userId,
      input,
      result,
    });
  }

  async findByUser(userId: string) {
    return this.scheduleModel.find({ userId }).sort({ createdAt: -1 });
  }
}
