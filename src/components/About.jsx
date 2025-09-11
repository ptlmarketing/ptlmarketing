import React from "react";
import { motion } from "framer-motion";
import GetQuotationButton from "./GetQuotationButton";

function About({ image, heading, paragraph1, paragraph2, paragraph3, uspList, buttonText }) {
  return (
    <div className="mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-color">
      {/* Left Column: Image */}
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <img
          src={image}
          alt={heading}
          className="rounded-2xl w-full max-w-md object-cover"
        />
      </motion.div>

      {/* Right Column: Content */}
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p
          className="text-xl font-thin text text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {heading}
        </motion.p>

        <motion.p
          className="font-semibold text-3xl md:text-4xl text-black text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {paragraph1}
        </motion.p>

        <motion.p
          className="text-gray-600 text-justify md:text-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {paragraph2}
        </motion.p>

        <motion.p
          className="text-gray-600 font-bold"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {paragraph3}
        </motion.p>

        {/* USP List */}
        <motion.ul
          className="space-y-3 text-gray-700"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          viewport={{ once: true }}
        >
          {uspList.map((item, index) => (
            <li key={index}>✅ {item}</li>
          ))}
        </motion.ul>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <GetQuotationButton title={buttonText} />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About;
