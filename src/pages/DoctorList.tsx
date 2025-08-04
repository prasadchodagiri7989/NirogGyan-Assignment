// src/pages/DoctorList.tsx
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import doctorsData from "../data/doctors.json";

interface Doctor {
  id: number;
  name: string;
  specialization: string;
  image: string;
  available: boolean;
}

const DoctorList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  useEffect(() => {
    setDoctors(doctorsData);
  }, []);

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <h1 className="text-2xl font-semibold mb-6">Find a Doctor</h1>

      <input
        type="text"
        placeholder="Search by name or specialization"
        className="w-full p-3 rounded mb-6 bg-primary border border-gray-600 text-white"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDoctors.map((doctor) => (
          <div
            key={doctor.id}
            className="bg-secondary p-4 rounded-lg shadow-lg hover:bg-gray-800 transition"
          >
<div className="w-32 h-32 mx-auto mb-6 rounded-full bg-amber-600 text-black flex items-center justify-center text-3xl font-bold shadow-md">
  {doctor.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()}
</div>

            <h2 className="text-xl font-bold">{doctor.name}</h2>
            <p className="text-gray-300">{doctor.specialization}</p>
            <p className={`mt-2 text-sm font-medium ${doctor.available ? "text-green-400" : "text-red-400"}`}>
              {doctor.available ? "Available Today" : "Unavailable"}
            </p>
            <Link
              to={`/doctors/${doctor.id}`}
              className="inline-block mt-4 px-4 py-2 bg-accent text-black font-semibold rounded hover:bg-sky-400 transition"
            >
              View Profile
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default DoctorList;
