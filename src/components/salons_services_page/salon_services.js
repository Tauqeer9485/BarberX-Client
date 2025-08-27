'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import AuthPopup from "@/components/signup_login/AuthPopup";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from 'next/router';


const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const tabs = ['All', 'Haircut', 'Beard', 'Hair Spa', 'Straightening Or Curls'];

const SalonServices = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [filteredServices, setFilteredServices] = useState([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const [currentPage, setCurrentPage] = useState(1);
  const tabRefs = useRef([]);

  const servicesPerPage = 9;

  const allServicesData = [
    {
      image: '/images/services/s1.jpg',
      title: 'Khushboo Salon',
      subtitle: 'Beard',
      price: 399,
      description: 'Get the perfect cut at Khushboo Salon—expert styling, tailored to you.',
      rating: '4.5',
      reviews: 128,
      reviewers: ['/images/profile/p1.png','/images/profile/p2.png','/images/profile/p3.png','/images/profile/p4.png'],
    },
    {
      image: '/images/services/s1.png',
      title: 'Khushboo Salon',
      subtitle: 'Haircut',
      price: 699,
      description: 'Luxury skincare and makeup services for every occasion.',
      rating: '4.8',
      reviews: 86,
      reviewers: ['/images/profile/p1.png','/images/profile/p2.png','/images/profile/p3.png','/images/profile/p4.png'],
    },
    {
      image: '/images/services/s2.jpg',
      title: 'Khushboo Salon',
      subtitle: 'Hair Spa',
      price: 299,
      description: 'Classic and modern cuts by expert barbers.',
      rating: '4.2',
      reviews: 54,
      reviewers: ['/images/profile/p1.png','/images/profile/p2.png','/images/profile/p3.png','/images/profile/p4.png'],
    },
    {
      image: '/images/services/s3.jpg',
      title: 'Khushboo Salon',
      subtitle: 'Straightening Or Curls',
      price: 499,
      description: 'Revamp your look with nourishing treatments and style.',
      rating: '4.6',
      reviews: 72,
      reviewers: ['/images/profile/p1.png','/images/profile/p2.png','/images/profile/p3.png','/images/profile/p4.png'],
    },
    {
      image: '/images/services/s4.jpg',
      title: 'Khushboo Salon',
      subtitle: 'Beard',
      price: 349,
      description: 'Urban-style haircuts with a personalized touch.',
      rating: '4.3',
      reviews: 91,
      reviewers: ['/images/profile/p1.png','/images/profile/p2.png','/images/profile/p3.png','/images/profile/p4.png'],
    },
    {
      image: '/images/services/s5.jpg',
      title: 'Khushboo Salon',
      subtitle: 'Hair Spa',
      price: 449,
      description: 'Style your hair with experts at Elegance Studio – redefining grooming.',
      rating: '4.7',
      reviews: 98,
      reviewers: ['/images/profile/p1.png','/images/profile/p2.png','/images/profile/p3.png','/images/profile/p4.png'],
    },
    {
      image: '/images/services/s6.jpg',
      title: 'Khushboo Salon',
      subtitle: 'Haircut',
      price: 499,
      description: 'Feel confident and refreshed with premium care at Glow & Go.',
      rating: '4.3',
      reviews: 110,
      reviewers: ['/images/profile/p1.png','/images/profile/p2.png','/images/profile/p3.png','/images/profile/p4.png'],
    },
    {
      image: '/images/services/s7.jpg',
      title: 'Khushboo Salon',
      subtitle: 'Hair Spa',
      price: 350,
      description: 'Trendy cuts and classic trims—all under one roof.',
      rating: '4.6',
      reviews: 87,
      reviewers: ['/images/profile/p1.png','/images/profile/p2.png','/images/profile/p3.png','/images/profile/p4.png'],
    },
    {
      image: '/images/services/s8.jpg',
      title: 'Khushboo Salon',
      subtitle: 'Straightening Or Curls',
      price: 299,
      description: 'Affordable elegance and expert care await you.',
      rating: '4.2',
      reviews: 65,
      reviewers: ['/images/profile/p1.png','/images/profile/p2.png','/images/profile/p3.png','/images/profile/p4.png'],
    },
    {
      image: '/images/services/s9.jpg',
      title: 'Khushboo Salon',
      subtitle: 'Haircut',
      price: 399,
      description: 'A blissful makeover with personalized services.',
      rating: '4.8',
      reviews: 134,
      reviewers: ['/images/profile/p1.png','/images/profile/p2.png','/images/profile/p3.png','/images/profile/p4.png'],
    },
    {
      image: '/images/services/s10.png',
      title: 'Khushboo Salon',
      subtitle: 'Beard',
      price: 279,
      description: 'Sharp styles and modern fades for the urban man.',
      rating: '4.4',
      reviews: 120,
      reviewers: ['/images/profile/p1.png','/images/profile/p2.png','/images/profile/p3.png','/images/profile/p4.png'],
    },
    {
      image: '/images/services/s11.jpg',
      title: 'Khushboo Salon',
      subtitle: 'Straightening Or Curls',
      price: 599,
      description: 'Revitalize your hair with our nourishing treatments.',
      rating: '4.6',
      reviews: 75,
      reviewers: ['/images/profile/p1.png','/images/profile/p2.png','/images/profile/p3.png','/images/profile/p4.png'],
    },
    {
      image: '/images/services/s12.jpg',
      title: 'Khushboo Salon',
      subtitle: 'Haircut',
      price: 389,
      description: 'Expert stylists crafting the look you desire.',
      rating: '4.5',
      reviews: 140,
      reviewers: ['/images/profile/p1.png','/images/profile/p2.png','/images/profile/p3.png','/images/profile/p4.png'],
    },
    {
      image: '/images/services/s13.jpg',
      title: 'Khushboo Salon',
      subtitle: 'Hair Spa',
      price: 429,
      description: 'Luxury grooming for modern lifestyles.',
      rating: '4.7',
      reviews: 102,
      reviewers: ['/images/profile/p1.png','/images/profile/p2.png','/images/profile/p3.png','/images/profile/p4.png'],
    },
    {
      image: '/images/services/s14.jpg',
      title: 'Khushboo Salon',
      subtitle: 'Beard',
      price: 315,
      description: 'Where style meets innovation and care.',
      rating: '4.2',
      reviews: 88,
      reviewers: ['/images/profile/p1.png','/images/profile/p2.png','/images/profile/p3.png','/images/profile/p4.png'],
    },
    {
      image: '/images/services/s15.png',
      title: 'Khushboo Salon',
      subtitle: 'Straightening Or Curls',
      price: 549,
      description: 'Curated cuts, lush curls, and healthy hair.',
      rating: '4.9',
      reviews: 162,
      reviewers: ['/images/profile/p1.png','/images/profile/p2.png','/images/profile/p3.png','/images/profile/p4.png'],
    },
    {
      image: '/images/services/s16.jpg',
      title: 'Khushboo Salon',
      subtitle: 'Haircut',
      price: 299,
      description: 'Classic trims and modern fades done right.',
      rating: '4.3',
      reviews: 92,
      reviewers: ['/images/profile/p1.png','/images/profile/p2.png','/images/profile/p3.png','/images/profile/p4.png'],
    },
    {
      image: '/images/services/s17.jpg',
      title: 'Khushboo Salon',
      subtitle: 'Beard',
      price: 379,
      description: 'Refine your style with the perfect look.',
      rating: '4.6',
      reviews: 121,
      reviewers: ['/images/profile/p1.png','/images/profile/p2.png','/images/profile/p3.png','/images/profile/p4.png'],
    },
    {
      image: '/images/services/s18.png',
      title: 'Khushboo Salon',
      subtitle: 'Hair Spa',
      price: 419,
      description: 'Salon services tailored for all occasions.',
      rating: '4.5',
      reviews: 109,
      reviewers: ['/images/profile/p1.png','/images/profile/p2.png','/images/profile/p3.png','/images/profile/p4.png'],
    },
    {
      image: '/images/services/s19.jpg',
      title: 'Khushboo Salon',
      subtitle: 'Haircut',
      price: 599,
      description: 'Relax, style, and rejuvenate with us.',
      rating: '4.8',
      reviews: 150,
      reviewers: ['/images/profile/p1.png','/images/profile/p2.png','/images/profile/p3.png','/images/profile/p4.png'],
    },
    {
      image: '/images/services/s20.jpg',
      title: 'Khushboo Salon',
      subtitle: 'Straightening Or Curls',
      price: 359,
      description: 'Hair fashion that speaks for itself.',
      rating: '4.4',
      reviews: 97,
      reviewers: ['/images/profile/p1.png','/images/profile/p2.png','/images/profile/p3.png','/images/profile/p4.png'],
    },
    {
      image: '/images/services/s21.jpg',
      title: 'Khushboo Salon',
      subtitle: 'Beard',
      price: 489,
      description: 'From chic cuts to timeless looks, we’ve got you.',
      rating: '4.6',
      reviews: 112,
      reviewers: ['/images/profile/p1.png','/images/profile/p2.png','/images/profile/p3.png','/images/profile/p4.png'],
    },
    {
      image: '/images/services/s22.png',
      title: 'Khushboo Salon',
      subtitle: 'Hair Spa',
      price: 599,
      description: 'Luxury meets finesse in every cut and curl.',
      rating: '4.7',
      reviews: 135,
      reviewers: ['/images/profile/p1.png','/images/profile/p2.png','/images/profile/p3.png','/images/profile/p4.png'],
    },
    {
      image: '/images/services/s23.jpg',
      title: 'Khushboo Salon',
      subtitle: 'Haircut',
      price: 309,
      description: 'Stylish trims and beard shaping just for you.',
      rating: '4.4',
      reviews: 94,
      reviewers: ['/images/profile/p1.png','/images/profile/p2.png','/images/profile/p3.png','/images/profile/p4.png'],
    },
    {
      image: '/images/services/s24.jpg',
      title: 'Khushboo Salon',
      subtitle: 'Beard',
      price: 429,
      description: 'Glamorous makeovers and skin care treatments.',
      rating: '4.5',
      reviews: 117,
      reviewers: ['/images/profile/p1.png','/images/profile/p2.png','/images/profile/p3.png','/images/profile/p4.png'],
    },
    {
      image: '/images/services/s25.jpg',
      title: 'Khushboo Salon',
      subtitle: 'Hair Spa',
      price: 539,
      description: 'Advanced care for all types of tresses.',
      rating: '4.9',
      reviews: 170,
      reviewers: ['/images/profile/p1.png','/images/profile/p2.png','/images/profile/p3.png','/images/profile/p4.png'],
    },
    {
      image: '/images/services/s14.jpg',
      title: 'Khushboo Salon',
      subtitle: 'Straightening Or Curls',
      price: 459,
      description: 'Creating signature looks for modern individuals.',
      rating: '4.6',
      reviews: 128,
      reviewers: ['/images/profile/p1.png','/images/profile/p2.png','/images/profile/p3.png','/images/profile/p4.png'],
    },
    {
      image: '/images/services/s7.jpg',
      title: 'Khushboo Salon',
      subtitle: 'Haircut',
      price: 499,
      description: 'Where beauty and magic meet, every day.',
      rating: '4.8',
      reviews: 154,
      reviewers: ['/images/profile/p1.png','/images/profile/p2.png','/images/profile/p3.png','/images/profile/p4.png'],
    },
    {
      image: '/images/services/s12.jpg',
      title: 'Khushboo Salon',
      subtitle: 'Beard',
      price: 279,
      description: 'Crisp fades and high-quality grooming experiences.',
      rating: '4.5',
      reviews: 104,
      reviewers: ['/images/profile/p1.png','/images/profile/p2.png','/images/profile/p3.png','/images/profile/p4.png'],
    },
  ];

  const handleTabSelect = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);

    if (tab === 'All') {
      setFilteredServices(allServicesData);
    } else {
      const filtered = allServicesData.filter(service => service.subtitle === tab);
      setFilteredServices(filtered);
    }
  };

  useEffect(() => {
    handleTabSelect('All');
  }, []);

  useEffect(() => {
    const index = tabs.indexOf(activeTab);
    const ref = tabRefs.current[index];
    if (ref) {
      setIndicatorStyle({
        left: ref.offsetLeft,
        width: ref.offsetWidth,
      });
    }
  }, [activeTab]);

  const paginatedServices = filteredServices.slice(
    (currentPage - 1) * servicesPerPage,
    currentPage * servicesPerPage
  );

  const rows = chunkArray(paginatedServices, 3);

  const nextPage = () => {
    const totalPages = Math.ceil(filteredServices.length / servicesPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
      window.scrollTo({ top: 400, behavior: 'smooth' });
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
      window.scrollTo({ top: 400, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-full mt-[4.6vw] mb-[20vw]">
      <div className="relative w-full max-w-[65vw] mx-auto mt-[4.6vw]">
        <div className="flex justify-between relative">
          {tabs.map((tab, idx) => (
            <button
              key={tab}
              ref={(el) => (tabRefs.current[idx] = el)}
              onClick={() => handleTabSelect(tab)}
              className={`relative text-[2.3vw] md:text-[1.6vw] tracking-wider font-poppins transition-all duration-300  owerflow-x-auto scrollbar-hide${
                activeTab === tab ? 'text-[#BB23DA]' : 'text-[#353535]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div
          className="absolute bottom-0 h-[2px] bg-[#BB23DA] rounded transition-all duration-300 ease-in-out"
          style={indicatorStyle}
        />
      </div>

      <div className="relative w-[90vw] h-full mt-[6.2vw] mb-[20vw] mx-auto">
        <div className="flex flex-col gap-[4vw] w-[90vw] mx-auto overflow-hidden">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex md:flex-row flex-nowrap overflow-x-auto md:overflow-visible md:justify-center gap-[2.6vw] left-[1vw] scrollbar-hide"
            >
              {row.map((item, index) => (
                <div className="flex-shrink-0 w-[85vw] md:w-[28vw]" key={index}>
                  <ProductCard {...item} />
                </div>
              ))}
            </div>
          ))}
        </div>

        {filteredServices.length > servicesPerPage && (
          <div className="flex justify-center items-center gap-4 mt-[5vw] mb-[30vw] md:mb-[-5vw]">
            <button
              onClick={prevPage}
              className="px-6 py-2 text-[16px] font-semibold text-[#353535] rounded-[8px] hover:bg-[#DDDDDD]"
            >
              Previous
            </button>
            {[...Array(Math.ceil(filteredServices.length / servicesPerPage))].map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentPage(index + 1);
                  window.scrollTo({ top: 400, behavior: 'smooth' });
                }}
                className={`px-4 py-2 text-[16px] font-semibold rounded-full ${
                  currentPage === index + 1
                    ? 'bg-gradient-to-r from-[#AD5389] to-[#BB23DA] text-white'
                    : 'text-[#353535]'
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
        )}
      </div>
    </section>
  );
};

export default SalonServices;

const ProductCard = ({
  image,
  title,
  subtitle,
  price,
  description,
  rating,
  reviews,
  reviewers = [],
}) => {
  
  const [authMode, setAuthMode] = useState(null);
  const router = useRouter();
  const { user } = useAuth();
  
  return (
    <div className="relative w-[82vw] sm:w-[28vw] h-[72vw] sm:h-[24.432vw] bg-white border border-[#A0A0A0] rounded-[2vw] sm:rounded-[0.3vw] p-[2.5vw] sm:p-[1vw] box-border">
      {/* Container */}
      <div className="absolute top-[2.5vw] sm:top-[1vw] left-[2.5vw] sm:left-[1vw] w-[77vw] sm:w-[26vw] h-[52vw] sm:h-[20vw]">
        
        {/* Image */}
        <div className="relative w-full h-[30vw] sm:h-[10.8vw]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-[2vw] sm:rounded-[0.5vw]"
          />
          {/* Like Button */}
          <div className="absolute top-[1vw] right-[1vw] w-[6vw] sm:w-[2vw] h-[6vw] sm:h-[2vw] bg-white rounded-full flex items-center justify-center">
            <Heart className="w-[3.5vw] sm:w-[1.2vw]" color="#191D23" />
          </div>
        </div>

        {/* Content */}
        <div className="absolute top-[32.5vw] sm:top-[11.2vw] w-full h-[25vw] sm:h-[9vw]">
          {/* Header */}
          <div className="relative">
            <p className="text-[2.5vw] sm:text-[0.7vw] text-[#64748B] font-poppins">
              {subtitle}
            </p>
            <h3 className="text-[3.5vw] sm:text-[1vw] font-semibold text-[#353535] font-poppins">
              {title}
            </h3>
            <span className="absolute top-0 right-0 text-[4vw] sm:text-[1.2vw] font-extrabold text-[#353535] font-poppins">
              ₹{price}
            </span>
          </div>

          {/* Description */}
          <p className="absolute top-[8.5vw] sm:top-[2.8vw] text-[3.2vw] sm:text-[0.95vw] text-[#64748B] w-full font-poppins line-clamp-2">
            {description}
          </p>

          {/* Rating */}
          <div className="absolute top-[18.5vw] sm:top-[6.5vw] flex items-center space-x-[1.5vw] sm:space-x-[0.5vw]">
            <Star className="w-[5vw] sm:w-[1.8vw] h-[5vw] sm:h-[1.8vw] text-[#FFC64A] fill-[#FFC64A]" />
            <p className="text-[#353535] font-semibold text-[2.5vw] sm:text-[0.75vw]">{rating} / 5</p>
            <div className="w-[4vw] sm:w-[1.4vw] h-[4vw] sm:h-[1.4vw] bg-[#BB23DA] text-white text-[1.5vw] sm:text-[0.45vw] rounded-full flex items-center justify-center ml-[2vw] sm:ml-[1.5vw] z-10">
              +{reviews}
            </div>
            <div className="flex ml-[1vw] sm:ml-[0.5vw]">
              {reviewers.map((r, i) => (
                <img
                  key={i}
                  src={r}
                  alt="user"
                  className="w-[4vw] sm:w-[1.4vw] h-[4vw] sm:h-[1.4vw] rounded-full border border-white -ml-[2vw] sm:-ml-[0.7vw]"
                  style={{ zIndex: 5 - i }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="absolute bottom-[2.5vw] sm:bottom-[1vw] left-[2.5vw] sm:left-[1vw] flex w-[77vw] sm:w-[26vw] h-[8vw] sm:h-[2.4vw]">
        <button className="w-[10vw] sm:w-[3.5vw] h-full bg-white border border-[#D0D5DD] rounded-[1vw] sm:rounded-[0.2vw] flex items-center justify-center">
          <ShoppingCart className="w-[3.5vw] sm:w-[1.3vw]" color="#A0A0A0" />
        </button>
        <button 
          onClick={() => {
            if ((!user)) {
              setAuthMode("login")
            } else if (user?.role === "customer") {
              router.push("/schedule");
            }
          }}

          className="ml-[2vw] sm:ml-[1vw] w-[67vw] sm:w-[23vw] h-full bg-gradient-to-r from-[#AD5389] to-[#BB23DA] text-white rounded-[1vw] sm:rounded-[0.2vw] font-semibold font-manrope text-[3vw] sm:text-[0.9vw]">
          Book Now
        </button>
      </div>
      <AuthPopup mode={authMode} onClose={setAuthMode} />s
    </div>
  );
};
