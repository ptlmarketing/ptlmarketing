import React, { useState } from "react";
import Sidebar from "../AdminComponents/Sidebar";
import Header from "../AdminComponents/Header";
import { Outlet } from "react-router-dom";


export default function AdminLayout() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex h-screen  bg-gray-100 dark:bg-[#181818]">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex flex-col flex-1">
        <Header toggleSidebar={() => setIsOpen(!isOpen)} />
        <main className="p-3 pt-0">
          <div className="text-gray-900 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 dark:text-white shadow shadow-white rounded-xl p-2" style={{ height: "calc(100vh - 90px)" ,scrollbarWidth: "none", msOverflowStyle: "none"}}>
          <Outlet/>
          </div>
        </main>
      </div>
    </div>
  );
}
