import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import MainLayout from './layouts/MainLayout';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import StudentDashboard from './pages/StudentDashboard';
import ParentDashboard from './pages/ParentDashboard';

const AppRoutes = () => {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      {/* Redirect root to appropriate dashboard if logged in, else login */}
      <Route path="/" element={
        user ? <Navigate to={`/${user.role.toLowerCase()}-dashboard`} replace /> : <Navigate to="/login" replace />
      } />

      {/* Protected Routes inside Main Layout */}
      <Route element={<MainLayout />}>
        <Route element={<ProtectedRoute allowedRoles={['ADMIN']} />}>
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Route>

        <Route element={<ProtectedRoute allowedRoles={['TEACHER']} />}>
          <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
        </Route>

        <Route element={<ProtectedRoute allowedRoles={['STUDENT']} />}>
          <Route path="/student-dashboard" element={<StudentDashboard />} />
        </Route>

        <Route element={<ProtectedRoute allowedRoles={['PARENT']} />}>
          <Route path="/parent-dashboard" element={<ParentDashboard />} />
        </Route>
      </Route>

      {/* Unauthorized / Not Found */}
      <Route path="/unauthorized" element={<div className="p-8 text-center text-red-600">Unauthorized Access</div>} />
      <Route path="*" element={<div className="p-8 text-center">404 - Page Not Found</div>} />
    </Routes>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
};

export default App;
