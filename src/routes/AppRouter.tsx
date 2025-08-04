// src/routes/AppRouter.tsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import DoctorList from "../pages/DoctorList";
import DoctorProfile from "../pages/DoctorProfile";
import BookAppointment from "../pages/BookAppointment";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "../components/ProtectedRoute";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/doctors" element={<DoctorList />} />
      <Route path="/doctors/:id" element={<DoctorProfile />} />
      <Route
        path="/book/:id"
        element={
          <ProtectedRoute>
            <BookAppointment />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
