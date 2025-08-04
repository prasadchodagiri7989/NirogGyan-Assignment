// src/components/AppointmentForm.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface AppointmentFormProps {
  doctorId: number;
  doctorName: string;
  onBooked?: () => void; // Optional callback after booking
}

const AppointmentForm: React.FC<AppointmentFormProps> = ({
  doctorId,
  doctorName,
  onBooked,
}) => {
  const navigate = useNavigate();
  const [patientName, setPatientName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName || !email || !date || !time) {
      return alert("Please fill in all fields.");
    }

    const newAppointment = {
      doctorId,
      doctorName,
      patientName,
      email,
      date,
      time,
    };

    const existing = JSON.parse(localStorage.getItem("appointments") || "[]");
    localStorage.setItem("appointments", JSON.stringify([...existing, newAppointment]));

    alert("Appointment booked successfully!");
    onBooked?.();
    navigate("/profile");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Your Name"
        className="w-full p-3 rounded bg-primary border border-gray-600 text-white"
        value={patientName}
        onChange={(e) => setPatientName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Your Email"
        className="w-full p-3 rounded bg-primary border border-gray-600 text-white"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="date"
        className="w-full p-3 rounded bg-primary border border-gray-600 text-white"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="time"
        className="w-full p-3 rounded bg-primary border border-gray-600 text-white"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <button
        type="submit"
        className="w-full bg-accent text-black py-2 rounded font-semibold hover:bg-sky-400 transition"
      >
        Confirm Appointment
      </button>
    </form>
  );
};

export default AppointmentForm;
