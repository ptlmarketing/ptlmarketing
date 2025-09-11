import React from "react";
import { motion } from "framer-motion";
import {
  FaTachometerAlt,
  FaUser,
  FaEnvelope,
  FaPlusSquare,
  FaEye,
  FaSignOutAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/PTL Marketing logo.png";

// Updated menu items (with route paths)
const navItems = [
  { icon: <FaTachometerAlt />, label: "Dashboard", path: "/admin" },
  { icon: <FaUser />, label: "User", path: "/admin/users" },
  { icon: <FaEnvelope />, label: "Contact", path: "/admin/contacts" },
  { icon: <FaPlusSquare />, label: "Create Blog", path: "/admin/create-blog" },
  { icon: <FaEye />, label: "See Blog", path: "/admin/blogs" },
];

export default function Sidebar({ isOpen, setIsOpen }) {
  return (
    <div className="p-3">
      <motion.div
        initial={false}
        animate={{ width: isOpen ? "4rem" : "16rem" }}
        transition={{ duration: 0.3 }}
        className={`flex flex-col text-white z-50 shadow shadow-white rounded-xl ${
          isOpen
            ? "relative"
            : "md:relative fixed md:top-0 md:left-0 top-3 left-3 dark:bg-[#181818]"
        }`}
        style={{ height: "calc(100vh - 25px)" }}
      >
        {/* Top Section */}
        <div className="p-4 space-y-4 flex-grow">
          {/* Logo Section */}
          <div className="flex justify-center">
            {isOpen ? (
              <img src={logo} alt="logo" className="w-8 h-8" />
            ) : (
              <img src={logo} alt="logo" className="w-18" />
            )}
          </div>

          {/* Menu Items */}
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-4 hover:bg-gray-800 p-2 rounded-md cursor-pointer"
            >
              {item.icon}
              <span
                className={`${
                  isOpen ? "hidden" : "inline"
                } transition-all duration-300`}
              >
                {item.label}
              </span>
            </Link>
          ))}
        </div>

        {/* Logout Button at Bottom */}
        <div className="p-4 border-t border-gray-700">
          <div
            onClick={() => alert("Logging out...")}
            className="flex items-center gap-4 text-red-500 hover:bg-red-800 hover:text-white p-2 rounded-md cursor-pointer"
          >
            <FaSignOutAlt />
            <span
              className={`${
                isOpen ? "hidden" : "inline"
              } transition-all duration-300`}
            >
              Logout
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
