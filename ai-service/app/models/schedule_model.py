from pydantic import BaseModel
from typing import List, Dict

class StudyPreference(BaseModel):
    subjects: List[str]
    availableTime: Dict[str, int]
    maxStudyHoursPerDay: int

class StudyScheduleResponse(BaseModel):
    schedule: Dict[str, List[str]]
