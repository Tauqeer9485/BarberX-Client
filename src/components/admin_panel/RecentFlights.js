import AppointmentDetailsPopup from "./AppointmentDetailsPopup";
import React, { useState, useEffect } from 'react';

// Single Appointment Card Component
const AppointmentCard = ({ id, name, service, barber, time, date }) => {

  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="w-[83vw] bg-white border border-[#B4B4B4] shadow-sm rounded-[0.7vw] px-[1vw] flex items-center justify-between mb-[1.5vw]">
      {/* ID */}
      <div className="w-[5%] text-center">
        <p className="text-[#353535] font-semibold text-[1vw]">{id}.</p>
      </div>

      {/* Name */}
      <div className="w-[20%] text-center">
        <p className="text-[#A0A0A0] text-[0.9vw] leading-[3vw]">Name</p>
        <p className="text-[#353535] font-semibold text-[1vw] leading-[3vw]">{name}</p>
      </div>

      {/* Service */}
      <div className="w-[15%] text-center">
        <p className="text-[#A0A0A0] text-[0.9vw] leading-[3vw]">Service</p>
        <p className="text-[#353535] font-semibold text-[1vw] leading-[3vw]">{service}</p>
      </div>

      {/* Barber */}
      <div className="w-[10%] text-center">
        <p className="text-[#A0A0A0] text-[0.9vw] leading-[3vw]">Barber</p>
        <p className="text-[#353535] font-semibold text-[1vw] leading-[3vw]">{barber}</p>
      </div>

      {/* Time */}
      <div className="w-[20%] text-center">
        <p className="text-[#A0A0A0] text-[0.9vw] leading-[3vw]">Time</p>
        <p className="text-[#353535] font-semibold text-[1vw] leading-[3vw]">{time}</p>
      </div>

      {/* Date */}
      <div className="w-[15%] text-center">
        <p className="text-[#A0A0A0] text-[0.9vw] leading-[3vw]">Date</p>
        <p className="text-[#353535] font-semibold text-[1vw] leading-[3vw]">{date}</p>
      </div>

      {/* Action Button */}
      <div className="w-[10vw] flex justify-center">
        <button  
          onClick={() => setShowPopup(true)}
          className="px-[2.2vw] py-[0.9vw] bg-gradient-to-r from-[#AD5389] to-[#BB23DA] text-white font-semibold text-[0.9vw] rounded-[0.35vw]"
        >
          View Details
        </button>
      </div>
      <AppointmentDetailsPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
      />
    </div>
  );
};

// Single Appointment Card Component
const AppointmentCardMobile = ({ id, name, service, barber, time, date }) => {
  
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="w-[72vw] bg-white border border-[#B4B4B4] shadow-[0_0_5px_2px_rgba(0,0,0,0.15)] rounded-[2.3vw] px-[3.52vw] py-[2vw] flex flex-col mx-[1.5vw] mb-[3.1vw]">
      <div className="w-[72vw] flex flex-row flex-wrap mx-auto">
        {/* ID
        <div className="w-[5%] text-center">
          <p className="text-[#353535] font-semibold text-[1vw]">{id}.</p>
        </div> */}

        {/* Name */}
        <div className="w-[45%] text-start">
          <p className="text-[#A0A0A0] font-semibold text-[2.6vw] leading-[6vw]">Name : 
            <span className="text-[#353535] font-semibold text-[2.6vw] leading-[8vw]"><space> </space> {name}</span>
          </p>
        </div>

        {/* Service */}
        <div className="w-[50%] text-start">
          <p className="text-[#A0A0A0] font-semibold text-[2.6vw] leading-[6vw]">Service : 
            <span className="text-[#353535] font-semibold text-[2.6vw] leading-[7.5vw]"><space> </space> {service}</span></p>
        </div>

        {/* Barber */}
        <div className="w-[45%] text-start">
          <p className="text-[#A0A0A0] font-semibold text-[2.6vw] leading-[6vw]">Barber : 
            <span className="text-[#353535] font-semibold text-[2.6vw] leading-[7.5vw]"><space> </space> {barber}</span></p>
        </div>

        {/* Time */}
        <div className="w-[50%] text-start">
          <p className="text-[#A0A0A0] font-semibold  text-[2.6vw] leading-[6vw]">Time : 
            <span className="text-[#353535] font-semibold text-[2.6vw] leading-[7.5vw]"> <space> </space> {time}</span></p>
        </div>

        {/* Date */}
        <div className="w-[45%] text-start">
          <p className="text-[#A0A0A0] font-semibold text-[2.6vw] leading-[6vw]">Date:
            <span className="text-[#353535] font-semibold text-[2.6vw] leading-[7.5vw]"><space> </space> {date}</span></p>
        </div>
      </div>
      {/* Action Button */}
      <div className="w-[60vw] flex justify-center mx-auto mt-[3.4vw] mb-[1.5vw]">
        <button 
          onClick={() => setShowPopup(true)}
          className="px-[9.2vw] py-[1vw] bg-gradient-to-r from-[#AD5389] to-[#BB23DA] text-white font-semibold text-[3vw] rounded-[1.35vw]"
        >
          View Details
        </button>
      </div>
      <AppointmentDetailsPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
      />
    </div>
  );
};

