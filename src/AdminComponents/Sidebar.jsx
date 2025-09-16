import { motion } from "framer-motion";
import {
  FaTachometerAlt,
  FaUser,
  FaEnvelope,
  FaPlusSquare,
  FaEye,
  FaSignOutAlt,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/PTL Marketing logo.png";
import { logoutUserAPIService } from "../service/apiService";
import { toast } from "react-toastify";

const navItems = [
  { icon: <FaTachometerAlt />, label: "Dashboard", path: "/dashboard" },
  { icon: <FaUser />, label: "User", path: "/dashboard/users" },
  { icon: <FaEnvelope />, label: "Contact", path: "/dashboard/contacts" },
  {
    icon: <FaPlusSquare />,
    label: "Create Blog",
    path: "/dashboard/create-blog",
  },
  { icon: <FaEye />, label: "See Blog", path: "/dashboard/see-blogs" },
];

export default function Sidebar({ isOpen, setIsOpen }) {
  const navigate = useNavigate();

  const logoutUser = async () => {
    try {
    const res=  await logoutUserAPIService();
      // Redirect to login page after logout
      localStorage.removeItem("authToken");
      toast.success(res?.message)
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="p-2">
      <motion.div
        initial={false}
        animate={{ width: isOpen ? 64 : 240 }} // 4rem / 16rem in px
        transition={{ duration: 0.3 }}
        className={`flex flex-col bg-[#1f1f1f] text-white shadow-lg rounded-xl overflow-hidden`}
        style={{ height: "calc(100vh - 20px)" }}
      >
        {/* Logo */}
        <div className="flex justify-center items-center p-4 border-b border-gray-700">
          <img
            src={logo}
            alt="PTL Marketing"
            className={isOpen ? "w-8 h-8" : "w-32"}
          />
        </div>

        {/* Navigation */}
        <div className="flex flex-col flex-grow p-3 space-y-1">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-700 transition-colors duration-200"
            >
              <span className="text-lg">{item.icon}</span>
              <span
                className={`text-sm font-medium ${
                  isOpen ? "hidden" : "inline"
                }`}
              >
                {item.label}
              </span>
            </Link>
          ))}
        </div>

        {/* Logout */}
        <div className="p-3 border-t border-gray-700">
          <div
            onClick={logoutUser}
            className="flex items-center gap-3 p-2 rounded-md hover:bg-red-600 hover:text-white transition-colors cursor-pointer"
          >
            <FaSignOutAlt className="text-lg text-red-500" />
            <span
              className={`text-sm font-medium ${isOpen ? "hidden" : "inline"}`}
            >
              Logout
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
