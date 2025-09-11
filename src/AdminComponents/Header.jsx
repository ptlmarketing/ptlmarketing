import React from "react";
import { FaBars } from "react-icons/fa";

export default function Header({ toggleSidebar }) {
  return (
   <div className="p-3">
     <header className="flex w-full  items-center justify-between px-4 py-3 bg-white dark:bg-[#212121] shadow shadow-white rounded-xl">
       <button onClick={toggleSidebar} className="text-xl md:block hidden text-white cursor-pointer">
        <FaBars />
      </button>
      {/* Hamburger only on mobile */}
      <h1 className="text-lg font-semibold text-gray-700 dark:text-white">YouTube Studio</h1>
      <button onClick={toggleSidebar} className="text-xl md:hidden text-white cursor-pointer">
        <FaBars />
      </button>
    </header>
   </div>
  );
}
