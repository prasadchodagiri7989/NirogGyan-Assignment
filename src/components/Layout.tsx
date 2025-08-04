// src/components/Layout.tsx
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-primary text-white">
      <header className="bg-secondary px-6 py-4 shadow-md">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <Link to="/" className="text-2xl font-semibold">
            🩺 HealthCare Portal
          </Link>
          <nav className="space-x-4 text-sm">
            <Link to="/doctors" className="hover:text-accent">
              Doctors
            </Link>
            <Link to="/profile" className="hover:text-accent">
              Profile
            </Link>
            <Link to="/login" className="hover:text-accent">
              Login
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow px-6 py-8 max-w-6xl mx-auto">{children}</main>

      <footer className="bg-secondary py-4 text-center text-sm">
        © {new Date().getFullYear()} Healthcare Booking. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
