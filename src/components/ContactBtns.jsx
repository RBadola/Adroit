import React from 'react';
import { FaPhone, FaPhoneAlt } from 'react-icons/fa';
import { IoLogoWhatsapp, IoMdPhoneLandscape } from 'react-icons/io';
// Assuming you have a way to import icon libraries like Lucide, Font Awesome, etc.
// For this example, I'll use simple SVG icons inline.

const ContactBtns = () => {
  // Replace these with your actual contact details
  const phoneNumber = '+919811038434'; 
  const whatsappNumber = '919811038434'; // WhatsApp URL requires only digits (no +)

  // Use a minimal, clean, and responsive design
  return (
    <div 
      className="
        fixed bottom-4 left-4 sm:bottom-8 sm:left-8 z-50 
        flex flex-col space-y-3
      "
    >
      {/* 1. WhatsApp Button */}
      <a 
        href={`https://wa.me/${whatsappNumber}`} 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Contact us via WhatsApp"
        className="
          p-3 sm:p-4 rounded-full bg-green-500 text-white 
          shadow-lg hover:bg-green-600 transition-colors 
          transform hover:scale-110 duration-300
        "
      >
        {/* WhatsApp Icon (simple SVG) */}
        <IoLogoWhatsapp size={30}/>
      </a>

      {/* 2. Call Now Button */}
      <a 
        href={`tel:${phoneNumber}`}
        aria-label="Call Now"
        className="
          p-3 sm:p-4 rounded-full bg-blue-400 text-white 
          shadow-lg hover:bg-[#16204a] transition-colors 
          transform hover:scale-110 duration-300
        "
      >
        {/* Phone Icon (simple SVG) */}
        <FaPhoneAlt size={30}/>
      </a>
    </div>
  );
};

export default ContactBtns;