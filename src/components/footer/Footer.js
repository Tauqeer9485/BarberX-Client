import React from 'react';
import Image from 'next/image';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import { MdLocationOn, MdLocationPin, MdPlace } from "react-icons/md";

const Footer = () => {
  return (
    <div className="relative w-full text-white font-poppins bg-white">
      {/* CTA Banner */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[85%] h-[20%] md:h-[40%] bg-[#BB23DA] flex flex-row items-center justify-between px-[6vw] md:px-14 lg:px-[130px] py-0 md:py-0 z-10 shadow-lg text-left">
        <div className="w-[35vw] py-[10vw] mb-0 md:mb-0">
          <h2 className="text-[14px] md:text-[2.5vw] font-semibold leading-[18px] md:leading-[3vw] max-w-[40vw] w-[25vw] md:w-[60vw] lg:leading-[42px] mt-1">
            Register Your Salon At BarberX
          </h2>
          <p className="mt-2 text-[10px] md:text-[16px] lg:text-[19.6px] leading-[14px] md:leading-[20px] lg:leading-[26px] w-[50vw] md:w-[40vw] md:mx-0">
            Register As Salon Owner And Get Appointments Online And Boost Your Business.
          </p>
        </div>
        <button className="bg-white text-black font-medium text-[8px] md:text-[12.4px] lg:text-[19.4px] px-4 md:px-[51.8px] py-2 md:py-[17.3px] rounded-[0.6vw]">
          Get Listed
        </button>
      </div>

      {/* Footer Main Section */}
      <div className="relative w-full bg-[#2C0035] px-6 md:px-[10%] pt-[20%] md:pt-[6vw] pb-[5%] md:pb-[2%] flex flex-col gap-4 md:gap-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-8 text-white">
          {/* Office Info */}
          <div className="w-full md:w-[25vw] mt-4">
            <h3 className="font-semibold text-[18px] md:text-[20px] mb-2">Head office :</h3>
            
            <Image
              src="/images/WhatsApp_Image_2025-05-03_at_19.05.14_90172077-removebg-preview (4).png"
              alt="WDC Logo"
              width={113.93}
              height={55}
              className="mb-2 md:mb-4"
            />
            <p className="text-[14px] md:text-[14.27px] leading-[14px] md:leading-[28px] font-light mb-4">
              BarberX
            </p>
            <div className="flex items-center gap-3 mb-2">
              <MdLocationPin className="text-white" />
              <span className="text-[14px] md:text-[14.27px] leading-[14px] md:leading-[28px] font-light">Ambika Nagar, Yavatmal, Maharashtra 445001</span>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <FaPhoneAlt className="text-white" />
              <span className="text-[14px] md:text-[14.27px] leading-[14px] md:leading-[28px] font-light">+91-9876543210</span>
            </div>
            <div className="flex items-center gap-3">
              <IoIosMail className="text-white text-[20px]" />
              <span className="text-[14px] md:text-[14.27px] leading-[12px] md:leading-[28px] font-light">info@wdcwebintl.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="hidden md:flex  flex flex-col w-full md:w-[15vw] mt-4">
            <h4 className="text-[18px] md:text-[18px] font-medium mb-2 md:mb-6">Quicklinks</h4>
            <ul className="space-y-1 md:space-y-3 text-[14px] md:text-[14.27px] font-light">
              <li>Home</li>
              <li>Salons</li>
              <li>Our Services</li>
              <li>About Us</li>
              <li>Help & FAQ</li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="w-full md:w-[25vw] mt-4">
            <h4 className="text-[18px] md:text-[18px] font-medium mb-2 md:mb-4">Sign Up</h4>
            <p className="text-[14px] md:text-[14.27px] font-light mb-4 md:mb-6 w-[20vw]">
              Sign up for Alerts, Special Offers, Discounts and Updates.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter Your E-mail"
                className="w-full h-[40px] pl-4 pr-[60px] rounded-[8.1px] text-[#939393] text-[16px] md:text-[17.27px] font-light"
              />
              <button className="absolute right-0 top-0 h-[40px] w-[48px] bg-[#BB23DA] rounded-r-[8.1px]">
                <svg
                  className="mx-auto"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 md:mt-4 h-[1px] bg-white w-full"/>

        {/* Bottom Bar */}
        <div className="flex flex-row justify-between text-[14px] md:text-[17.27px] font-light md:gap-0">
          <span className="w-auto">© WDC WEB , 2022</span>
          <span className="w-auto text-right">Privacy Policy • Terms & Conditions</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;