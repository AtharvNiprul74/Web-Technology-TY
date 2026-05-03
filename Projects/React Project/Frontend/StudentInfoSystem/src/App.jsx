import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Login from "./pages/Login";
import TeacherDashboard from "./pages/TeacherDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import Navbar from "./components/Navbar";

function App() {
  const [role, setRole] = useState(null);

  return (
    <BrowserRouter>
      <Navbar role={role} />

      <Routes>
        <Route path="/" element={<Login setRole={setRole} />} />
        <Route path="/teacher" element={<TeacherDashboard />} />
        <Route path="/student" element={<StudentDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;