import { IsArray, IsNumber, IsObject, IsString } from 'class-validator';

export class RecommendScheduleDto {
  @IsArray()
  subjects: string[];

  @IsObject()
  availableTime: Record<string, number>;

  @IsNumber()
  maxStudyHoursPerDay: number;

  @IsString()
  goal: string;
}
