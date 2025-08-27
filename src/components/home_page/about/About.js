'use client';
import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <section id="about" className="w-full px-4 sm:px-6 md:px-10 lg:px-[94px] pt-[60px] md:pt-[80px] lg:pt-[100px] pb-[20px] md:pb-[60px] bg-white">
          {/* <section className="relative bg-white py-12 px-4 md:px-[94px] w-full max-w-[90vw] mx-auto"> */}

      <div className="max-w-[100vw] mx-auto">

        {/* Section Title */}
        <h2 className="text-center text-[#353535] font-semibold text-[24px] md:text-[48px] leading-tight mb-10 md:mb-14">
          About <span className="text-[#BB23DA]">BarberX</span>
        </h2>

        {/* Text + Image Row */}
        <div className="flex flex-row items-center justify-center lg:items-start gap-10 lg:gap-20">
          
          {/* Left: Text Content */}
          <div className="w-full max-w-[35vw] lg:max-w-[35vw]">
            <h3 className="text-[28px] sm:text-[34px] md:text-[38px] font-semibold text-[#353535] leading-[1.2] mb-4">
              BarberX
            </h3>

            <p className="text-[10px] md:text-[22px] lg:text-[30px] text-[#6D6D6D] leading-[14px] md:leading-[28px] lg:leading-[32px] mb-4 md:mb-0 lg:mb-10">
              This user-friendly website connects users with salons and barbers,
              making it easy to find, browse, and book appointments.
            </p>

            {/* Stats Grid */}
            <div className="relative grid grid-cols-2 gap-y-4 gap-x-4 border-t border-b border-[#ffffff] py-2 md:py-2">
              {/* Decorative Lines (only visible on large screens) */}
              <div className="hidden lg:block absolute top-0 left-0 w-[49%] border-[1px] border-[#BB23DA]" />
              <div className="hidden lg:block absolute top-0 right-0 w-[49%] border-[1px] border-[#BB23DA]" />
              <div className="hidden lg:block absolute bottom-0 left-0 w-[49%] border-[1px] border-[#BB23DA]" />
              <div className="hidden lg:block absolute bottom-0 right-0 w-[49%] border-[1px] border-[#BB23DA]" />

              {/* Card 1 */}
              <div>
                <div className="text-[18px] md:text-[26px] lg:text-[34px] font-bold text-[#353535] leading-tight md:leading-[60px]">500+ Users</div>
                <div className="text-[10px] md:text-[18px] text-[#6D6D6D] mt-1 md:mt-0">Since 2024</div>
              </div>

              {/* Card 2 */}
              <div>
                <div className="text-[18px] md:text-[26px] lg:text-[34px] font-bold text-[#353535] leading-tight md:leading-[57px]">3.5 / 5 Rating</div>
                <div className="text-[10px] md:text-[18px] text-[#6D6D6D] mt-1 md:mt-0">365 Reviews</div>
              </div>

              {/* Card 3 */}
              <div>
                <div className="text-[18px] md:text-[26px] lg:text-[34px] font-bold text-[#353535] leading-tight md:leading-[60px]">236 +</div>
                <div className="text-[10px] md:text-[18px] text-[#6D6D6D] mt-1 md:mt-0">Appointment Booked</div>
              </div>

              {/* Card 4 */}
              <div>
                <div className="text-[18px] md:text-[28px] lg:text-[34px] font-bold text-[#353535] leading-tight md:leading-[57px]">99%</div>
                <div className="text-[10px] md:text-[18px] text-[#6D6D6D] mt-1 md:mt-0">Happy Customers</div>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="w-full max-w-[40vw] h-[300px] md:h-[400px] lg:h-[500px] relative rounded-[16px] overflow-hidden">
            <Image
              src="/images/Image1.png"
              alt="About BarberX"
              fill
              className="object-cover rounded-[16px]"
              priority
            />
          </div>
        </div>

        {/* Testimonials Heading */}
        <div className="text-center mt-[120px] lg:mt-[100px]">
          <p className="text-[#353535] text-[10px] md:text-[14px] mb-0 lg:mb-4">
            240 people have said how good BarberX
          </p>
          <h2 className="text-center text-[#353535] font-semibold text-[24px] md:text-[48px] leading-tight mb-10 md:mb-14">
            Our happy clients <span className="text-[#BB23DA]">says about us</span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default About;
