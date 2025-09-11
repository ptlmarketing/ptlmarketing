import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white text-center px-4">
      <h1 className="text-7xl font-extrabold text-red-500 drop-shadow-lg">
        404
      </h1>
      <p className="mt-6 text-2xl font-semibold flex items-center gap-2">
        😕 Oops! Page Not Found
      </p>
      <p className="text-gray-400 mt-3 text-lg">
        🚧 The page you are looking for doesn’t exist or has been moved.
      </p>

      <div className="mt-8 flex gap-4">
        <Link
          to="/"
          className="px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg hover:scale-105 transition transform text-white shadow-lg"
        >
          🏠 Go Home
        </Link>
        <Link
          to="/contact"
          className="px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg hover:scale-105 transition transform text-white shadow-lg"
        >
          📞 Contact Us
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
