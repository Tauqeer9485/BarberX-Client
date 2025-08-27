'use client';
import React from 'react';

const Info = () => {
  return (
    <section className="hidden sm:block w-full bg-[#31003B] py-4">
      <div className="max-w-[1540px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-white gap-8 md:gap-0">
        
        {/* Trusted */}
        <div className="text-center md:text-left">
          <p className="text-[28px] leading-[42px] font-normal">Trusted By Over</p>
          <p className="text-[28px] leading-[42px] font-bold">500+ Users since 2024</p>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-[144px] bg-[#F7F7F7]"></div>

        {/* Reviews */}
        <div className="text-center">
          <p className="text-[28px] font-bold">3.5 ⭐</p>
          <p className="text-[28px] font-normal">365 Reviews</p>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-[144px] bg-[#F7F7F7]"></div>

        {/* Appointments */}
        <div className="text-center md:text-right">
          <p className="text-[28px] font-bold">236+</p>
          <p className="text-[28px] font-normal">Appointments Booked</p>
        </div>
      </div>
    </section>
  );
};

export default Info;
