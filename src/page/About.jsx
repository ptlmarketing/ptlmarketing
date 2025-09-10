import React, { useEffect } from "react";
import aboutBackgroundImage from "../assets/aboutUsBanckgroundImage.png";
import aboutUsImage from '../assets/Website Design & Development.png'
import GetQuotationButton from "../components/GetQuotationButton";
import { FaCheckCircle } from "react-icons/fa";
import { BsWechat } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
    useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // animate once
  }, []);
  return (
    <>
      <div
        className="relative min-h-screen flex items-center justify-center text-center px-6"
        style={{
          backgroundImage: `url(${aboutBackgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl text-white space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold" data-aos="fade-up">
            About <span className="text-[#F97316]">Us</span>
          </h1>
          <p className="text-lg md:text-xl leading-relaxed" data-aos="fade-up" data-aos-delay="500">
            Building brands that get noticed. We combine data-driven marketing,
            creative storytelling, and measurable performance to grow
            visibility, leads, and revenue for businesses of all sizes.
          </p>
        </div>
      </div>



      <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6 lg:px-20 py-16 bg-color">
      
      {/* Left Side - Image */}
      <div className="flex justify-center">
        <img
          src={aboutUsImage}
          alt="About PTL Marketing"
          className="rounded-2xl w-full"
          data-aos="fade-right"
        />
      </div>

      {/* Right Side - Content */}
      <div className="space-y-6">
        <p className="text-[#F97316] font-semibold" data-aos="fade-up">About Us</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800" data-aos="fade-up" data-aos-delay="300">
          PTL Marketing
        </h1>
        <p className="text-gray-600 leading-relaxed" data-aos="fade-up" data-aos-delay="500">
          At <b>PTL Marketing</b>, we believe every business has a unique story
          that deserves to shine. That’s why we combine{" "}
          <b>data-driven marketing strategies, creative storytelling, and measurable performance</b> 
          to not only grow visibility but also <b>turn audiences into loyal customers.</b> 
          Whether you’re a <b>startup looking for traction</b> or an{" "}
          <b>established brand aiming for scale</b>, our mission is simple — to
          help you achieve sustainable growth, stronger engagement, and higher
          revenue with complete <b>transparency and innovation</b> at every step.
        </p>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8 border rounded-lg border-gray-300 p-2" data-aos="fade-up" data-aos-delay="700">
          
          {/* Left - Custom Support */}
          <div className="p-6  text-black text-center bg-gray-300 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold ">Need Custom?</h2>
            <p className="mt-2 text-sm">
              We completed <b>85% success</b> project in business
            </p>
            <div className="mt-4">
              <GetQuotationButton title="Get Quotation" />
            </div>
          </div>

          {/* Right - Features + Live Chat */}
          <div className="space-y-4">
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-700">
                <FaCheckCircle className="text-[#F97316]" /> Marketing professional
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <FaCheckCircle className="text-[#F97316]" /> Help businesses increase
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <FaCheckCircle className="text-[#F97316]" /> Latest technologies
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <FaCheckCircle className="text-[#F97316]" /> Measurable results
              </li>
            </ul>

            {/* Live Chat Box */}
            <div className="flex items-center gap-3 p-4 bg-gray-100 rounded-xl shadow-md cursor-pointer hover:bg-[#F97316] hover:text-white transition">
              <BsWechat className="text-3xl text-[#099DA7]" />
              <h3 className="text-lg font-semibold">Live Chat</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default About;
