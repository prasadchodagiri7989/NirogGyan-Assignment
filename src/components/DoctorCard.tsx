// src/components/DoctorCard.tsx
import React from "react";
import { Link } from "react-router-dom";

export interface Doctor {
  id: number;
  name: string;
  specialization: string;
  image: string;
  available: boolean;
}

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  return (
    <div className="bg-secondary p-4 rounded-lg shadow-md hover:bg-gray-800 transition-all">
<div className="w-32 h-32 mx-auto mb-6 rounded-full bg-accent text-black flex items-center justify-center text-3xl font-bold shadow-md">
  {doctor.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()}
</div>

      <h2 className="text-xl font-semibold">{doctor.name}</h2>
      <p className="text-gray-300">{doctor.specialization}</p>
      <span
        className={`inline-block mt-2 px-3 py-1 text-sm rounded ${
          doctor.available ? "bg-green-600" : "bg-red-500"
        }`}
      >
        {doctor.available ? "Available Today" : "Unavailable"}
      </span>
      <Link
        to={`/doctors/${doctor.id}`}
        className="inline-block mt-4 px-4 py-2 bg-accent text-black font-semibold rounded hover:bg-sky-400 transition"
      >
        View Profile
      </Link>
    </div>
  );
};

export default DoctorCard;
