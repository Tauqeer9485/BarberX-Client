'use client';
import Image from "next/image";
import { Heart, ShoppingCart, ChevronLeft, ChevronRight, Star } from "lucide-react";
import React, { useState, useRef } from 'react';
import AuthPopup from "@/components/signup_login/AuthPopup";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from 'next/router';
import salon_services from "@/pages/s_services";

const PopularServices = () => {
  const scrollRef = useRef(null);
  const router = useRouter();
  const { user } = useAuth();

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = container.offsetWidth * 0.7;
    if (container) {
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };
  
  return (
    <section className="relative bg-white py-12 px-4 md:px-[94px] w-full max-w-[90vw] mx-auto">
      {/* Section Heading */}
      <h2 className="text-center text-[#353535] font-semibold text-[26px] md:text-[48px] leading-tight mb-10 md:mb-14">
        Popular services at <span className="text-[#BB23DA]">BarberX</span>
      </h2>

      <div className="md:h-[400px] overflow-hidden">
        <div 
          ref={scrollRef}
          className="max-h-[1000px] md:max-h-none md:h-[450px] overflow-y-auto md:overflow-x-auto scrollbar-hide"
        >
          <div className="flex flex-col md:flex-row gap-6 ml-[1.5vw]">
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
          </div>
        </div>
      </div>

        {/* Arrows for larger screens */}
        <div className="hidden md:flex justify-between absolute top-1/2 left-0 right-0 px-6 transform -translate-y-1/2 z-10">
          <button 
            onClick={() => scroll('left')}
            className="bg-[#EBEBEB] p-4 rounded-lg"
          >
            <ChevronLeft className="text-[#353535] w-6 h-6" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="bg-[#EBEBEB] p-4 rounded-lg"
          >
            <ChevronRight className="text-[#353535] w-6 h-6" />
          </button>
        </div>

      {/* CTA */}
      {!user && (
        <>
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => router.push('/get_listed')}   
              className="w-full max-w-[50vw] md:max-w-[436px] w-[60vw] h-[50px] lg:h-[70px] bg-gradient-to-l from-[#AD5389] to-[#BB23DA] rounded-lg text-white text-lg md:text-[25px] font-bold">
              Get Listed
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default PopularServices;
const ServiceCard = () => {
  const [authMode, setAuthMode] = useState(null);
  const router = useRouter();
  const { user } = useAuth();

  return (
    <div className="snap-start flex-shrink-0  max-w-[80vw] md:w-[34vw] lg:w-[25vw]  bg-white border border-[#A0A0A0] rounded-md p-2 md:p-4">
      
      <div onClick={() => router.push("/s_services")} >
      
        {/* Image */}
        <div className="relative h-[120px] lg:h-[140px] w-full rounded-md overflow-hidden mb-2">
          <Image
            src="/images/Image.png"
            alt="Barber"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <Heart className="w-4 h-4 text-neutral-800" />
          </div>
        </div>

        {/* Content */}
        <div>
          <p className="text-[#64748B] text-sm lg:text-xs">Salon Service</p>
          <div className="flex justify-between items-center">
            <h3 className="text-[#353535] text-base font-semibold">Khushboo Salon</h3>
            <span className="text-[#353535] font-bold text-sm lg:text-lg">₹499</span>
          </div>
          <p className="text-sm lg:text-sx text-[#64748B] line-clamp-2">
            Perfect cut at Khushboo Salon — expert styling tailored to you.
          </p>
          <p className="text-sm lg:text-xs text-[#353535] mt-1">
            State Bank Chowk, near postal ground, Yavatmal.
          </p>

          {/* Rating and Reviews */}
          <div className="flex items-center mt-2 gap-2">
            <Star className="w-4 h-4 text-[#FFC64A]" />
            <span className="text-sm lg:text-xs font-semibold text-[#353535]">4.5 / 5</span>
            <div className="flex ml-2 -space-x-2">
              <div className="w-8 lg:w-6 h-8 lg:h-6 bg-[#BB23DA] rounded-full text-white text-[8px] flex items-center justify-center">128+</div>
              <div className="w-6 h-6 bg-[url('/user1.png')] bg-cover rounded-full" />
              <div className="w-6 h-6 bg-[url('/user2.png')] bg-cover rounded-full" />
              <div className="w-6 h-6 bg-[url('/user3.png')] bg-cover rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Buttons */}
      <div className="mt-3 flex gap-2">
        <button className="w-10 lg:w-8 w-10 lg:h-8 border border-[#D0D5DD] rounded-md flex items-center justify-center">
          <ShoppingCart className="w-6 lg:w-4 w-6 lg:h-4" />
        </button>
        <button
          className="flex-1 h-8 bg-gradient-to-r from-[#AD5389] to-[#BB23DA] text-white text-sm font-semibold rounded-md"
          onClick={() => {
            if ((!user)) {
              setAuthMode("login")
            } else if (user?.role === "customer") {
              router.push("/schedule");
            }
          }}
        >
          Book Appointment
        </button>
      </div>
      <AuthPopup mode={authMode} onClose={setAuthMode} />
    </div>
  );
};