import React, { useEffect, useState } from "react";
import "../App.css";
import Sidebar from "../AdminComponents/Sidebar";
import Header from "../AdminComponents/Header";
import { Outlet, useLocation } from "react-router-dom";

export default function AdminLayout() {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);
  return (
    <div className="flex h-screen  bg-gray-100 dark:bg-[#181818]">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex flex-col flex-1">
        <Header toggleSidebar={() => setIsOpen(!isOpen)} />
        <main className="p-3 pt-0">
          <div
            className="w-full text-gray-900 overflow-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 dark:text-white shadow shadow-white rounded-xl p-2"
            style={{
              height: "calc(100vh - 90px)",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