// Main Component
const RecentFlights = () => {
  const appointments = [
    {
      id: "1",
      name: "Madhur Wankar",
      service: "Beard Trim",
      barber: "B",
      time: "12:30 PM - 01:00 PM",
      date: "08/01/2025",
    },
    {
      id: "2",
      name: "Roshan Kale",
      service: "Haircut",
      barber: "C",
      time: "01:00 PM - 01:30 PM",
      date: "08/01/2025",
    },
    {
      id: "3",
      name: "John Doe",
      service: "Shave",
      barber: "A",
      time: "02:00 PM - 02:30 PM",
      date: "08/01/2025",
    },
    {
      id: "4",
      name: "Jane Smith",
      service: "Beard Trim",
      barber: "B",
      time: "03:00 PM - 03:30 PM",
      date: "08/01/2025",
    },
    {
      id: "5",
      name: "Roshan Kale",
      service: "Haircut",
      barber: "C",
      time: "01:00 PM - 01:30 PM",
      date: "08/01/2025",
    },
    {
      id: "6",
      name: "John Doe",
      service: "Shave",
      barber: "A",
      time: "02:00 PM - 02:30 PM",
      date: "08/01/2025",
    },
    {
      id: "7",
      name: "Jane Smith",
      service: "Beard Trim",
      barber: "B",
      time: "03:00 PM - 03:30 PM",
      date: "08/01/2025",
    },
    {
      id: "8",
      name: "Roshan Kale",
      service: "Haircut",
      barber: "C",
      time: "01:00 PM - 01:30 PM",
      date: "08/01/2025",
    },
    {
      id: "8",
      name: "John Doe",
      service: "Shave",
      barber: "A",
      time: "02:00 PM - 02:30 PM",
      date: "08/01/2025",
    },
    {
      id: "8",
      name: "John Doe",
      service: "Shave",
      barber: "A",
      time: "02:00 PM - 02:30 PM",
      date: "08/01/2025",
    },
  ];

  return (
    <div className="w-[100vw] mx-auto">
      <div className="hidden md:flex  flex-col w-[90vw] mx-auto mb-[15vw] bg-white shadow-[0_0_5px_2px_rgba(0,0,0,0.15)] rounded-[0.8vw] px-[3vw] py-[1.5vw]">
        {/* Title */}
        <h2 className="text-[#353535] font-semibold text-[1.82vw] leading-[4.5vw] mb-[1vw]">
          Today's Appointments
        </h2>

        {/* Appointments List */}
        <div className="overflow-x-hidden scrollbar-hide p-[0.5vw]">
          <div className=" flex flex-col">
            {appointments.map((appt, index) => (
              <AppointmentCard key={index} {...appt} />
            ))}
          </div>
        </div>
      </div>

      <div className="md:hidden w-[100vw] mx-auto mt-[2vw] mb-[20vw] px-[3vw] py-[1.5vw]">
        {/* Title */}
        <h2 className="text-[#353535] font-semibold text-[3.82vw] ml-[1vw] mb-[8vw]">
          Todays Appointments
        </h2>

        {/* Appointments List */}
        <div className="overflow-x-auto scrollbar-hide p-[0.5vw]">
          <div className="w-[250vw] flex flex-row flex-wrap gravity-start gap-[5vw]">
            {appointments.map((appt, index) => (
              <AppointmentCardMobile key={index} {...appt} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentFlights;
