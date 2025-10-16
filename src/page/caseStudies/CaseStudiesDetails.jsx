import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import caseStudies from "./caseStudies";
import { useParams } from "react-router-dom";

function CaseStudiesDetails() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const { slug } = useParams();

  const caseStudy = caseStudies.find(
    (study) => study.slug.toLowerCase() === slug.toLowerCase()
  );

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src={caseStudy.heroImage}
          alt={caseStudy.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <div className="flex flex-wrap gap-4 mb-4">
                <span className="bg-orange-500 px-4 py-2 rounded-full text-sm font-semibold">
                  {caseStudy.category}
                </span>
                <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                  {caseStudy.date}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
                {caseStudy.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl">
                {caseStudy.description}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Project Info Bar */}
      <div className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-gray-400 text-sm mb-2">Client</div>
              <div className="font-semibold text-lg">{caseStudy.client}</div>
            </div>
            <div>
              <div className="text-gray-400 text-sm mb-2">Category</div>
              <div className="font-semibold text-lg">{caseStudy.category}</div>
            </div>
            <div>
              <div className="text-gray-400 text-sm mb-2">Date</div>
              <div className="font-semibold text-lg">{caseStudy.date}</div>
            </div>
            <div>
              <div className="text-gray-400 text-sm mb-2">Duration</div>
              <div className="font-semibold text-lg">{caseStudy.duration}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Challenge & Solution Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4">
              <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
                The Challenge
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What We Were Up Against
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {caseStudy.challenge}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4">
              <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
                The Solution
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How We Solved It
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {caseStudy.solution}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Results Section */}
      <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
              The Results
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4 mb-4">
              Measurable Impact
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our strategic approach delivered exceptional results across all
              key metrics
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {caseStudy.results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-3 group-hover:scale-110 transition-transform duration-300">
                    {result.metric}
                  </div>
                  <div className="text-gray-700 font-medium">
                    {result.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

     {/* Services & Technologies */}
<div className="max-w-7xl mx-auto px-6 lg:px-62 py-20 ">
  <div className="grid md:grid-cols-2 gap-12">
    {/* Services Column */}
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Services Provided
      </h3>
      <ul className="list-disc list-inside space-y-2">
        {caseStudy.serviceDetails.map((service, index) => (
          <li key={index}>
            <strong>{service.name}:</strong> {service.description}
          </li>
        ))}
      </ul>
    </div>

    {/* Technologies Column */}
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Technologies Used
      </h3>
      <ul className="list-disc list-inside space-y-2">
        {caseStudy.technologyDetails.map((tech, index) => (
          <li key={index}>
            <strong>{tech.name}:</strong> {tech.description}
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>


      {/* Gallery Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Project Gallery
            </h2>
            <p className="text-gray-600 text-lg">
              A visual journey through the project
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudy.gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl aspect-video cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 lg:p-16 text-white relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <svg
              className="w-12 h-12 text-orange-500 mb-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>

            <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed mb-8 font-light">
              {caseStudy.testimonial.quote}
            </p>

            <div className="flex items-center gap-4">
              <img
                src={caseStudy.testimonial.image}
                alt={caseStudy.testimonial.author}
                className="w-16 h-16 rounded-full object-cover border-2 border-orange-500"
              />
              <div>
                <div className="font-semibold text-lg">
                  {caseStudy.testimonial.author}
                </div>
                <div className="text-gray-400">
                  {caseStudy.testimonial.position}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="relative bg-gradient-to-br from-orange-500 to-orange-600 py-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Start Your Success Story?
          </motion.h2>
          <motion.p
            className="text-white/90 text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's discuss how we can help transform your business with
            innovative solutions
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-orange-500 px-10 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-3 group"
            >
              Start a Project
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-orange-500 transition-all duration-300"
            >
              View More Cases
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default CaseStudiesDetails;
