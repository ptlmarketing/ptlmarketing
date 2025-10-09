import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { createEnqueryFormDataAPIService } from "../service/apiService";
import { toast } from "react-toastify";
import Loader from "./Loader";

function EnquiryForm({ onSuccess }) {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const res = await createEnqueryFormDataAPIService(data);
      toast.success(res?.message);
      onSuccess()
      reset();
    } catch (error) {
      toast.error(error.message);
    }
    setLoading(false);
  };

  const services = [
    "Search Engine Optimization (SEO)",
    "Pay-Per-Click Advertising (PPC)",
    "Social Media Marketing",
    "Content Writing & Marketing",
    "Web Design & Development",
    "E-Commerce Development",
    "Mobile App Development",
    "Graphic Design & Branding",
    "Video Editing & Production",
    "Influencer Marketing",
    "Email Marketing Campaigns",
    "Conversion Rate Optimization (CRO)",
    "UI/UX Design",
    "Online Reputation Management (ORM)",
    "Marketing Automation Solutions",
    "Lead Generation Campaigns",
    "Consulting & Training in Digital Marketing",
    "Analytics & Performance Tracking",
    "Cloud & Hosting Solutions",
    "Software Development Services",
    "Other"
  ];

  return (
    <div className="flex items-center justify-center  p-4">
      <div className="w-full  bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-teal-700 mb-6">
          Enquiry Form
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Number */}
          <div>
            <input
              type="tel"
              {...register("number", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Enter a valid 10-digit number",
                },
              })}
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-teal-500"
              placeholder="Enter phone number"
            />
            {errors.number && (
              <p className="text-red-500 text-sm">{errors.number.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Enter a valid email",
                },
              })}
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-teal-500"
              placeholder="Enter email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Service */}
          <div>
            <select
              {...register("service", { required: "Service is required" })}
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-teal-500"
            >
              <option value="">Select a service</option>
              {services.map((service, index) => (
                <option key={index} value={service}>
                  {service}
                </option>
              ))}
            </select>
            {errors.service && (
              <p className="text-red-500 text-sm">{errors.service.message}</p>
            )}
          </div>

          {/* Company Name */}
          <div>
            <input
              type="text"
              {...register("companyName")}
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-teal-500"
              placeholder="Enter company name"
            />
          </div>

          {/* Budget */}
          <div>
            <input
              type="number"
              {...register("budget")}
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-teal-500"
              placeholder="Enter budget in ₹"
            />
          </div>

          {/* Subject */}
          <div>
            <input
              type="text"
              {...register("subject", { required: "Subject is required" })}
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-teal-500"
              placeholder="Enter subject"
            />
            {errors.subject && (
              <p className="text-red-500 text-sm">{errors.subject.message}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <textarea
              {...register("message", { required: "Message is required" })}
              rows="4"
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-teal-500"
              placeholder="Write your message"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            <button
              type="submit"
              disabled={loading}
              className={`py-2 text-white rounded-lg 
  ${loading ? "cursor-not-allowed px-4 mr-2 bg-gray-700" : "button-color px-6"} 
`}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <Loader /> Submitting...
                </span>
              ) : (
                "Submit"
              )}
            </button>
            <button
              type="button"
              onClick={() => reset()}
              className="px-6 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EnquiryForm;
