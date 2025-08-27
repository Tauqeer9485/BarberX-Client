'use client';
import React, { useState } from "react";
import { Star } from "lucide-react";
import Image from "next/image";
import AuthPopup from "@/components/signup_login/AuthPopup";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from 'next/router';

const SalonListSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [authMode, setAuthMode] = useState(null);
  const router = useRouter();
  const { user } = useAuth();

  const salons = [
    {
      name: "Khushboo Salon",
      location: "State Bank Chowk, Near postal ground Yavatmal.",
      rating: 4.5,
      reviews: 128,
      image: "/images/img.png",
      reviewers: [
        '/images/profile/p1.png',
        '/images/profile/p2.png',
        '/images/profile/p3.png',
        '/images/profile/p4.png',
      ],
    },
    {
      name: "Luxe Cuts",
      location: "Main Market, Near Central Park",
      rating: 4.2,
      reviews: 105,
      image: "/images/img.png",
      reviewers: [
        '/images/profile/p1.png',
        '/images/profile/p2.png',
        '/images/profile/p3.png',
        '/images/profile/p4.png',
      ],
    },
    {
      name: "The Style Studio",
      location: "New Road, Downtown",
      rating: 4.8,
      reviews: 230,
      image: "/images/img.png",
      reviewers: [
        '/images/profile/p1.png',
        '/images/profile/p2.png',
        '/images/profile/p3.png',
        '/images/profile/p4.png',
      ],
    },
    {
      name: "Shiny Beauty Bar",
      location: "West End Avenue",
      rating: 4.3,
      reviews: 87,
      image: "/images/img.png",
      reviewers: [
        '/images/profile/p1.png',
        '/images/profile/p2.png',
        '/images/profile/p3.png',
        '/images/profile/p4.png',
      ],
    },
    {
      name: "Perfect Cut",
      location: "Sunset Boulevard, Block B",
      rating: 4.6,
      reviews: 54,
      image: "/images/img.png",
      reviewers: [
        '/images/profile/p1.png',
        '/images/profile/p2.png',
        '/images/profile/p3.png',
        '/images/profile/p4.png',
      ],
    },
    {
      name: "Luxe Cuts",
      location: "Main Market, Near Central Park",
      rating: 4.2,
      reviews: 105,
      image: "/images/img.png",
      reviewers: [
        '/images/profile/p1.png',
        '/images/profile/p2.png',
        '/images/profile/p3.png',
        '/images/profile/p4.png',
      ],
    },
    {
      name: "The Style Studio",
      location: "New Road, Downtown",
      rating: 4.8,
      reviews: 230,
      image: "/images/img.png",
      reviewers: [
        '/images/profile/p1.png',
        '/images/profile/p2.png',
        '/images/profile/p3.png',
        '/images/profile/p4.png',
      ],
    },
    {
      name: "Shiny Beauty Bar",
      location: "West End Avenue",
      rating: 4.3,
      reviews: 87,
      image: "/images/img.png",
      reviewers: [
        '/images/profile/p1.png',
        '/images/profile/p2.png',
        '/images/profile/p3.png',
        '/images/profile/p4.png',
      ],
    },
    {
      name: "Perfect Cut",
      location: "Sunset Boulevard, Block B",
      rating: 4.6,
      reviews: 54,
      image: "/images/img.png",
      reviewers: [
        '/images/profile/p1.png',
        '/images/profile/p2.png',
        '/images/profile/p3.png',
        '/images/profile/p4.png',
      ],
    },
    {
      name: "Luxe Cuts",
      location: "Main Market, Near Central Park",
      rating: 4.2,
      reviews: 105,
      image: "/images/img.png",
      reviewers: [
        '/images/profile/p1.png',
        '/images/profile/p2.png',
        '/images/profile/p3.png',
        '/images/profile/p4.png',
      ],
    },
    {
      name: "The Style Studio",
      location: "New Road, Downtown",
      rating: 4.8,
      reviews: 230,
      image: "/images/img.png",
      reviewers: [
        '/images/profile/p1.png',
        '/images/profile/p2.png',
        '/images/profile/p3.png',
        '/images/profile/p4.png',
      ],
    },
    {
      name: "Shiny Beauty Bar",
      location: "West End Avenue",
      rating: 4.3,
      reviews: 87,
      image: "/images/img.png",
      reviewers: [
        '/images/profile/p1.png',
        '/images/profile/p2.png',
        '/images/profile/p3.png',
        '/images/profile/p4.png',
      ],
    },
    {
      name: "Perfect Cut",
      location: "Sunset Boulevard, Block B",
      rating: 4.6,
      reviews: 54,
      image: "/images/img.png",
      reviewers: [
        '/images/profile/p1.png',
        '/images/profile/p2.png',
        '/images/profile/p3.png',
        '/images/profile/p4.png',
      ],
    },
    {
      name: "Glow Up Salon",
      location: "Parkside Road, Unit 3",
      rating: 4.4,
      reviews: 110,
      image: "/images/img.png",
      reviewers: [
        '/images/profile/p1.png',
        '/images/profile/p2.png',
        '/images/profile/p3.png',
        '/images/profile/p4.png',
      ],
    },
    {
      name: "Perfect Cut",
      location: "Sunset Boulevard, Block B",
      rating: 4.6,
      reviews: 54,
      image: "/images/img.png",
      reviewers: [
        '/images/profile/p1.png',
        '/images/profile/p2.png',
        '/images/profile/p3.png',
        '/images/profile/p4.png',
      ],
      reviewers: [
        '/images/profile/p1.png',
        '/images/profile/p2.png',
        '/images/profile/p3.png',
        '/images/profile/p4.png',
      ],
      reviewers: [
        '/images/profile/p1.png',
        '/images/profile/p2.png',
        '/images/profile/p3.png',
        '/images/profile/p4.png',
      ],
    },
    {
      name: "Glow Up Salon",
      location: "Parkside Road, Unit 3",
      rating: 4.4,
      reviews: 110,
      image: "/images/img.png",
      reviewers: [
        '/images/profile/p1.png',
        '/images/profile/p2.png',
        '/images/profile/p3.png',
        '/images/profile/p4.png',
      ],
      reviewers: [
        '/images/profile/p1.png',
        '/images/profile/p2.png',
        '/images/profile/p3.png',
        '/images/profile/p4.png',
      ],
    },
  ];

  const salonsPerPage = 6;
  const startIndex = (currentPage - 1) * salonsPerPage;
  const currentSalons = salons.slice(startIndex, startIndex + salonsPerPage);

  const nextPage = () => {
    if (currentPage < Math.ceil(salons.length / salonsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="relative w-full h-full mt-[4.6vw] mb-[20vw] px-[5.4vw]">
      {/* Section Heading */}
      <h2 className="text-center text-[#353535] font-semibold text-[6vw] md:text-[4vw] leading-tight py-[5vw]">
        Listed salons at <span className="text-[#BB23DA]">BarberX</span>
      </h2>

      <div className="flex flex-col gap-[4vw]">
        {currentSalons.map((salon, index) => (
          <div
            key={index}
            className="relative w-[89.1vw] bg-white border-[0.1vw] border-[#A0A0A0] rounded-[1.5vw] drop-shadow-lg overflow-hidden"
          >
            {/* Save Icon */}
            <button className="absolute top-0 right-0 w-[7.54vw] h-[3vw] bg-[#BB23DA] rounded-tr-[1vw] rounded-bl-[0.8vw] flex items-center justify-center text-white text-[24px]">
              <Image
                  src="/images/Vector.png"
                  width={360}
                  height={355}
                  alt={salon.name}
                  className="w-[1vw] object-cover"
                />
            </button>

            {/* Content */}
            <div className="flex h-full">
              {/* Image */}
              <div className="p-[1.2vw]">
                <Image
                  src={salon.image}
                  width={360}
                  height={355}
                  alt={salon.name}
                  className="rounded-[1vw] w-[26vw] object-cover"
                />
              </div>

              {/* Text + Buttons */}
              <div className="flex flex-col justify-between py-[1.2vw] pl-[2.3vw] pr-[1.5vw] w-full">
                {/* Text Block */}
                <div className="mt-[5.5vw]">
                  <h2 className="text-[1.8vw] font-bold leading-[1.4vw] text-[#353535]">
                    {salon.name}
                  </h2>
                  <p className="text-[1.7svw] leading-[1.4vw] text-[#353535] mt-[1.5vw]">
                    {salon.location}
                  </p>
{/* 
                  {/* Rating + Reviews * /}
                  <div className="mt-[1.4vw] flex items-center gap-[2.2vw]">
                    <div className="flex items-center gap-[1vw]">
                      <Star className="w-[1.8vw] h-[1.8vw] text-[#FFC64A] fill-[#FFC64A]" />
                      <span className="text-[1.4vw] font-semibold text-[#353535]">
                        {salon.rating} / 5
                      </span>
                    </div>

                    {/* Reviews * /}
                    <div className="flex items-center gap-[-2vw]">
                      <div className="w-[2.35vw] h-[2.35vw] rounded-full bg-[#BB23DA] text-white text-[0.8vw] flex items-center justify-center">
                        {salon.reviews}+
                      </div>
                      <div className="w-[2.2vw] h-[2.2vw] rounded-full bg-[url('/avatar2.png')] bg-cover"></div>
                      <div className="w-[2.2vw] h-[2.2vw] rounded-full bg-[url('/avatar3.png')] bg-cover"></div>
                    </div>
                  </div> */}

                  
                  {/* Rating */}
                  <div className="mt-[1.4vw] flex items-center gap-[2.2vw]">
                    <Star className="w-[1.8vw] h-[1.8vw] text-[#FFC64A] fill-[#FFC64A]" />
                    <span className="text-[1.4vw] font-semibold text-[#353535]">
                      {salon.rating} / 5
                    </span>

                    <div className="flex items-center">
                      <div className="w-[2.35vw] h-[2.35vw] rounded-full bg-[#BB23DA] text-white text-[0.8vw] flex items-center justify-center z-10">
                        +{salon.reviews}
                      </div>
                    
                      <div className="flex">
                        {salon.reviewers.map((r, i) => (
                          <img
                            key={i}
                            src={r}
                            alt="user"
                            className="w-[2.35vw] h-[2.35vw] rounded-full border border-white ml-[-1vw]"
                            style={{ zIndex: 5 - i }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-[5vw] mt-[1vw]">
                  <button 
                    onClick={() => {
                      if ((!user)) {
                        setAuthMode("login")
                      } else if (user?.role === "customer") {
                        router.push("/schedule");
                      }
                    }}
                    className="w-[20vw] h-[4vw] rounded-[0.6vw] text-white text-[1.46vw] font-medium bg-gradient-to-l from-[#BB23DA] to-[#AD5389]"
                  >
                    Book Appointment
                  </button>
                  <button
                    onClick={() => router.push("/s_services") } 
                    className="w-[20vw] h-[4vw] rounded-[0.6vw] text-[1.46vw] font-medium bg-white border text-transparent bg-clip-text bg-gradient-to-r from-[#AD5389] to-[#BB23DA]"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-[5vw]">
        <button
          onClick={prevPage}
          className="px-6 py-2 text-[16px] font-semibold text-[#353535] rounded-[8px] hover:bg-[#DDDDDD]"
        >
          Previous
        </button>
        {[...Array(Math.ceil(salons.length / salonsPerPage))].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1) }
            className={`px-4 py-2 text-[16px] font-semibold rounded-full ${
              currentPage === index + 1
                ? "bg-gradient-to-r from-[#AD5389] to-[#BB23DA] text-white"
                : "text-[#353535]"
            }`}
          >
            
            {index + 1}
          </button>
        ))}
        <button
          onClick={nextPage}
          className="px-6 py-2 text-[16px] font-semibold text-[#353535] rounded-[8px] hover:bg-[#DDDDDD]"
        >
          Next
        </button>
      </div>
      <AuthPopup mode={authMode} onClose={setAuthMode} />
    </div>
  );
};

export default SalonListSection;
