import React from "react";

const StatCard = ({ number, label }) => {
  return (
    <div className="w-[25.8vw] h-[23vw] md:w-[12.8vw] md:h-[13vw] bg-white shadow-[0_0_5px_2px_rgba(0,0,0,0.15)] rounded-[0.5vw] flex flex-col items-center justify-center">
      {/* Number */}
      <h2 className="text-[#353535] font-poppins font-semibold text-[8vw] md:text-[4.5vw] leading-[8vw] md:leading-[5vw]">
        {number}
      </h2>
      {/* Label */}
      <p className="w-[20vw] md:w-[9vw] text-[#353535] font-poppins font-semibold text-[2.8vw] md:text-[1.1vw] text-center leading-[3vw] md:leading-[1.5vw] break-words mt-[0.8vw]">
        {label}
      </p>
    </div>
  );
};

const AppointmentStats = () => {
  const stats = [
    { number: "04", label: "Completed Appointments" },
    { number: "08", label: "Remaining Appointments" },
    { number: "02", label: "Missed Appointments" },
    { number: "03", label: "Present Barbers" },
    { number: "05", label: "Total Barbers" },
  ];
    
  return (
    <div className="w-[90vw] mx-auto overflow-auto scrollbar-hide">
      <div className="relative w-[150vw] md:w-auto mx-[1.1vw] my-[5vw] md:mb-[5vw] md:mt-[1vw]">
        <div className="flex flex-row md:flex-wrap justify-between gap-[6vw] md:gap-0">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppointmentStats;
