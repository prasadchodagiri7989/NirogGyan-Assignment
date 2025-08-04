// src/pages/Login.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return alert("Please enter your name and email");

    login({ email, name });
    navigate("/profile");
  };

  return (
    <Layout>
      <div className="max-w-md mx-auto bg-secondary p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm mb-1" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full p-2 rounded bg-primary border border-gray-600 text-white"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-2 rounded bg-primary border border-gray-600 text-white"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-accent text-black font-semibold rounded hover:bg-sky-400 transition"
          >
            Login
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
