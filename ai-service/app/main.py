from fastapi import FastAPI
from app.routers.schedule_router import router as schedule_router

app = FastAPI(title="AI Study Schedule Service")
app.include_router(schedule_router)

@app.get("/")
def root():
    return {"message": "AI Service is running"}
