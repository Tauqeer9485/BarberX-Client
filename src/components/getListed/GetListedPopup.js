"use client";
import React from "react";

export default function Popup({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="relative w-[80vw] max-w-[756px] h-[40vh] max-h-[328px] bg-[#FCEBFF] border border-[#B4B4B4] shadow-lg rounded-2xl flex flex-col items-center justify-center p-[2vw]">
        
        {/* Title */}
        <h2 className="font-poppins font-semibold text-[4vw] md:text-[2vw] leading-tight text-[#353535] text-center mb-[4vh]">
          WELCOME TO SALONX FAMILY <br /> YOU ARE LISTED
        </h2>

        {/* Button */}
        <button
          onClick={onClose}
          className="px-[10vw] md:px-[6vw] py-[2vh] bg-gradient-to-l from-[#BB23DA] to-[#AD5389] text-white font-poppins font-bold text-[3.5vw] md:text-[1.2vw] leading-[1.5] rounded-md shadow-md hover:opacity-90 transition"
        >
          Get Listed
        </button>
      </div>
    </div>
  );
}
