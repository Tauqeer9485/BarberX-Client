'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { useAuth } from "@/context/AuthContext";
import { useRouter } from 'next/router';

const carouselImages = [
  '/images/man-barbershop-salon-doing-haircut-beard-trim.png',
  '/images/woman-receiving-beauty-treatment-skin-care.png',
  '/images/adult-barber-washing-old-man-hair-backwash.png',
];

const textItems = [
  {
    heading: 'Your One-Stop Solution for Effortless Salon Appointments and',
    ending: ' Beauty Services.',
    description: 'Discover a world of beauty services tailored to your preferences and schedule, all in one place.',
  },
  {
    heading: 'Your Beauty, Your Schedule, Making Every ',
    ending: 'Appointment Effortless.',
    description: 'Say goodbye to long queues and hello to instant appointments that fit your busy lifestyle.',
  },
  {
    heading: 'From Finding the Right Salon to Booking Your Slot—',
    ending: 'We Make It Easy.',
    description: 'Find trusted salons and beauty experts at your fingertips, making every choice a confident one.',
  },
]; 

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { user } = useAuth();
  const router = useRouter();
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % textItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-[100%] h-[700px] bg-[#FCEBFF] overflow-hidden">
      {/* Gradient Background Vectors */}
      <div className="absolute w-[90%] h-[840.01px] left-[638px] top-[-39px]  z-0">
        <div className="absolute w-[30%] h-[300.01px] left-0 top-[540px] bg-[rgba(187,35,218,0.7)] blur-[127.769px]" />
        <div className="absolute w-[30%] h-[307.19px] left-[856px] top-[-39px] bg-[rgba(173,83,137,0.7)] blur-[61.0196px]" />
      </div>
      {/* <div className='flex justify-center mx-auto'> */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-20 mx-auto">
        {/* Image Carousel */}
        <div className="absolute w-[90%] h-[40%] md:w-[50%] md:h-[60%] md:left-[45%] top-[6.8%] md:top-[15%] overflow-hidden rounded-[16px] shadow-xl z-10">
          <div
            className="flex gap-[10%] w-[100%] h-[100%] transition-transform duration-[1000ms] ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 110}%)` }}
          >
            {carouselImages.map((src, idx) => (
              <div key={idx} className="w-[100%] h-[100%] relative shrink-0">
                <Image src={src} alt={`carousel-${idx}`} fill className="object-cover rounded-[16px]" />
              </div>
            ))}
          </div>
        </div>

        {/* Text Carousel with fixed height and proper stack */}
        <div className="absolute w-[100%] md:w-[50%] h-[45%] md:h-[45%] left-[-5%] md:left-[5%] top-[55%] md:top-[25%] overflow-hidden z-20">
          <div
            className="h-[100%] w-[90%] ml-[10%] md:ml-[2%] transition-transform duration-[1000ms] ease-in-out"
            style={{ transform: `translateY(-${currentIndex * 100}%)` }}
          >
            {textItems.map((item, idx) => (
              <div key={idx} className="h-[100%]">
                <h2 className="font-poppins font-semibold text-[180%] md:text-[160%] leading-[40px] text-[#353535] w-[100%] md:w-[70%] mb-[4%]">
                  {item.heading}
                  <span className="text-[#BB23DA]">{item.ending}</span>
                </h2>

                <p className="font-poppins font-normal text-[#6D6D6D] text-[110%] md:text-[120%] leading-[25px] w-[100%] md:w-[70%] mb-[26%]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          
          {!user && (
            <>
              {/* Fixed Button */}
              <button 
                onClick={() => router.push('/get_listed')}  
                className="absolute top-[74%] w-[50%] lg:w-[308.46px] h-[46.38px] md:h-[56.38px] bg-gradient-to-l left-[10%] md:left-[2%] from-[#BB23DA] to-[#AD5389] text-white font-poppins font-bold text-[20.13px] leading-[30px] rounded-[6.44px] shadow-lg transition hover:scale-105"
              >
                Get Listed
              </button>
            </>
          )}
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-[100%] md:top-[80%] flex flex-col items-center z-30">
        <div className="border-[2px] border-[#AD5389] w-[30px] h-[38px] rounded-full flex justify-center">
          <div className="w-px border-[1px] border-black h-1 bg-black mt-[9px]"></div>
        </div>

        <span className="mt-[12px] text-[18px] font-poppins text-black">Scroll down</span>
        <ArrowDown size={22} className="text-black padding-[20px]" />
      </div>
    </section>
  );
}