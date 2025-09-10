import React from "react";
import GetQuotationButton from "./GetQuotationButton";

function Card({ image, heading, paragraph }) {
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-500 hover:border hover:border-[#F97316]">
      {/* Image */}
      <img src={image} alt={heading} className="w-full h-56 object-cover" />

      {/* Content */}
      <div className="p-5 text-center">
        <h2 className="text-xl text font-semibold mb-2">{heading}</h2>
        <p className="text-gray-600 mb-5">{paragraph}</p>
        <GetQuotationButton title="Get Quotation"/>
      </div>
    </div>
  );
}

export default Card;
