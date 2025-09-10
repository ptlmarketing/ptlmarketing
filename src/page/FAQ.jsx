import React, { useEffect } from "react";
import faqImage from "../assets/faq.png";
import { faqs } from "./AllServicesDataHere";
import AOS from "aos";
import "aos/dist/aos.css";

function FAQ() {
    useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // animate once
  }, []);
  return (
    <div>
      <div
        className="relative min-h-screen flex items-center justify-center text-center px-6"
        style={{
          backgroundImage: `url(${faqImage})`,
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
            PTL Marketing – <span className="text-[#F97316]">(FAQ)</span>
          </h1>
          <p
            className="text-lg md:text-xl leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Find quick answers to the most common questions about PTL
            Marketing’s digital solutions and services.
          </p>
        </div>
      </div>
      <div className="bg-color py-12 px-6">
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {faqs.map((faq, index) => (
            <div
            data-aos="fade-up"
            data-aos-delay={index*250}
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-lg text-teal-600 mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
