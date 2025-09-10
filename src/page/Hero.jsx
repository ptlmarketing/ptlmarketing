import React, { useEffect, useMemo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import heroBanner from "../assets/background banner image.png";
import heroSectionImage from "../assets/heroSetionImage.webp";
import "./Hero.css";
import topImage from "../assets/feature-arrow-top.png";
import bottomImage from "../assets/feature-arrow-bottom.png";
import megaphone from "../assets/megaphone.png";
import boost from "../assets/boost.png";
import coding from "../assets/coding.png";
import connection from "../assets/connection.png";
import About from "../components/About";
import aboutImage from "../assets/circle image.png";
import GetQuotationButton from "../components/GetQuotationButton";
import ServiceCardOnHone from "../components/ServiceCardOnHone";
import { projectProfileData, servicesDataOnHome } from "./AllServicesDataHere";
import backgroundImageOverlay from "../assets/backgroundOverlayimage.png";
import cloudImage from "../assets/cloud effect.PNG";
import rocketImage from "../assets/rocket.png";
import Card from "../components/Card";
import Testimonial from "../components/Testimonial";
import Faq from "../components/Faq";

function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);
  // generate random blinking dots
  const stars = useMemo(() => {
    return Array.from({ length: 80 }).map((_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 1 + Math.random() * 3,
      delay: Math.random() * 4,
      duration: 1.2 + Math.random() * 1.5,
      opacity: 0.2 + Math.random() * 0.9,
      glow: Math.random() > 0.9,
    }));
  }, []);

  // Animations
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  //   const fadeInLeft = {
  //     hidden: { opacity: 0, x: -50 },
  //     show: { opacity: 1, x: 0, transition: { duration: 1 } },
  //   };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  //   How to work Data here

  const steps = [
    {
      id: 1,
      image: topImage,
      icons: megaphone,
      number: "01",
      heading: "Competitor analysis and keyword research",
    },
    {
      id: 2,
      image: bottomImage,
      icons: boost,
      number: "02",
      heading: "Craft a tailored SEO and digital plan",
    },
    {
      id: 3,
      image: topImage,
      icons: coding,
      number: "03",
      heading: "Optimize your website for search engines",
    },
    {
      id: 4,
      image: bottomImage,
      icons: connection,
      number: "04",
      heading: "Focus on long-term success & growth",
    },
  ];
  // Framer Motion variants for bottom-to-top fade-in
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <section className="hero relative h-screen overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${heroBanner})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Blinking dots */}
        <div className="stars-overlay absolute inset-0 pointer-events-none z-10">
          {stars.map((s) => (
            <span
              key={s.id}
              className={`star ${s.glow ? "star--glow" : ""}`}
              style={{
                top: `${s.top}%`,
                left: `${s.left}%`,
                width: `${s.size}px`,
                height: `${s.size}px`,
                opacity: s.opacity,
                animationDelay: `${s.delay}s`,
                animationDuration: `${s.duration}s`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <motion.div
          className="hero-content relative z-20 flex flex-col md:flex-row justify-evenly items-center h-full text-white px-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Left Section */}
          <motion.div
            variants={fadeInUp}
            className="text-center md:text-left  space-y-6 flex flex-col justify-center"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-extrabold leading-tight"
            >
              Grow Your Business <br /> with{" "}
              <span className="text-[#F97316]">PTL Marketing</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-2xl text-gray-200"
            >
              From SEO to Social Media – We Build Your <br /> Online Presence
              Stronger
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col md:flex-row md:items-center justify-between md:space-x-6 space-y-4 md:space-y-0"
            >
              <GetQuotationButton title="Get Quotation" />
              <motion.div
                className="text-center md:text-left -mt-8 hidden md:block border p-8 px-12 rounded backdrop-blur z-40 border-orange-400"
                animate={{ x: [-30, 100, -30] }} // move right then left then back
                transition={{
                  duration: 10, // time for one full loop
                  repeat: Infinity, // loop infinitely
                  ease: "linear",
                }}
              >
                <p className="text-6xl font-bold">300+</p>
                <p className="text-lg text-gray-300">Trusted Clients</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Section (Image) */}
          <motion.div
            variants={fadeInRight}
            className="mt-10 md:mt-0 md:ml-12 flex flex-col justify-end h-full"
          >
            <motion.img
              src={heroSectionImage}
              alt="PTL Hero"
              className="w-[70%] md:w-[400px] mx-auto drop-shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* How it work Section Statr Herre*/}

      <div className="bg-color min-h-screen text-center py-10 flex flex-col justify-center items-center">
        <div>
          <motion.p
            className="text-xl text"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            {" "}
            How it work{" "}
          </motion.p>
          <motion.h1
            className="text-5xl pt-2 font-bold"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            Our Step-by-Step Marketing Process
          </motion.h1>
        </div>
        <section className="py-12 w-full">
          <div className=" mx-auto px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                className=" rounded-xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  delay: index * 0.5,
                  duration: 0.8,
                  ease: "linear",
                }}
              >
                {/* Image */}
                {[1, 3].includes(step.id) && (
                  <img src={step.image} alt={step.heading} className="-mb-26" />
                )}

                {/* Icon */}
                <div className="mb-2 bg-white p-14 rounded-full -ml-9">
                  <img src={step.icons} alt="" />
                </div>

                {[2, 4].includes(step.id) && (
                  <img src={step.image} alt={step.heading} className="-mt-26" />
                )}
                {/* Number */}
                <p className="outline-number text-5xl font-bold mb-2 -ml-9 pt-5">
                  {step.number}
                </p>

                {/* Heading */}
                <h3 className="text-xl ">{step.heading}</h3>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* About Us Section Statr Here */}

      <About
        image={aboutImage}
        heading="About Us"
        paragraph1="PTL Marketing – What We Do & Our USP."
        paragraph2="PTL Marketing is a trusted digital growth partner helping businesses scale in the online world. Our team leverages SEO, Social Media Marketing, Paid Ads, Branding, and Content Strategy to boost your brand’s reach and visibility."
        paragraph3="🔑 Our USP (Unique Selling Proposition):"
        uspList={[
          "Result-driven digital campaigns",
          "Tailored marketing strategies for every business",
          "Transparent reporting & performance tracking",
          "Experienced team with proven success stories",
        ]}
        buttonText="Get Quotation"
      />

      {/* Our Servicese Section Start Here */}
      <div>
        <div
          style={{
            backgroundImage: `url(${backgroundImageOverlay})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="px-6 py-12 min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#0c0101de]  to-[rgb(56,24,2)] relative">
            <div className="flex flex-col justify-center items-center py-5">
              <h1 className="text-center text text-xl" data-aos="fade-up">
                Our Services
              </h1>
              <h1
                className="text-white text-4xl text-center w-[70%] py-8 font-[600]"
                data-aos="fade-up"
                data-aos-delay={250}
              >
                Our Services We provide a complete range of digital solutions to
                help your business grow online
              </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {servicesDataOnHome.map((item, index) => {
                return (
                  <div data-aos="fade-up" data-aos-delay={index * 250}>
                    <ServiceCardOnHone data={item} key={index} />
                  </div>
                );
              })}
            </div>
            <img
              src={rocketImage}
              alt="Rocket"
              className="w-[8%] absolute -bottom-[10px] animate-rocket"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={cloudImage} alt="" className="w-full" />
        </div>
      </div>

      {/* Our Project Section Statr here */}
      <div className="px-5 lg:px-20 py-10">
        {/* Heading Section */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h1
            className="text-3xl md:text-4xl font-bold text-gray-900"
            data-aos="fade-up"
          >
            Build Your Digital Success Story
          </h1>
          <p
            className="text-gray-600 mt-4"
            data-aos="fade-up"
            data-aos-delay={250}
          >
            Take your brand to new heights with our expert web solutions,
            powerful marketing strategies, and state-of-the-art technology.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Cards Grid */}
          {projectProfileData.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 250} // delay each card by 150ms
            >
              <Card
                image={item.image}
                heading={item.Heading}
                paragraph={item.paragraph}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial Section Start Here */}
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6 lg:px-20 py-16 bg-color">
        {/* Left Column - Text Content */}
        <div data-aos="fade-right">
          <h1 className="text-3xl md:text-4xl font-bold text mb-4">
            What Our Clients Say
          </h1>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Our clients trust us because we deliver measurable results and
            creative solutions that help their businesses grow. From boosting
            online visibility and generating qualified leads to building strong
            brand identities, we’ve partnered with companies across diverse
            industries to achieve real success. Their words of appreciation
            inspire us to keep innovating and delivering excellence every step
            of the way.
          </p>
          <GetQuotationButton title="Get Quotation" />
        </div>

        {/* Right Column - Testimonial Carousel/Component */}
        <div data-aos="fade-left">
          <p className="text mb-8 text-lg">Testimonials</p>
          <Testimonial />
        </div>
      </div>

      {/* FAQ Section Start Here */}
<div className="min-h-[70vh] grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6 lg:px-20 py-16 bg-color">
  {/* Left: FAQ Accordion */}
  <div className="order-2 md:order-1">
    <Faq />
  </div>

  {/* Right: Heading + Paragraph + Button */}
  <div className="order-1 md:order-2 space-y-6" data-aos="fade-left">
    <h1 className="text-3xl lg:text-4xl font-bold text" >
      Frequently Asked Questions
    </h1>
    <p className="text-gray-600 leading-relaxed">
      We understand you may have questions before getting started, which is why we’ve put together 
      answers to some of the most common queries our clients ask. From our services, process, and 
      timelines to how digital marketing, SEO, ads, and social media campaigns work, this section is 
      designed to give you quick clarity and confidence in choosing us as your digital partner.
    </p>
    <GetQuotationButton title="Get Quotation" />
  </div>
</div>

    </>
  );
}

export default Hero;
