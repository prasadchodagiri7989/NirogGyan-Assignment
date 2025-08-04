// src/App.tsx
import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <div className="dark min-h-screen bg-primary text-white">
      <AuthProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
};

export default App;
