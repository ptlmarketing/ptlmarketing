import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/PTL Marketing logo.png";
import { AiOutlineMenuFold } from "react-icons/ai";
import GetQuotationButton from "./GetQuotationButton";
import EnquiryForm from "./EnqueryForm";

// ✅ For desktop animation
const MotionLink = motion.create(Link);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [slideIsOpen, setSlideIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Home", to: "/" }, 
    { name: "About", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Blog", to: "/blog" },
    { name: "FAQ", to: "/faq" },
    { name: "Contact", to: "/contact" },
  ];

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed md:top-5 left-0 w-full z-50">
        <div
          className={`md:w-[1280px] mx-auto px-4 backdrop-blur-xl text-white shadow-lg md:rounded-full transition-colors duration-500 ${
            isScrolled ? "bg-black/65 py-2" : "bg-transparent"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <Link to="/" className="text-2xl font-bold tracking-wide">
                <img src={logo} alt="Logo" className="w-[60px]" />
              </Link>

              {/* Desktop Nav */}
              <motion.nav
                className="hidden md:flex space-x-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ staggerChildren: 0.15 }}
              >
                {navLinks.map((link, i) => (
                  <MotionLink
                    key={i}
                    to={link.to}
                    className="relative text-lg font-medium pb-1 text-white transition-colors duration-300 hover:text-[#F97316]"
                  >
                    {link.name}
                  </MotionLink>
                ))}
              </motion.nav>

              {/* Right Side */}
              <div className="flex items-center gap-4">
                {/* Desktop Button */}
                <div className="hidden md:block">
                  <GetQuotationButton title="Get Quotation" />
                </div>

                {/* Desktop Slide Menu */}
                <div className="hidden md:block text-3xl border p-1 cursor-pointer rounded">
                  <AiOutlineMenuFold onClick={() => setSlideIsOpen(true)} />
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                  <button className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ✅ Simple Mobile Nav */}
          {isOpen && (
            <div className="md:hidden px-6 py-4 space-y-4 rounded-b-2xl">
              {navLinks.map((link, i) => (
                <Link
                  key={i}
                  to={link.to}
                  className="block text-lg text-white hover:text-[#F97316]"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <GetQuotationButton title="Get Quotation" />
            </div>
          )}
        </div>
      </header>

      {/* ===== Slide Overlay Menu (Desktop only) ===== */}
      {slideIsOpen && (
        <>
          {/* Background overlay */}
          <div
            className="fixed inset-0 bg-black/70 z-40"
            onClick={() => setSlideIsOpen(false)}
          />

          {/* Slide panel */}
          <motion.div
            className="fixed top-0 right-0 w-80 h-screen bg-white z-50 shadow-lg flex flex-col overflow-y-auto [&::-webkit-scrollbar]:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
          >
            <button
              className="self-start text-2xl mt-2 ml-2"
              onClick={() => setSlideIsOpen(false)}
            >
              <FaTimes />
            </button>
            <div className="flex-1">
              <EnquiryForm />
            </div>
          </motion.div>
        </>
      )}
    </>
  );
};

export default Navbar;
