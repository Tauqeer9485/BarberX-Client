
import { useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Image from 'next/image';


const testimonials = [
  {
    name: "Kalpesh Mankar",
    role: "Website User",
    image: "/images/profile.png",
    text: "Super easy to book appointments! The app is fast, user-friendly, and keeps everything organized. Highly recommend!",
  },
  {
    name: "Ritika Sharma",
    role: "Barber, Luxe Cuts",
    image: "/images/profile.png",
    text: "BarberX really simplified how I manage appointments. Clients love the convenience, and I save so much time!",
  },
  {
    name: "Junaid Ahmad",
    role: "Shop Owner",
    image: "/images/profile.png",
    text: "From listing to booking—flawless process. This platform is a game-changer for small barbershops.",
  },
  {
    name: "Megha Patel",
    role: "Stylist",
    image: "/images/profile.png",
    text: "I’ve seen a rise in bookings thanks to BarberX. The interface is sleek and clients love using it!",
  },
  {
    name: "Kalpesh Mankar",
    role: "Website User",
    image: "/images/profile.png",
    text: "Super easy to book appointments! The app is fast, user-friendly, and keeps everything organized. Highly recommend!",
  },
  {
    name: "Ritika Sharma",
    role: "Barber, Luxe Cuts",
    image: "/images/profile.png",
    text: "BarberX really simplified how I manage appointments. Clients love the convenience, and I save so much time!",
  },
  {
    name: "Junaid Ahmad",
    role: "Shop Owner",
    image: "/images/profile.png",
    text: "From listing to booking—flawless process. This platform is a game-changer for small barbershops.",
  },
  {
    name: "Megha Patel",
    role: "Stylist",
    image: "/images/profile.png",
    text: "I’ve seen a rise in bookings thanks to BarberX. The interface is sleek and clients love using it!",
  },
  {
    name: "Junaid Ahmad",
    role: "Shop Owner",
    image: "/images/profile.png",
    text: "From listing to booking—flawless process. This platform is a game-changer for small barbershops.",
  },
  {
    name: "Megha Patel",
    role: "Stylist",
    image: "/images/profile.png",
    text: "I’ve seen a rise in bookings thanks to BarberX. The interface is sleek and clients love using it!",
  },
];

const CustomerReviews = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const cardWidth = container.querySelector('.testimonial-card')?.offsetWidth || 160;
    const scrollAmount = cardWidth + 16; // gap between cards

    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative max-w-[90vw] min-w-[400px] h-[210px] md:h-[460px] mb-[25%] md:mb-[12%] bg-white py-[20px] md:py-[90px] px-4 md:px-[84px] overflow-hidden mx-auto">
      {/* Background Blurs */}
      <div className="absolute top-[50px] left-1/2 transform -translate-x-1/2 w-full max-w-[80vw] h-[210px] md:h-[420px] z-0 pointer-events-none">
        <div
          className="absolute w-[198px] md:w-[498px] h-[174px] md:h-[474px] top-[-13px] left-[120px] md:left-[420px] blur-[58px] md:blur-[158px]"
          style={{ background: 'linear-gradient(90deg, #BB23DA 40.66%, #FFFFFF 100%)' }}
        />
        <div
          className="absolute w-[198px] md:w-[498px] h-[174px] md:h-[474px] top-[225px] left-[28px] md:left-[28px] blur-[58px] md:blur-[150px]"
          style={{ background: 'linear-gradient(273.62deg, #9747FF 20.36%, #FFFFFF 59.48%)' }}
        />
        <div
          className="absolute w-[298px] md:w-[498px] h-[274px] md:h-[474px] top-[-86px] left-[-44px] md:left-[-44px] blur-[58px] md:blur-[150px]"
          style={{ background: 'linear-gradient(284.71deg, #AD5389 32.62%, #FFFFFF 51.53%)' }}
        />
      </div>

      <div className="overflow-y-hidden mx-auto px-4">
        <div
          ref={scrollRef}
          className="flex h-[200px] md:h-[460px] overflow-x-auto snap-x snap-mandatory gap-4 scroll-smooth px-4 py-4 scrollbar-hide my-auto"
          style={{
            WebkitOverflowScrolling: 'touch',
            scrollBehavior: 'smooth',
            willChange: 'transform',
          }}
        >
          {testimonials.map((t, index) => (
            <div
              key={index}
               className="testimonial-card snap-start flex-shrink-0 w-[160px] h-[140px] md:w-[330px] md:h-[260px] bg-white shadow-md p-3 md:p-6 relative"
            >
              {/* Star rating */}
              <div className="flex space-x-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-[#FFC64A] w-3 md:w-[25px] h-3 md:h-[25px] fill-[#FFC64A]" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-[10px] md:text-[16px] text-[#555] leading-[12px] md:leading-[22px] mb-4 mt-2 md:mt-5 line-clamp-4">
                “{t.text}”
              </p>

              {/* Avatar & Name */}
              <div className="absolute bottom-2 md:bottom-5 left-2.5 md:left-5 flex items-center">
                <div className="w-[24px] md:w-[46] h-[24px] md:h-[48px] rounded-full overflow-hidden mr-4 bg-gray-300">
                  <Image src={t.image} alt={t.name} width={48} height={48} className="w-[24px] md:w-[46] h-[24px] md:h-[48px]" />
                </div>
                <div>
                  <h4 className="text-[12px] md:text-[16px] font-bold text-[#353535] leading-[14px] md:leading-[18px]">{t.name}</h4>
                  <p className="text-[10px] md:text-[14px] text-[#777]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
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
      </div>
    </section>
  );
};

export default CustomerReviews;
