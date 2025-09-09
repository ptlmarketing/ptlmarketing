import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/PTL Marketing logo.png";
import { AiOutlineMenuFold } from "react-icons/ai";
import GetQuotationButton from "./GetQuotationButton";

const MotionLink = motion(Link); // wrap Link with motion

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [slideIsOpen, setSlideIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Blog", to: "/blog" },
    { name: "Contact", to: "/contact" },
  ];

  // Variants for stagger effect
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <header className="fixed top-5 left-0 w-full z-50">
        <div className="md:w-[1280px] mx-auto px-4 backdrop-blur-xl text-white shadow-lg rounded-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <MotionLink
                to="/"
                className="text-2xl font-bold tracking-wide"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img src={logo} alt="Logo" className="w-[60px]" />
              </MotionLink>

              {/* Desktop Nav */}
              <motion.nav
                className="hidden md:flex space-x-8"
                variants={container}
                initial="hidden"
                animate="visible"
              >
                {navLinks.map((link, i) => (
                  <MotionLink
                    key={i}
                    to={link.to}
                    className={({ isActive }) =>
                      `relative text-lg font-medium pb-1 transition-colors duration-300 ${
                        isActive ? "text-[#F97316]" : "text-white"
                      }`
                    }
                    variants={item}
                    whileHover={{ scale: 1.1, color: "#F97316" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {link.name}
                  </MotionLink>
                ))}
              </motion.nav>

              {/* Right Side (Button + Slide Menu + Mobile Menu) */}
              <div className="flex items-center gap-4">
                {/* Get Quotation Button (Desktop only) */}
                <motion.div
                  className="hidden md:block "
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                 <GetQuotationButton title=" Get Quotation"/>
                </motion.div>

                {/* Desktop Slide Menu Button */}
                <div className="hidden md:block text-3xl border p-1 cursor-pointer rounded">
                  <AiOutlineMenuFold onClick={() => setSlideIsOpen(true)} />
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                  <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Nav */}
          {isOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={container}
              transition={{ duration: 0.4 }}
              className="md:hidden bg-black px-6 py-4 space-y-4 rounded-b-2xl"
            >
              {navLinks.map((link, i) => (
                <MotionLink
                  key={i}
                  to={link.to}
                  className="block text-lg hover:text-[#099da7]"
                  variants={item}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </MotionLink>
              ))}

              {/* Mobile button */}
            <GetQuotationButton title="Get Quotation"/>
            </motion.div>
          )}
        </div>
      </header>

      {/* ===== Slide Overlay Menu ===== */}
      {slideIsOpen && (
        <>
          {/* Background overlay */}
          <motion.div
            className="fixed inset-0 bg-black/70 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSlideIsOpen(false)}
          />

          {/* Slide panel */}
          <motion.div
            className="fixed top-0 right-0 w-80 h-full bg-white z-50 shadow-lg p-6 flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
          >
            <button
              className="self-end text-2xl mb-4"
              onClick={() => setSlideIsOpen(false)}
            >
              <FaTimes />
            </button>

       

            
          </motion.div>
        </>
      )}
    </>
  );
};

export default Navbar;
