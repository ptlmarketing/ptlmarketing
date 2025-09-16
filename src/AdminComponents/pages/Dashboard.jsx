import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaEnvelope,
  FaBlog,
  FaStar,
  FaRupeeSign,
  FaBriefcase,
} from "react-icons/fa";
import { dashboardDataAPIService } from "../../service/apiService";

export default function Dashboard() {
  const [dashboardData, setDashboardData] = useState({
    totalUsers: 0,
    totalBlogs: 0,
    totalContacts: 0,
  });

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const res = await dashboardDataAPIService();
        if (res?.success) {
          setDashboardData(res.data); 
        }
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchDashboardData();
  }, []);

  const stats = [
    {
      title: "Total Enquiries",
      value: dashboardData.totalContacts,
      icon: <FaEnvelope className="w-8 h-8 text-blue-500" />,
    },
    {
      title: "Total Users",
      value: dashboardData.totalUsers,
      icon: <FaUsers className="w-8 h-8 text-green-500" />,
    },
    {
      title: "Total Blogs",
      value: dashboardData.totalBlogs,
      icon: <FaBlog className="w-8 h-8 text-purple-500" />,
    },
    {
      title: "Total Reviews",
      value: 320, // API me ho to isko bhi dynamic kar dena
      icon: <FaStar className="w-8 h-8 text-yellow-500" />,
    },
    {
      title: "Total Revenue",
      value: "₹1,25,000", // future me API se laa sakte ho
      icon: <FaRupeeSign className="w-8 h-8 text-pink-500" />,
    },
    {
      title: "Active Services",
      value: 12, // API me ho to ye bhi laa lena
      icon: <FaBriefcase className="w-8 h-8 text-teal-500" />,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6"
    >
      <h2 className="text-3xl font-bold mb-6">📊 Dashboard Overview</h2>

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-5 flex items-center space-x-4 hover:shadow-xl transition"
          >
            <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-700">
              {stat.icon}
            </div>
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">{stat.title}</p>
              <h3 className="text-2xl font-bold">{stat.value}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
