"use client";

import React, { useState } from "react";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ScissorsIcon,
  UserCircleIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

// ✅ Calendar Component
const Calendar = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState(null);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleDateClick = (day) => {
    setSelectedDate(new Date(currentYear, currentMonth, day));
  };

  const daysInMonth = getDaysInMonth(currentMonth, currentYear);
  const firstDay = getFirstDayOfMonth(currentMonth, currentYear);

  const calendarDays = [];
  for (let i = 0; i < firstDay; i++) calendarDays.push(null);
  for (let i = 1; i <= daysInMonth; i++) calendarDays.push(i);

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <button onClick={prevMonth} className="text-gray-600 hover:text-black">&lt;</button>
        <h2 className="text-lg font-bold">{monthNames[currentMonth]} {currentYear}</h2>
        <button onClick={nextMonth} className="text-gray-600 hover:text-black">&gt;</button>
      </div>

      <div className="grid grid-cols-7 gap-2 text-center text-sm font-semibold text-gray-600 mb-2">
        {days.map((day, idx) => (
          <div key={idx}>{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2 text-center">
        {calendarDays.map((day, idx) => (
          <div
            key={idx}
            className={`h-10 flex items-center justify-center rounded-full cursor-pointer transition-all 
              ${day === null ? '' :
              (selectedDate?.getDate() === day &&
              selectedDate?.getMonth() === currentMonth &&
              selectedDate?.getFullYear() === currentYear
              ? 'bg-gradient-to-l from-[#BB23DA] to-[#AD5389] text-white' : 'hover:bg-pink-100')}`}
            onClick={() => day && handleDateClick(day)}
          >
            {day || ''}
          </div>
        ))}
      </div>
    </div>
  );
};

// ✅ Main Component
const Schedule = () => {
  const [selectedBarber, setSelectedBarber] = useState("Barber A");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("1:00 to 1:30 PM");
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    "Haircut",
    "Beard Trim",
    "Hair Spa",
    "Hair Straightening",
    "Hair Color",
    "Hair Curls",
  ];

  const barbers = ["Barber A", "Barber B", "Barber C", "Barber D", "Barber E"];

  const times = [
    "1:00 to 1:30 PM",
    "2:30 to 3:00 PM",
    "3:00 to 3:30 PM",
    "4:00 to 4:30 PM",
  ];

  const filteredServices = services.filter((service) =>
    service.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full mx-auto bg-gray-100">
      <section className="relative w-full mt-[2.8vw] md:mt-[-8vw] flex justify-center">
        <div className="relative w-[90vw] md:w-full h-[50vw] md:h-[50vw]  overflow-hidden rounded-[1vw] md:rounded-[0vw]">
          
          {/* Image */}
          <img
          src="/7978c720ea7332a677a522ce0b8dfb9e7865f880.jpg"
          alt="Barber Shop"
          className="w-full h-full object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>

          {/* Heading */}
          <h2 className="absolute bottom-[20%] md:bottom-[14%] left-[5%] text-white font-poppins font-semibold text-[5vw] md:text-[3.15vw] leading-[7vw] md:leading-[3.5vw]">
            Schedule time at Khushboo Salon
          </h2>
          <h3 className="absolute w-[50vw] bottom-[8%] md:bottom-[5%] left-[5.12%] text-white font-poppins text-[3vw] md:text-[1.6vw] leading-[-15vw] md:leading-[2.4vw]">
            Select service to see available times
          </h3>
        </div>
      </section>


      {/* ✅ Services */}
      <div className="max-w-4xl mx-auto px-4 mt-8">
        <div className="relative mb-6">
          <div className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z" />
            </svg>
          </div>
          {/*search for services */}

          <div className="relative rounded p-[1px] bg-gradient-to-l from-[#BB23DA] to-[#AD5389]"> 
            <div className="relative rounded p-[1px] bg-gradient-to-l from-[#BB23DA] to-[#AD5389]">
              <div className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search for a service"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-3 py-3 rounded border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
            </div>
          </div>
        </div>

        <h2 className="font-poppins mb-4 text-lg text-gray-800">Select Services</h2>
        <div className="flex flex-col gap-3">
          {filteredServices.map((service, index) => (
            <label key={index} className="flex items-center gap-3 text-base font-poppins text-gray-800 bg-white border border-gray-300 rounded px-3 py-2 w-full">
              <input type="checkbox" value={service} className="accent-pink-600 h-5 w-5" />
              <span>{service}</span>
            </label>
          ))}
        </div>
      </div>

      {/* ✅ Barber + Calendar */}
      <div className="max-w-4xl mx-auto rounded p-6 mt-8 text-gray-800">
        <div className="mb-6">
          <h2 className="font-poppins mb-2 text-lg">Select Barber</h2>
          <div className="flex flex-wrap gap-3">
            {barbers.map((barber) => (
              <button
                key={barber}
                className={`px-4 py-2 rounded-full font-poppins transition ${
                  selectedBarber === barber
                    ? "bg-gradient-to-l from-[#BB23DA] to-[#AD5389] text-white"
                    : "bg-white text-black hover:bg-gradient-to-l hover:from-[#BB23DA] hover:to-[#AD5389] hover:text-white"
                }`}


                onClick={() => setSelectedBarber(barber)}
              >
                {barber}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h2 className="font-poppins mb-2 text-lg">Select Date</h2>
          <div className="flex justify-center">
            <Calendar />
          </div>
        </div>
      </div>

      {/* ✅ Time + Save */}
      <div className="max-w-4xl mx-auto rounded p-6 mt-8 text-gray-800 mb-32">
        <div className="mb-6">
          <h2 className="font-poppins mb-2 text-lg">Available Time</h2>
          <div className="flex flex-wrap gap-3">
            {times.map((time) => (
              <button
                key={time}
             className={`px-4 py-2 rounded-full font-poppins transition ${
  selectedTime === time
    ? "bg-gradient-to-l from-[#BB23DA] to-[#AD5389] text-white"
    : "bg-white text-black hover:bg-gradient-to-l hover:from-[#BB23DA] hover:to-[#AD5389] hover:text-white"
}`}


                onClick={() => setSelectedTime(time)}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button className="bg-gradient-to-l from-[#BB23DA] to-[#AD5389] text-white rounded-[8px] font-poppins text-[14px] hover:opacity-90 px-6 py-3 w-[180px]">
  Save
</button>

        </div>
      </div>
{/* 
     {/* ✅ Footer * /}
<footer className="bg-[#1a001f] text-white mt-20 pt-32">
  {/* Call to Action * /}
  <div className="bg-[#bd38f1] text-white flex flex-col md:flex-row justify-between items-center px-6 py-6 gap-4 mx-4 md:mx-16 -mt-28 z-10 relative rounded shadow-lg text-center md:text-left">
    <div>
      <h2 className="text-2xl font-bold">Register Your Salon At BarberX</h2>
      <p className="mt-1 text-sm">
        Register As Salon Owner And Get Appointments Online And Boost Your Business.
      </p>
    </div>
    <button className="bg-white text-black border-none py-2 px-4 rounded font-poppins w-full md:w-auto">
      Get Listed
    </button>
  </div>

  {/* Footer Content * /}
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-10 ">
    {/* Column 1 * /}
   <div className="space-y-2">

  <p className="flex items-center gap-2">
  <ScissorsIcon className="h-5 w-5 text-white" />
  <strong>BarberX</strong>
</p>

  <h4 className="text-xl font-bold mb-4">Head Office</h4>
  <p className="flex items-center gap-2">
    <MapPinIcon className="h-5 w-5 text-white" />
    Ambika Nagar, Yavatmal, Maharashtra 445001
  </p>
  <p className="flex items-center gap-2">
    <PhoneIcon className="h-5 w-5 text-white" />
    +91-8698452420
  </p>
  <p className="flex items-center gap-2">
    <EnvelopeIcon className="h-5 w-5 text-white" />
    barberxdeal@gmail.com
  </p>
</div>

    {/* Column 2 * /}
    <div>
      <h4 className="text-xl font-bold mb-4">Quick Links</h4>
      <ul className="space-y-2 font-poppins">
        <li><a href="#" className="hover:text-pink-400">Home</a></li>
        <li><a href="#" className="hover:text-pink-400">Salons</a></li>
        <li><a href="#" className="hover:text-pink-400">Our Services</a></li>
        <li><a href="#" className="hover:text-pink-400">About Us</a></li>
        <li><a href="#" className="hover:text-pink-400">Help & FAQ</a></li>
      </ul>
    </div>

    {/* Column 3 * /}
    <div>
      <h4 className="text-xl font-bold mb-4">Sign Up</h4>
      <p className="mb-4">Sign up for Alerts, Special Offers, Discounts and Updates.</p>
      <form className="flex rounded-lg overflow-hidden border border-white w-full">
        <input
          type="email"
          placeholder="Enter Your E-mail"
          className="w-full px-4 py-2 text-black"
          required
        />
        <button
          type="submit"
          className="bg-[#bd38f1] px-4 py-2 text-white font-bold"
        >
          ➜
        </button>
      </form>
    </div>
  </div>

  {/* Bottom Bar * /}
  <div className="border-t border-gray-500 py-4 px-6 flex flex-col md:flex-row justify-between items-center text-sm gap-2 max-w-7xl mx-auto text-center md:text-left">
    <p>© 2024 BarberX. All rights reserved.</p>
    <div className="flex gap-4 flex-wrap justify-center">
      <a href="#" className="hover:text-pink-400">Copyright</a>
      <a href="#" className="hover:text-pink-400">Privacy Policy</a>
      <a href="#" className="hover:text-pink-400">Terms & Conditions</a>
    </div>
  </div>
</footer> */}


    </div>
  );
};

export default Schedule;