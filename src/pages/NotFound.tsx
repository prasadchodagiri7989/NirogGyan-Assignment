// src/pages/NotFound.tsx
import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const NotFound = () => {
  return (
    <Layout>
      <div className="text-center py-24">
        <h1 className="text-6xl font-bold text-accent mb-4">404</h1>
        <p className="text-gray-400 text-lg mb-6">Oops! Page not found.</p>
        <Link
          to="/"
          className="px-6 py-2 bg-accent text-black font-semibold rounded hover:bg-sky-400 transition"
        >
          Go Home
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
