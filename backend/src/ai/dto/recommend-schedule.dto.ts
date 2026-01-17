import { IsArray, IsNumber, IsObject } from 'class-validator';

export class RecommendScheduleDto {
  @IsArray()
  subjects: string[];

  @IsObject()
  availableTime: Record<string, number>;

  @IsNumber()
  maxStudyHoursPerDay: number;
}
