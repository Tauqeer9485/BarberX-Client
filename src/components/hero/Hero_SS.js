import Image from "next/image";
import React from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from 'next/router';

const Hero_SS = ({ image }) => {
  const router = useRouter();
  const { user } = useAuth();

  return (
    <section className="relative w-full h-[115.9vw] md:h-[27.8vw] mt-[-2vw] md:mt-[4.6vw] px-0 md:px-[5.4vw]">
      {/* Background Card */}
      <div className="hidden md:flex absolute w-[89.1vw] h-full rounded-[0.93vw] overflow-hidden">
      <div className="absolute top-0 left-0 z-0 w-[89.1vw] h-full bg-[#F9D9FF] rounded-[0.93vw]" />

        {/* Blurred Vectors */}
        <div
            className="absolute z-10"
            style={{
            width: "33.5vw",
            height: "31.9vw",
            left: "61vw",
            top: "21.8vw",
            background: "rgba(187, 35, 218, 0.8)",
            filter: "blur(5vw)",
            borderRadius: "50%",
            }}
        ></div>
        <div
            className="absolute z-10"
            style={{
            width: "22.2vw",
            height: "21.9vw",
            left: "67vw",
            top: "-3.8vw",
            background: "rgba(173, 83, 137, 0.8)",
            filter: "blur(5vw)",
            borderRadius: "50%",
            }}
        ></div>

        {/* Hero Image */}
        <div className="absolute z-20" style={{ top: "-8.3vw", left: "52vw" }}>
            <Image
            src={image}
            width={665}
            height={646}
            alt="Hero"
            className="w-[38.5vw] h-auto object-cover"
            />
        </div>

        {/* Text Content */}
        <div
            className="absolute z-30"
            style={{
            top: "4.2vw",
            left: "3.5vw",
            width: "42.8vw",
            height: "21vw",
            }}
        >
          <h1 className="font-poppins font-semibold text-[2.8vw] leading-[3.4vw] text-[#353535] mb-[1.15vw]">
            Find Best Stylist in your Town With Just Few Clicks.
          </h1>
          <p className="font-poppins font-normal text-[1.45vw] leading-[2.3vw] text-[#6D6D6D] mb-[2vw]">
            Your beauty journey starts and ends on your schedule, with ease and elegance every step of the way.
          </p>

          {/* Search Box */}
          <div className="relative w-full h-[5.3vw] bg-white border border-[#B4B4B4] rounded-[0.93vw]">
            <p className="absolute top-[1.45vw] left-[1.85vw] text-[1.2vw] text-[#A0A0A0] font-poppins">
              Search For Services
            </p>
            {!user && (
              <>
                <button 
                  onClick={() => router.push("/get_listed") }
                  className="absolute right-[0.3vw] top-[0.6vw] w-[8.4vw] h-[4vw] bg-gradient-to-l from-[#BB23DA] to-[#AD5389] text-white text-[1.2vw] font-bold rounded-[0.5vw]"
                >
                  Get Listed
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      
      <div className="lg:hidden block md:hidden block absolute w-[100vw] h-[115.9vw] rounded-[0.95vw] overflow-hidden bg-[#FCEBFF]">
        
        {/* Card background */}
        <div className="absolute top-[12vw] left-[3.86vw] z-0 w-[91.6vw] h-[46.6vw] bg-[#F9D9FF] rounded-[0.95vw] overflow-hidden">

        {/* Blurred Vectors */}
        <div
          className="absolute z-10"
          style={{
            width: "34.67vw",
            height: "33vw",
            left: "32.04vw",
            top: "22.6vw",
            background: "rgba(187, 35, 218, 0.8)",
            filter: "blur(5.2vw)",
            borderRadius: "50%",
          }}
        />
        <div
          className="absolute z-10"
          style={{
            width: "22.97vw",
            height: "22.58vw",
            left: "49.3vw",
            top: "-3.95vw",
            background: "rgba(173, 83, 137, 0.8)",
            filter: "blur(5.2vw)",
            borderRadius: "50%",
          }}
        />

        {/* Hero Image */}
        <div className="absolute z-20 top-[-13.96vw] left-[18.18vw]">
          <Image
            src={image}
            width={665}
            height={646}
            alt="Hero"
            className="w-[62.38vw] object-cover"
          />
        </div>
        </div>

        {/* Text Content */}
        <div
          className="absolute z-30"
          style={{
            top: "65.09vw",
            left: "4.54vw",
            width: "90.9vw",
          }}
        >
          <h1 className="font-poppins font-semibold text-[5.9vw] leading-[7.27vw] text-[#353535] mb-[2.27vw]">
            Find Best Stylist in your Town With Just Few Clicks.
          </h1>
          <p className="font-poppins font-normal text-[3vw] leading-[5vw] text-[#6D6D6D] mb-[2.7vw]">
            Your beauty journey starts and ends on your schedule, with ease and elegance every step of the way.
          </p>

          {/* Search Box */}
          <div className="relative w-full h-[11.3vw] bg-white border border-[#B4B4B4] rounded-[1.96vw]">
            <p className="absolute top-[3.2vw] left-[3.86vw] text-[2.45vw] text-[#A0A0A0] font-poppins">
              Search For Services
            </p>
            {!user && (
              <>
                <button 
                  onClick={() => router.push("/get_listed") }
                  className="absolute right-[1.13vw] top-[1.36vw] w-[17.93vw] h-[8.55vw] bg-gradient-to-l from-[#BB23DA] to-[#AD5389] text-white text-[2.45vw] font-bold rounded-[0.98vw]">
                  Get Listed
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default Hero_SS;
