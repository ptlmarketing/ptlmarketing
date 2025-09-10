import React from "react";
import GetQuotationButton from "./GetQuotationButton";

function ServiceCard({ data }) {
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-500 hover:border hover:border-[#F97316]">
      {/* Image */}
      <img src={data.image} alt={data.heading} className="w-full p-10 object-cover" />

      {/* Content */}
      <div className="px-5 pb-5 text-center">
        <h2 className="text-xl text font-semibold mb-2">{data.heading}</h2>
        <p className="text-gray-600 mb-5">{data.paragraph}</p>
        <GetQuotationButton title="Get Quotation"/>
      </div>
    </div>
  );
}

export default ServiceCard;
