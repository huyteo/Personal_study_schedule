from fastapi import APIRouter
from app.models.schedule_model import StudyPreference, StudyScheduleResponse
from app.services.recommender_service import generate_schedule

router = APIRouter(prefix="/schedule", tags=["Study Schedule"])

@router.post("/recommend", response_model=StudyScheduleResponse)
def recommend_schedule(preference: StudyPreference):
    schedule = generate_schedule(
        preference.subjects,
        preference.availableTime,
        preference.maxStudyHoursPerDay
    )
    return {"schedule": schedule}
