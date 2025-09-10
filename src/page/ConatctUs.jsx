import React, { useEffect } from 'react'
import conatcUsImage from '../assets/contactUs.png'
import AOS from "aos";
import "aos/dist/aos.css";
import { FaPhoneAlt ,FaMapMarkerAlt} from "react-icons/fa";
import { HiBuildingOffice2 } from "react-icons/hi2";

function ConatctUs() {
useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // animate once
  }, []);

  const contacts = [
    {
      icon: <FaMapMarkerAlt className="w-10 h-10 text-white" />,
      title: "Office Address",
      info: "3810/5 Kanhaiya nagar Delhi 110052",
      desc: "We help businesses grow and succeed online.",
    },
    {
      icon: <FaPhoneAlt className="w-10 h-10 text-white" />,
      title: "24/7 Customer Support",
      info: "+91 93542 30939  ptlmarketingg@gmail.com",
      desc: "Always Available: 24/7 Customer Support at your service.",
    },
    {
      icon: <HiBuildingOffice2 className="w-10 h-10 text-white" />,
      title: "Business Hours",
      info: "Sat – Mon 10 am – 7 pm Sun Off – Day",
      desc: "Open Mon–Fri 9 AM–7 PM, Sat 10 AM–5 PM, Closed Sun.",
    },
  ];

  return (
  <>
   <div
        className="relative min-h-screen flex items-center justify-center text-center px-6"
        style={{
          backgroundImage: `url(${conatcUsImage})`,
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
            Get in  <span className="text-[#F97316]">Touch</span>
          </h1>
          <p
            className="text-lg md:text-xl leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="500"
          >
           Have a project in mind or simply want to know more about how we can help your business grow? Drop us a message—we’re always happy to connect and guide you in the right direction.
          </p>
        </div>
        <div className='bg-color'>

        </div>
        
      </div>
        <div className="bg-color py-20 px-12">
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="bg-[#d8d8d8] shadow-lg rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-xl transition"
          >
            <div className="mb-4 bg p-7 rounded-full -mt-20">{contact.icon}</div>
            <h3 className="text-xl font-semibold text-black mb-2">
              {contact.title}
            </h3>
            <p className="text-teal-600 font-medium">{contact.info}</p>
            <p className="text-gray-600 mt-2">{contact.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </>
  )
}

export default ConatctUs
