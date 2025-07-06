import React, { useState } from 'react'
import { LOGO_URL } from '../Utils/constant'
import { Link } from 'react-router-dom';
import useOnlineStatus from '../Utils/useOnlineStatus';

const Header = () => {
  const [status, setStatus] = useState("Login");
  
  const onlineStatus = useOnlineStatus();

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img className="h-10 w-auto" src={LOGO_URL} alt="logo" />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            <Link
              to="/"
              className="text-gray-700 hover:text-orange-500 transition"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-orange-500 transition"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-orange-500 transition"
            >
              Contact
            </Link>

            <button
              onClick={() =>
                setStatus((prev) => (prev === "Login" ? "Logout" : "Login"))
              }
              className="text-gray-700 hover:text-orange-500 transition"
            >
              {status}
            </button>

            <span className="text-sm text-gray-500">
              Status:{" "}
              <span
                className={`font-medium ${
                  onlineStatus ? "text-green-500" : "text-red-500"
                }`}
              >
                {onlineStatus ? "Online" : "Offline"}
              </span>
            </span>
          </nav>

          {/* Mobile menu placeholder */}
          <div className="md:hidden">
            {/* You can add a hamburger menu here later */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
