// src/pages/Home.tsx
import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Layout>
      <div className="text-center py-16">
        <h1 className="text-4xl font-bold mb-4">Welcome to HealthCare Portal 🩺</h1>
        <p className="text-gray-300 mb-8 text-lg">
          Book appointments with trusted doctors easily.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/doctors"
            className="px-6 py-3 bg-accent text-black font-semibold rounded hover:bg-sky-400 transition"
          >
            View Doctors
          </Link>
          <Link
            to="/login"
            className="px-6 py-3 bg-secondary border border-gray-600 text-white rounded hover:bg-gray-700 transition"
          >
            Login
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
