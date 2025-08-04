// src/pages/BookAppointment.tsx
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import doctors from "../data/doctors.json";
import Layout from "../components/Layout";

const BookAppointment = () => {
  const { id } = useParams();
  const doctor = doctors.find((doc) => doc.id === parseInt(id || ""));
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
      doctorId: doctor?.id,
      doctorName: doctor?.name,
      patientName,
      email,
      date,
      time,
    };

    const existing = JSON.parse(localStorage.getItem("appointments") || "[]");
    localStorage.setItem("appointments", JSON.stringify([...existing, newAppointment]));

    alert("Appointment booked successfully!");
    navigate("/profile");
  };

  if (!doctor) {
    return (
      <Layout>
        <h2 className="text-red-400 text-xl">Doctor not found.</h2>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-lg mx-auto bg-secondary p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-2">Book Appointment</h1>
        <p className="mb-4 text-gray-300">with <strong>{doctor.name}</strong> ({doctor.specialization})</p>

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
            Confirm Booking
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default BookAppointment;
