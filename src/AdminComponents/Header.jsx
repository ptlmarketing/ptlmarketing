import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import {jwtDecode} from "jwt-decode";

export default function Header({ toggleSidebar }) {
  const [username, setUsername] = useState("Admin"); 

  useEffect(() => {
    const token = localStorage.getItem("authToken"); 
    // console.log(token)
    if (token) {
      try {
        const decoded = jwtDecode(token);
        // console.log(decoded); // { id: "123", name: "Amit", role: "admin", ... }
        if (decoded?.name) {
          setUsername(decoded.name);
        }
      } catch (error) {
        console.error("Invalid token:", error);
      }
    }
  }, []);

  return (
    <div className="p-3">
      <header className="flex w-full items-center justify-between px-4 py-3 bg-white dark:bg-[#212121] shadow shadow-white rounded-xl">
        <button
          onClick={toggleSidebar}
          className="text-xl md:block hidden text-white cursor-pointer"
        >
          <FaBars />
        </button>
        {/* Dynamic Name from Token */}
        <h1 className="text-lg font-semibold text-gray-700 dark:text-white">
          {username}
        </h1>
        <button
          onClick={toggleSidebar}
          className="text-xl md:hidden text-white cursor-pointer"
        >
          <FaBars />
        </button>
      </header>
    </div>
  );
}
