import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

function FloatingSocialMedia() {
  const socials = [
    { icon: <FaFacebookF />, link: "https://facebook.com", color: "bg-blue-600" },
    { icon: <FaTwitter />, link: "https://twitter.com", color: "bg-sky-500" },
    { icon: <FaLinkedinIn />, link: "https://linkedin.com", color: "bg-blue-700" },
    { icon: <FaInstagram />, link: "https://instagram.com", color: "bg-pink-600" },
  ];

  return (
    <div className="fixed top-1/3 left-4 z-50 flex flex-col gap-3">
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`${social.color} text-white w-12 h-12 flex justify-center items-center rounded-full shadow-lg hover:scale-110 transition-transform duration-300`}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}

export default FloatingSocialMedia;
