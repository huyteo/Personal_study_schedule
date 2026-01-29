export interface RecommendRequest {
  subjects: string[];
  availableTime: Record<string, number>;
  maxStudyHoursPerDay: number;
  goal: string;
}

export interface ScheduleResult {
  schedule: Record<string, string[]>;
}
