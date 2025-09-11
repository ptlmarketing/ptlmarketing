import React, { useEffect } from "react";
import { testimonialsData } from "./AllServicesDataHere";
import testimonial from '../assets/testimonials.png'
import AOS from "aos";
import "aos/dist/aos.css";

function Testimonials() {
      useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // animate once
  }, []);
  return (
    <div>
      <div
        className="relative h-[70vh] md:min-h-screen flex items-center justify-center text-center px-6"
        style={{
          backgroundImage: `url(${testimonial})`,
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
            Testimonials
          </h1>
          <p
            className="text-lg md:text-xl leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="500"
          >
           Trusted by Many, Loved by All – Discover Real Stories of Success, Satisfaction, and Trust from Our Happy Clients.
          </p>
        </div>
      </div>
      <div className="py-12 px-6 bg-color">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsData.map((t, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-lg">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                “{t.message}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
