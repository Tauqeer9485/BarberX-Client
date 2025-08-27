'use client';
import React, { useState } from "react";
import { Star } from "lucide-react";
import Image from "next/image";

const Hero_S = () => {
  return (
    <section className="relative w-full mt-[2.8vw] flex justify-center">
        <div className="relative w-[90vw] h-[45vw] md:h-[26vw] overflow-hidden rounded-[1vw]">
            
            {/* Image */}
            <img
            src="/images/04737261d96b79d530b0c1bd1d0941180b8aa40b.jpg"
            alt="Barber Shop"
            className="w-full h-full object-cover  scale-x-[-1]"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>

            {/* Heading */}
            <h2 className="absolute bottom-[12%] left-[5%] text-white font-poppins font-semibold text-[5vw] md:text-[2.5vw] leading-[7vw] md:leading-[3.5vw]">
            Services At Khushboo Salon
            </h2>
        </div>
    </section>

  );
};

export default Hero_S;