'use client';
import React, { useState } from 'react';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import AuthPopup from "@/components/signup_login/AuthPopup";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from 'next/router';

// Chunk array into rows of 3
const chunkArray = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const ProductsGrid = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const services = [
  {
    image: '/images/services/s1.jpg',
    title: 'Khushboo Salon',
    subtitle: 'Hair & Styling',
    price: 399,
    description: 'Get the perfect cut at Khushboo Salon—expert styling, tailored to you.',
    rating: '4.5',
    reviews: 128,
    reviewers: [
    '/images/profile/p1.png',
    '/images/profile/p2.png',
    '/images/profile/p3.png',
    '/images/profile/p4.png',
  ],
  },
  {
    image: '/images/services/s1.png',
    title: 'Glow Beauty Lounge',
    subtitle: 'Makeup & Skincare',
    price: 699,
    description: 'Luxury skincare and makeup services for every occasion.',
    rating: '4.8',
    reviews: 86,
    reviewers: [
    '/images/profile/p1.png',
    '/images/profile/p2.png',
    '/images/profile/p3.png',
    '/images/profile/p4.png',
  ],
  },
  {
    image: '/images/services/s2.jpg',
    title: 'The Barber Bros',
    subtitle: 'Men’s Grooming',
    price: 299,
    description: 'Classic and modern cuts by expert barbers.',
    rating: '4.2',
    reviews: 54,
    reviewers: [
    '/images/profile/p1.png',
    '/images/profile/p2.png',
    '/images/profile/p3.png',
    '/images/profile/p4.png',
  ],
  },
  {
    image: '/images/services/s3.jpg',
    title: 'Cut & Style Studio',
    subtitle: 'Hair Treatments',
    price: 499,
    description: 'Revamp your look with nourishing treatments and style.',
    rating: '4.6',
    reviews: 72,
    reviewers: [
    '/images/profile/p1.png',
    '/images/profile/p2.png',
    '/images/profile/p3.png',
    '/images/profile/p4.png',
  ],
  },
  {
    image: '/images/services/s4.jpg',
    title: 'Urban Clippers',
    subtitle: 'Trendy Haircuts',
    price: 349,
    description: 'Urban-style haircuts with a personalized touch.',
    rating: '4.3',
    reviews: 91,
    reviewers: [
    '/images/profile/p1.png',
    '/images/profile/p2.png',
    '/images/profile/p3.png',
    '/images/profile/p4.png',
  ],
  },
  {
  image: '/images/services/s5.jpg',
  title: 'Elegance Studio',
  subtitle: 'Hair & Styling',
  price: 449,
  description: 'Style your hair with experts at Elegance Studio – redefining grooming.',
  rating: '4.7',
  reviews: 98,
  reviewers: [
    '/images/profile/p1.png',
    '/images/profile/p2.png',
    '/images/profile/p3.png',
    '/images/profile/p4.png',
  ],
},
{
  image: '/images/services/s6.jpg',
  title: 'Glow & Go',
  subtitle: 'Hair & Beauty',
  price: 499,
  description: 'Feel confident and refreshed with premium care at Glow & Go.',
  rating: '4.3',
  reviews: 110,
  reviewers: [
    '/images/profile/p1.png',
    '/images/profile/p2.png',
    '/images/profile/p3.png',
    '/images/profile/p4.png',
  ],
},
{
  image: '/images/services/s7.jpg',
  title: 'Style Hub',
  subtitle: 'Men’s Grooming',
  price: 350,
  description: 'Trendy cuts and classic trims—all under one roof.',
  rating: '4.6',
  reviews: 87,
  reviewers: [
    '/images/profile/p1.png',
    '/images/profile/p2.png',
    '/images/profile/p3.png',
    '/images/profile/p4.png',
  ],
},
{
  image: '/images/services/s8.jpg',
  title: 'Beauty Basics',
  subtitle: 'Salon & Spa',
  price: 299,
  description: 'Affordable elegance and expert care await you.',
  rating: '4.2',
  reviews: 65,
  reviewers: [
    '/images/profile/p1.png',
    '/images/profile/p2.png',
    '/images/profile/p3.png',
    '/images/profile/p4.png',
  ],
},
{
  image: '/images/services/s9.jpg',
  title: 'Bliss Lounge',
  subtitle: 'Unisex Salon',
  price: 399,
  description: 'A blissful makeover with personalized services.',
  rating: '4.8',
  reviews: 134,
  reviewers: [
    '/images/profile/p1.png',
    '/images/profile/p2.png',
    '/images/profile/p3.png',
    '/images/profile/p4.png',
  ],
},
{
  image: '/images/services/s10.png',
  title: 'Urban Cuts',
  subtitle: 'Men’s Haircut',
  price: 279,
  description: 'Sharp styles and modern fades for the urban man.',
  rating: '4.4',
  reviews: 120,
  reviewers: [
    '/images/profile/p1.png',
    '/images/profile/p2.png',
    '/images/profile/p3.png',
    '/images/profile/p4.png',
  ],
},
{
  image: '/images/services/s11.jpg',
  title: 'Revive Salon',
  subtitle: 'Hair Treatment',
  price: 599,
  description: 'Revitalize your hair with our nourishing treatments.',
  rating: '4.6',
  reviews: 75,
  reviewers: [
    '/images/profile/p1.png',
    '/images/profile/p2.png',
    '/images/profile/p3.png',
    '/images/profile/p4.png',
  ],
},
{
  image: '/images/services/s12.jpg',
  title: 'The Hair Lounge',
  subtitle: 'Styling & Trim',
  price: 389,
  description: 'Expert stylists crafting the look you desire.',
  rating: '4.5',
  reviews: 140,
  reviewers: [
    '/images/profile/p1.png',
    '/images/profile/p2.png',
    '/images/profile/p3.png',
    '/images/profile/p4.png',
  ],
},
{
  image: '/images/services/s13.jpg',
  title: 'Grace Beauty Bar',
  subtitle: 'Hair & Skin',
  price: 429,
  description: 'Luxury grooming for modern lifestyles.',
  rating: '4.7',
  reviews: 102,
  reviewers: [
    '/images/profile/p1.png',
    '/images/profile/p2.png',
    '/images/profile/p3.png',
    '/images/profile/p4.png',
  ],
},
{
  image: '/images/services/s14.jpg',
  title: 'The Style Lab',
  subtitle: 'Hair Studio',
  price: 315,
  description: 'Where style meets innovation and care.',
  rating: '4.2',
  reviews: 88,
  reviewers: [
    '/images/profile/p1.png',
    '/images/profile/p2.png',
    '/images/profile/p3.png',
    '/images/profile/p4.png',
  ],
},
{
  image: '/images/services/s15.png',
  title: 'Cut & Curl',
  subtitle: 'Hair Spa',
  price: 549,
  description: 'Curated cuts, lush curls, and healthy hair.',
  rating: '4.9',
  reviews: 162,
  reviewers: [
    '/images/profile/p1.png',
    '/images/profile/p2.png',
    '/images/profile/p3.png',
    '/images/profile/p4.png',
  ],
},
{
  image: '/images/services/s16.jpg',
  title: 'Elite Trims',
  subtitle: 'Men’s Barber',
  price: 299,
  description: 'Classic trims and modern fades done right.',
  rating: '4.3',
  reviews: 92,
  reviewers: [
    '/images/profile/p1.png',
    '/images/profile/p2.png',
    '/images/profile/p3.png',
    '/images/profile/p4.png',
  ],
},
{
  image: '/images/services/s17.jpg',
  title: 'Fresh Looks',
  subtitle: 'Styling Zone',
  price: 379,
  description: 'Refine your style with the perfect look.',
  rating: '4.6',
  reviews: 121,
  reviewers: [
    '/images/profile/p1.png',
    '/images/profile/p2.png',
    '/images/profile/p3.png',
    '/images/profile/p4.png',
  ],
},
{
  image: '/images/services/s18.png',
  title: 'Glow Avenue',
  subtitle: 'Salon for All',
  price: 419,
  description: 'Salon services tailored for all occasions.',
  rating: '4.5',
  reviews: 109,
  reviewers: [
    '/images/profile/p1.png',
    '/images/profile/p2.png',
    '/images/profile/p3.png',
    '/images/profile/p4.png',
  ],
},
{
  image: '/images/services/s19.jpg',
  title: 'The Beauty Co.',
  subtitle: 'Spa & Styling',
  price: 599,
  description: 'Relax, style, and rejuvenate with us.',
  rating: '4.8',
  reviews: 150,
  reviewers: [
    '/images/profile/p1.png',
    '/images/profile/p2.png',
    '/images/profile/p3.png',
    '/images/profile/p4.png',
  ],
},
{
  image: '/images/services/s20.jpg',
  title: 'Mane Street',
  subtitle: 'Trendy Haircuts',
  price: 359,
  description: 'Hair fashion that speaks for itself.',
  rating: '4.4',
  reviews: 97,
  reviewers: [
    '/images/profile/p1.png',
    '/images/profile/p2.png',
    '/images/profile/p3.png',
    '/images/profile/p4.png',
  ],
},
{
  image: '/images/services/s21.jpg',
  title: 'Chic Cuts',
  subtitle: 'Hair Designers',
  price: 489,
  description: 'From chic cuts to timeless looks, we’ve got you.',
  rating: '4.6',
  reviews: 112,
  reviewers: [
    '/images/profile/p1.png',
    '/images/profile/p2.png',
    '/images/profile/p3.png',
    '/images/profile/p4.png',
  ],
},
{
  image: '/images/services/s22.png',
  title: 'Luxe Salon',
  subtitle: 'Premium Styling',
  price: 599,
  description: 'Luxury meets finesse in every cut and curl.',
  rating: '4.7',
  reviews: 135,
  reviewers: [
    '/images/profile/p1.png',
    '/images/profile/p2.png',
    '/images/profile/p3.png',
    '/images/profile/p4.png',
  ],
},
{
  image: '/images/services/s23.jpg',
  title: 'Snip Studio',
  subtitle: 'Modern Barbers',
  price: 309,
  description: 'Stylish trims and beard shaping just for you.',
  rating: '4.4',
  reviews: 94,
  reviewers: [
    '/images/profile/p1.png',
    '/images/profile/p2.png',
    '/images/profile/p3.png',
    '/images/profile/p4.png',
  ],
},
{
  image: '/images/services/s24.jpg',
  title: 'Gloss & Glam',
  subtitle: 'Salon & Spa',
  price: 429,
  description: 'Glamorous makeovers and skin care treatments.',
  rating: '4.5',
  reviews: 117,
  reviewers: [
    '/images/profile/p1.png',
    '/images/profile/p2.png',
    '/images/profile/p3.png',
    '/images/profile/p4.png',
  ],
},
{
  image: '/images/services/s25.jpg',
  title: 'Tress Affairs',
  subtitle: 'Hair Specialists',
  price: 539,
  description: 'Advanced care for all types of tresses.',
  rating: '4.9',
  reviews: 170,
  reviewers: [
    '/images/profile/p1.png',
    '/images/profile/p2.png',
    '/images/profile/p3.png',
    '/images/profile/p4.png',
  ],
},
{
  image: '/images/services/s14.jpg',
  title: 'Studio One',
  subtitle: 'Styling House',
  price: 459,
  description: 'Creating signature looks for modern individuals.',
  rating: '4.6',
  reviews: 128,
  reviewers: [
    '/images/profile/p1.png',
    '/images/profile/p2.png',
    '/images/profile/p3.png',
    '/images/profile/p4.png',
  ],
},
{
  image: '/images/services/s7.jpg',
  title: 'Mirror Magic',
  subtitle: 'Beauty Lounge',
  price: 499,
  description: 'Where beauty and magic meet, every day.',
  rating: '4.8',
  reviews: 154,
  reviewers: [
    '/images/profile/p1.png',
    '/images/profile/p2.png',
    '/images/profile/p3.png',
    '/images/profile/p4.png',
  ],
},
{
  image: '/images/services/s12.jpg',
  title: 'Fade Factory',
  subtitle: 'Men’s Cuts',
  price: 279,
  description: 'Crisp fades and high-quality grooming experiences.',
  rating: '4.5',
  reviews: 104,
  reviewers: [
    '/images/profile/p1.png',
    '/images/profile/p2.png',
    '/images/profile/p3.png',
    '/images/profile/p4.png',
  ],
},

];


  const servicePerPage = 12;
  const startIndex = (currentPage - 1) * servicePerPage;
  const currentServices = services.slice(startIndex, startIndex + servicePerPage);

  const nextPage = () => {
    if (currentPage < Math.ceil(services.length / servicePerPage)) {
      window.scrollTo({ top: 400, behavior: 'smooth' });
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      window.scrollTo({ top: 400, behavior: 'smooth' });
      setCurrentPage(currentPage - 1);
    }
  };

  const rows = chunkArray(currentServices, 3);
  
  return (
    <section className="relative w-full h-full mt-[4.6vw] mb-[20vw] px-[5.4vw]">
      <h2 className="text-center text-[#353535] font-semibold text-[4vw] leading-tight py-[5vw]">
        Services at <span className="text-[#BB23DA]">BarberX</span>
      </h2>

      <div className="flex flex-col gap-[4vw]">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex md:flex-row flex-nowrap overflow-x-auto md:overflow-visible md:justify-center gap-[1.5vw] scrollbar-hide"
          >
            {row.map((item, index) => (
              <div className="flex-shrink-0 w-[85vw] md:w-[28vw]" key={index}>
                <ProductCard {...item} />
              </div>
            ))}
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
        {[...Array(Math.ceil(services.length / servicePerPage))].map((_, index) => (
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
    </section>
  );
};

export default ProductsGrid;

// ----------------------
// ProductCard Component
// ----------------------


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
      <div 
        onClick={() => router.push("/s_services")}
        className="absolute top-[2.5vw] sm:top-[1vw] left-[2.5vw] sm:left-[1vw] w-[77vw] sm:w-[26vw] h-[52vw] sm:h-[20vw]"
      >
        
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
          className="ml-[2vw] sm:ml-[1vw] w-[67vw] sm:w-[23vw] h-full bg-gradient-to-r from-[#AD5389] to-[#BB23DA] text-white rounded-[1vw] sm:rounded-[0.2vw] font-semibold font-manrope text-[3vw] sm:text-[0.9vw]"
        >
          Book Now
        </button>
      </div>
      <AuthPopup mode={authMode} onClose={setAuthMode} />
    </div>
  );
};
