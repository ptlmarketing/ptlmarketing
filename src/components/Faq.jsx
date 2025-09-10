import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BiSolidRightArrow } from "react-icons/bi";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    { question: "What services do you offer?", answer: "We provide complete digital solutions including Digital Marketing, SEO, Social Media Marketing, Ads Management, and Branding." },
    { question: "How will digital marketing help my business?", answer: "Digital marketing improves your online visibility, helps attract more customers, increases engagement, and generates qualified leads for business growth." },
    { question: "How long does it take to see results from SEO?", answer: "SEO is a long-term strategy. On average, noticeable results can be seen within 3 to 6 months, depending on competition and industry." },
    { question: "Do you also run paid ads?", answer: "Yes, we specialize in Google Ads, Facebook & Instagram Ads, and LinkedIn Ads to drive targeted traffic and increase conversions." },
    { question: "Can you help with social media management?", answer: "Absolutely! We create engaging content, manage campaigns, and grow your audience across all major platforms." },
    // { question: "What is your refund policy?", answer: "We offer a 30-day money-back guarantee on all our services." },
  ];

  return (
   <div>
  <div className="space-y-2">       
    {faqs.map((faq, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.2, duration: 0.5 }}
        viewport={{ once: true }}
        className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
      >
        {/* Question Button */}
        <button
          onClick={() => toggleAccordion(index)}
          className={`w-full flex justify-between items-center text-left text-lg font-medium cursor-pointer transition-colors duration-300 
            ${activeIndex === index ? "bg-[#F97316] text-white" : "bg-[#099DA7] text-white "}`}
        ><div className='flex items-center'>
            <span ><BiSolidRightArrow className={`text-5xl text-[#19b0bb] -ml-2.5 p-0 ${activeIndex === index ? "text-[#fa954d]":""}`}/></span>
          <span>{faq.question}</span>
        </div>
          <span className="text-2xl font-bold text-[#58e2c2] pr-3">
            {activeIndex === index ? '−' : '+'}
          </span>
        </button>

        {/* Answer Panel */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={
            activeIndex === index
              ? { height: "auto", opacity: 1 }
              : { height: 0, opacity: 0 }
          }
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="overflow-hidden bg-gray-50"
        >
          <div className="px-6 py-4 text-gray-700 text-lg leading-relaxed">
            {faq.answer}
          </div>
        </motion.div>
      </motion.div>
    ))}
  </div>
</div>

  );
};

export default Faq;