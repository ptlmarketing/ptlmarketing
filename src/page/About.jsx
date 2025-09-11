import React, { useEffect } from "react";
import aboutBackgroundImage from "../assets/aboutUsBanckgroundImage.png";
import aboutUsImage from "../assets/Website Design & Development.png";
import GetQuotationButton from "../components/GetQuotationButton";
import { FaCheckCircle } from "react-icons/fa";
import { BsWechat } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import backgroundImageOverlay from "../assets/backgroundOverlayimage.png";
import ServiceCardOnHome from "../components/ServiceCardOnHome";
import {
  aboutMissionSection,
  ourProcessStepByStep,
  whyChooseUsPTL,
} from "./AllServicesDataHere";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // animate once
  }, []);
  return (
    <>
      <div
        className="relative h-[70vh] md:min-h-screen flex items-center justify-center text-center px-6"
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
          <p
            className="text-lg md:text-xl leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="500"
          >
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
            data-aos="fade-up"
          />
        </div>

        {/* Right Side - Content */}
        <div className="space-y-6">
          <p className="text-[#F97316] font-semibold text-center" data-aos="fade-up">
            About Us
          </p>
          <h1
            className="text-3xl md:text-5xl font-bold text-gray-800 text-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            PTL Marketing
          </h1>
          <p
            className="text-gray-600 leading-relaxed text-justify md:text-left"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            At <b>PTL Marketing</b>, we believe every business has a unique
            story that deserves to shine. That’s why we combine{" "}
            <b>
              data-driven marketing strategies, creative storytelling, and
              measurable performance
            </b>
            to not only grow visibility but also{" "}
            <b>turn audiences into loyal customers.</b>
            Whether you’re a <b>startup looking for traction</b> or an{" "}
            <b>established brand aiming for scale</b>, our mission is simple —
            to help you achieve sustainable growth, stronger engagement, and
            higher revenue with complete <b>transparency and innovation</b> at
            every step.
          </p>

          {/* Bottom Section */}
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8 border rounded-lg border-gray-300 p-2"
            data-aos="fade-up"
            data-aos-delay="700"
          >
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
                  <FaCheckCircle className="text-[#F97316]" /> Marketing
                  professional
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <FaCheckCircle className="text-[#F97316]" /> Help businesses
                  increase
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <FaCheckCircle className="text-[#F97316]" /> Latest
                  technologies
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <FaCheckCircle className="text-[#F97316]" /> Measurable
                  results
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

      <div>
        <div
          style={{
            backgroundImage: `url(${backgroundImageOverlay})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className=" px-2.5 md:px-20 py-12 min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#0c0101de]  to-[rgb(56,24,2)] relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center py-5 ">
              {aboutMissionSection.map((item, index) => {
                return (
                  <div key={index} data-aos="fade-up" data-aos-delay={index * 250}>
                    <ServiceCardOnHome data={item} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-12 bg-color">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-black mb-10" data-aos="fade-up">
          Why Choose <span className="text">PTL Marketing ?</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUsPTL.map((item, index) => {
            return (
              <div
                key={index}
                data-aos="fade-up" data-aos-delay={index * 250}
                className="  p-6 rounded-2xl shadow-lghover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                <h1 className="text-xl font-semibold text-[#F97316] mb-3">
                  {item.heading}
                </h1>
                <p className="text-[#000] text-base leading-relaxed">
                  {item.paragraph}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-gradient-to-b from-[#0c0101de] to-[#381802] py-16 px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-12" data-aos="fade-up">
          Our Process <span className="text-[#F97316]">(step-by-step)</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {ourProcessStepByStep.map((item, index) => {
            return (
              <div
                key={index}
                data-aos="fade-up" data-aos-delay={index * 250}
                className="bg-[#24191996] p-8 rounded-2xl shadow-lg shadow-black/40 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
              >
                {/* Step Number */}
                <div className="w-14 h-14 flex items-center justify-center bg-[#F97316] text-white font-bold text-xl rounded-full mb-6 shadow-md">
                  {item.number}
                </div>

                {/* Heading */}
                <h2 className="text-xl font-semibold text-[#F97316] mb-3">
                  {item.heading}
                </h2>

                {/* Paragraph */}
                <p className="text-[#cfcfcf] text-base leading-relaxed">
                  {item.paragraph}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      
    </>
  );
}

export default About;
