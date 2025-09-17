// GetQuotationButton.jsx
import React, { useState } from "react";
import Modal from "./Modal";
import EnquiryForm from "./EnqueryForm";

function GetQuotationButton({ title }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="text-white button-color px-4 py-2 rounded font-semibold hover:bg-white hover:text-black transition duration-300"
      >
        {title}
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className=" pt-62 md:pt-28">
          <EnquiryForm onSuccess={handleClose}/>
        </div>
      </Modal>
    </>
  );
}

export default GetQuotationButton;
