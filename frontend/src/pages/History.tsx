import { useEffect, useState } from "react";
import { api } from "../services/api";

export default function History() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    api.get("/study-schedules/demo-user-id").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div>
      <h2>Lịch đã lưu</h2>

      {data.map((item) => (
        <div key={item._id} style={{ marginBottom: 20 }}>
          <h4>{new Date(item.createdAt).toLocaleString()}</h4>
          <pre>{JSON.stringify(item.result.schedule, null, 2)}</pre>
        </div>
      ))}
    </div>
  );
}
