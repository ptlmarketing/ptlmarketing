import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#23201E] text-gray-300 py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Column 1 - Company Info */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">
            PTL Marketing
          </h2>
          <p className="text-sm leading-relaxed">
            We help businesses grow with digital marketing, SEO, content, and
            paid campaigns. Your trusted partner for online success.
          </p>
          <div className="flex space-x-4 mt-3">
            {/* External social media links (still <a>) */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#F97316] transition border p-2 rounded"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#F97316] transition border p-2 rounded"
            >
              <FaTwitter size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#F97316] transition border p-2 rounded"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#F97316] transition border p-2 rounded"
            >
              <FaInstagram size={18} />
            </a>
          </div>
        </div>

        {/* Column 2 - Company */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Company</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-[#F97316] transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#F97316] transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[#F97316] transition">
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/testimonial"
                className="hover:text-[#F97316] transition"
              >
                Testimonial
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#F97316] transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 - Quick Links */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/support" className="hover:text-[#F97316] transition">
                Support
              </Link>
            </li>
            <li>
              <Link
                to="/privacy-policy"
                className="hover:text-[#F97316] transition"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-[#F97316] transition">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-[#F97316] transition">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-[#F97316] transition">
                Blog & News
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4 - Contact Info */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Contact Us</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center space-x-2">
              <FaEnvelope className="text-[#F97316]" />
              <span>ptlmarketingg@gmail.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaPhoneAlt className="text-[#F97316]" />
              <span>+91 93542 30939</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-[#F97316]" />
              <span>3810/5 Kanhaiya Nagar, Delhi 110052</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} PTL Marketing. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
