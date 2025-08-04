// src/pages/DoctorProfile.tsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import doctors from "../data/doctors.json";
import Layout from "../components/Layout";

interface Doctor {
  id: number;
  name: string;
  specialization: string;
  image: string;
  available: boolean;
}

const DoctorProfile = () => {
  const { id } = useParams();
  const doctor = doctors.find((doc) => doc.id === parseInt(id || ""));

  if (!doctor) {
    return (
      <Layout>
        <h2 className="text-xl text-red-400">Doctor not found.</h2>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-3xl mx-auto bg-secondary p-6 rounded-lg shadow-lg">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-64 object-cover rounded-md mb-6"
        />
        <h1 className="text-3xl font-bold mb-2">{doctor.name}</h1>
        <p className="text-lg text-gray-300 mb-2">
          Specialization: {doctor.specialization}
        </p>
        <p className={`text-sm font-semibold ${doctor.available ? "text-green-400" : "text-red-400"}`}>
          {doctor.available ? "Available Today" : "Not Available"}
        </p>

        <Link
          to={`/book/${doctor.id}`}
          className="inline-block mt-6 px-6 py-3 bg-accent text-black font-semibold rounded hover:bg-sky-400 transition"
        >
          Book Appointment
        </Link>
      </div>
    </Layout>
  );
};

export default DoctorProfile;
