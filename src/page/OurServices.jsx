import React, { useEffect } from "react";
import servicesBannerImage from "../assets/service-website.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import { ourServices } from "./AllServicesDataHere";
import ServiceCard from "../components/ServiceCard";

function OurServices() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // animate once
  }, []);
  return (
    <div>
      <div
        className="relative h-[70vh] md:min-h-screen flex items-center justify-center text-center px-6"
        style={{
          backgroundImage: `url(${servicesBannerImage})`,
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
            Our Features & <span className="text"> Services</span>
          </h1>
          <p
            className="text-lg md:text-xl leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            At PTL Marketing, we deliver complete digital solutions—from SEO and
            social media to branding and 24/7 support—helping your business
            stand out and grow with measurable results.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-2.5 md:px-20 py-12 bg-color justify-items-center">
        {ourServices.map((item, index) => (
          <div key={index} data-aos="fade-up" data-aos-delay={index * 250}>
            <ServiceCard data={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurServices;
