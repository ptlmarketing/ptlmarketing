// Modal.jsx
import React from "react";
import ReactDOM from "react-dom";

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      onClick={onClose}
      className="fixed overflow-auto  inset-0 flex justify-center items-center z-[9999] bg-[#000000ef] bg-opacity-50 scrollbar"
    >
      <div
        onClick={(e) => e.stopPropagation()} // modal ke andar click se close na ho
        className="bg-white md:p-6 rounded-lg shadow-lg w-[90%] md:max-w-[50%] relative"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
        >
          ✖
        </button>

        {children}
      </div>
    </div>,
    document.body
  );
}

export default Modal;
