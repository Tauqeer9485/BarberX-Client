import React from "react";

const AppointmentDetailsPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      {/* Popup Box */}
      <div className="relative w-[80vw] md:w-[30vw] max-w-[400px] bg-white rounded-[0.8rem] shadow-lg p-[1.5rem] md:px-[1.8rem]">
        
        {/* Title */}
        <h2 className="text-center font-semibold text-[1.4rem] text-[#353535] mb-[1.5rem]">
          Appointment Details
        </h2>

        {/* Details Section */}
        <div className="flex flex-col gap-[1rem]">
          <DetailRow label="Name" value="Roshan Kale" />
          <DetailRow label="Service" value="Hair Cut" />
          <DetailRow label="Barber" value="Barber A" />
          <DetailRow label="Time" value="12:00 Pm - 12:30 Pm" />
          <DetailRow label="Date" value="08/01/2025" />

          {/* Divider */}
          <hr className="border border-[#B4B4B4] my-[1rem]" />

          <DetailRow label="Service Charge" value="Rs. 80/-" />
          <DetailRow label="Platform Fee" value="Rs. 0.0/-" />
          <DetailRow label="GST" value="Rs. 0.0/-" />

          {/* Divider */}
          <hr className="border border-[#B4B4B4] my-[1rem]" />

          <DetailRow label="Total" value="Rs. 80/-" isBold />
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-[0rem] right-[0.8rem] text-gray-500 hover:text-gray-800 text-[2rem] font-bold"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

const DetailRow = ({ label, value, isBold }) => (
  <div className="flex justify-between text-[#A0A0A0] text-[1rem] md:text-[1.05rem]">
    <span className={`${isBold ? "font-extrabold text-[#353535]" : "font-bold"}`}>
      {label}
    </span>
    <span className={`${isBold ? "font-extrabold text-[#353535]" : "font-bold"}`}>
      {value}
    </span>
  </div>
);

export default AppointmentDetailsPopup;
