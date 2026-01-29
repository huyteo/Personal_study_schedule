import { Routes, Route, Link } from "react-router-dom";
import CreateSchedule from "./pages/CreateSchedule";
import History from "./pages/History";

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>📚 Study Schedule AI</h1>

      <nav style={{ marginBottom: 20 }}>
        <Link to="/">Tạo lịch</Link> | <Link to="/history">Lịch đã lưu</Link>
      </nav>

      <Routes>
        <Route path="/" element={<CreateSchedule />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </div>
  );
}

export default App;
