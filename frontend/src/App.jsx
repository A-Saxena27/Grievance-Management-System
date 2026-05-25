import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import MyComplaints from "./pages/MyComplaints";
import AdminComplaints from "./pages/AdminComplaints";
import CommitteeDashboard from "./pages/CommitteeDashboard";
import CreateComplaint from "./pages/CreateComplaint";
import StudentDashboard from "./pages/StudentDashboard";
import LandingPage from "./pages/LandingPage";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        {/* STUDENT */}
        <Route
          path="/student-dashboard"
          element={
            <ProtectedRoute allowedRole="student">
              <StudentDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/my-complaints"
          element={
            <ProtectedRoute allowedRole="student">
              <MyComplaints />
            </ProtectedRoute>
          }
        />
        <Route
          path="/create-complaint"
          element={
            <ProtectedRoute allowedRole="student">
              <CreateComplaint />
            </ProtectedRoute>
          }
        />
        {/* ADMIN */}

        <Route
          path="/admin-complaints"
          element={
            <ProtectedRoute allowedRole="admin">
              <AdminComplaints />
            </ProtectedRoute>
          }
        />

        {/* COMMITTEE */}

        <Route
          path="/committee-dashboard"
          element={
            <ProtectedRoute allowedRole="committee">
              <CommitteeDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
