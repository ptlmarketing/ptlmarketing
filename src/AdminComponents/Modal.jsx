// components/Modal.jsx
import React, { useEffect, useState } from "react";
import { getSingleEnquiryFormDataAPIService } from "../service/apiService";

function Modal({ isOpen, onClose, id }) {
  const [contact, setContact] = useState(null);

  const getEnquiryFormDataById = async () => {
    try {
      const res = await getSingleEnquiryFormDataAPIService(id);
      setContact(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (id) getEnquiryFormDataById();
  }, [id]);

  const copyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    alert("Email copied to clipboard!");
  };

  if (!isOpen || !contact) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-[#000000c7] bg-opacity-50 flex justify-center items-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl w-11/12 max-w-md p-6 relative"
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-5 border-b border-gray-200 dark:border-gray-700 pb-2">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            Contact Details
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white text-lg"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="space-y-3 text-gray-800 dark:text-white">
          <div className="flex justify-between items-center bg-gray-100 dark:bg-gray-800 p-2 rounded">
            <span className="font-medium">Name:</span> {contact.name}
          </div>
          <div className="flex justify-between items-center bg-gray-100 dark:bg-gray-800 p-2 rounded">
            <span className="font-medium">Phone:</span> {contact.number}
          </div>
          <div className="flex justify-between items-center bg-gray-100 dark:bg-gray-800 p-2 rounded">
            <span className="font-medium">Email:</span>
            <div className="flex items-center gap-2">
              <span>{contact.email}</span>
              <button
                onClick={copyEmail}
                className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
              >
                Copy
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center bg-gray-100 dark:bg-gray-800 p-2 rounded">
            <span className="font-medium">Service:</span> {contact.service}
          </div>
          <div className="flex justify-between items-center bg-gray-100 dark:bg-gray-800 p-2 rounded">
            <span className="font-medium">Company:</span> {contact.companyName}
          </div>
          <div className="flex justify-between items-center bg-gray-100 dark:bg-gray-800 p-2 rounded">
            <span className="font-medium">Budget:</span> ₹{contact.budget}
          </div>
          <div className="flex justify-between items-center bg-gray-100 dark:bg-gray-800 p-2 rounded">
            <span className="font-medium">Subject:</span> {contact.subject}
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded max-h-32 overflow-y-auto">
            <span className="font-medium">Message:</span>
            <p className="mt-1">{contact.message}</p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end mt-5 gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white rounded hover:bg-gray-400 dark:hover:bg-gray-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
