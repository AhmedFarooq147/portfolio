import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Whatsapp = () => {
  return (
    <div className="fixed bottom-5 right-5">
      {/* Animated Ring */}
      <span className="absolute w-16 h-16 bg-green-400 opacity-50 rounded-full animate-ping"></span>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/923140333513" // Apna number yahan dal do
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition duration-300"
      >
        <FaWhatsapp size={28} />
      </a>
    </div>
  );
};

export default Whatsapp;
