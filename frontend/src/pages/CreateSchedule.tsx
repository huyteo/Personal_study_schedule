import { useState } from "react";
import { api } from "../services/api";
import type { ScheduleResult } from "../types/schedule";

export default function CreateSchedule() {
  const [goal, setGoal] = useState("");
  const [result, setResult] = useState<ScheduleResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handleCreate = async () => {
    setLoading(true);

    const response = await api.post("/ai/recommend-schedule", {
      subjects: ["Lập trình Web"],
      availableTime: {
        monday: 2,
        tuesday: 2,
        wednesday: 2,
        thursday: 2,
        friday: 2,
        saturday: 0,
        sunday: 0,
      },
      maxStudyHoursPerDay: 2,
      goal,
    });

    setResult(response.data);
    setLoading(false);
  };

  return (
    <div>
      <h2>Tạo lịch học</h2>

      <input
        placeholder="Nhập mục tiêu học..."
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
      />

      <button onClick={handleCreate} disabled={loading}>
        {loading ? "Đang tạo..." : "Tạo lịch"}
      </button>

      {result && (
        <>
          <h3>Kết quả AI</h3>
          <pre>{JSON.stringify(result.schedule, null, 2)}</pre>
        </>
      )}
    </div>
  );
}
