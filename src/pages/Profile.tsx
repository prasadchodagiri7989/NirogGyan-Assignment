// src/pages/Profile.tsx
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useAuth } from "../context/AuthContext";

interface Appointment {
  doctorId: number;
  doctorName: string;
  patientName: string;
  email: string;
  date: string;
  time: string;
}

const Profile = () => {
  const { user, logout } = useAuth();
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("appointments") || "[]");
    const userAppointments = data.filter((a: Appointment) => a.email === user?.email);
    setAppointments(userAppointments);
  }, [user]);

  const handleCancel = (index: number) => {
    const allAppointments: Appointment[] = JSON.parse(localStorage.getItem("appointments") || "[]");
    const updated = allAppointments.filter(
      (a) =>
        !(
          a.email === user?.email &&
          a.date === appointments[index].date &&
          a.time === appointments[index].time
        )
    );
    localStorage.setItem("appointments", JSON.stringify(updated));
    setAppointments((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Welcome, {user?.name}</h1>
        <button
          onClick={logout}
          className="mb-6 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Logout
        </button>

        {appointments.length === 0 ? (
          <p className="text-gray-400">No appointments booked yet.</p>
        ) : (
          <div className="space-y-4">
            {appointments.map((appt, index) => (
              <div
                key={index}
                className="bg-secondary p-4 rounded-lg shadow-md border border-gray-700"
              >
                <h2 className="text-xl font-semibold mb-1">{appt.doctorName}</h2>
                <p className="text-sm text-gray-300">Date: {appt.date} at {appt.time}</p>
                <p className="text-sm text-gray-400">Patient: {appt.patientName} ({appt.email})</p>
                <button
                  onClick={() => handleCancel(index)}
                  className="mt-3 px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Cancel Appointment
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Profile;
