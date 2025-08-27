import React from "react";

const RequestCard = ({ title, name, time, date, badgeText }) => {
  return (
    <div className="w-[65vw] md:w-[27.5vw] flex-shrink-0 bg-white shadow-[0_0_5px_2px_rgba(0,0,0,0.15)] rounded-[1vw] md:rounded-[0.5vw] p-[2vw] md:p-[1vw] relative">
      {/* Title */}
      <h3 className="font-poppins font-bold text-[3.2vw] md:text-[1.2vw] text-[#383838]">
        {title}
      </h3>

      {/* Details */}
      <p className="font-poppins font-semibold text-[#929292] text-[2.6vw] md:text-[1.1vw] mt-[2.2vw] md:mt-[1vw]">Name : {name}</p>
      <p className="font-poppins font-semibold text-[#929292] text-[2.6vw] md:text-[1.1vw] mt-[2.4vw] md:mt-[1vw]">Time : {time}
        <span className="font-poppins font-semibold text-[#929292] text-[2.6vw] md:text-[1.1vw] absolute right-[2.4vw] md:right-[1vw] ">Date : {date}</span> 
      </p>

      {/* Badge */}
      <div className="absolute top-0 right-0 bg-gradient-to-r from-[#AD5389] to-[#BB23DA] rounded-tr-[1vw] rounded-bl-[1vw] md:rounded-tr-[0.5vw] md:rounded-bl-[0.5vw] text-white px-[3vw] py-[0.6vw] md:px-[1vw] md:py-[0.4vw] font-semibold text-[2.88vw] md:text-[1.18vw]">
        {badgeText}
      </div>

      {/* Action Buttons */}
      <div className="flex  gap-[3vw] ml-[0.6vw] md:gap-[1vw] mt-[1.5vw] md:ml-[0.4vw]">
        <button className="px-[9.6vw] md:px-[4.4vw] py-[0.54vw] left-1 bg-gradient-to-l from-[#BB23DA] to-[#AD5389] text-white font-bold text-[2.97vw] md:text-[0.97vw] rounded">
          Accept
        </button>
        <button className="px-[9.6vw] md:px-[4.4vw] py-[0.54vw] right-1 bg-white border border-[#BB23DA] text-[#BB23DA] font-bold text-[2.97vw] md:text-[0.97vw] rounded">
          Reject
        </button>
      </div>
    </div>
  );
};

const Requests = () => {
  const requestData = [
    {
      title: "Request For Haircut",
      name: "Roshan Kale",
      time: "10:00 AM - 11:00 AM",
      date: "07/01/2025",
      badgeText: "6 min ago",
    },
    {
      title: "Request For Haircut",
      name: "Roshan Kale",
      time: "10:00 AM - 11:00 AM",
      date: "07/01/2025",
      badgeText: "10 min ago",
    },
    {
      title: "Request For Haircut",
      name: "Roshan Kale",
      time: "10:00 AM - 11:00 AM",
      date: "07/01/2025",
      badgeText: "15 min ago",
    },
    {
      title: "Request For Haircut",
      name: "Roshan Kale",
      time: "10:00 AM - 11:00 AM",
      date: "07/01/2025",
      badgeText: "6 min ago",
    },
    {
      title: "Request For Haircut",
      name: "Roshan Kale",
      time: "10:00 AM - 11:00 AM",
      date: "07/01/2025",
      badgeText: "10 min ago",
    },
    {
      title: "Request For Haircut",
      name: "Roshan Kale",
      time: "10:00 AM - 11:00 AM",
      date: "07/01/2025",
      badgeText: "15 min ago",
    },
  ];

  return (
    <div className="relative w-[100vw] mx-auto py-[4vw] px-[4.5vw] bg-gray-50">
      {/* Title */}
      <h2 className="font-poppins font-bold text-[3.82vw] leading-[10.5vw] md:text-[1.82vw] md:leading-[3.5vw] text-[#383838] mb-[4vw] md:mb-[2vw]">
        Requests
      </h2>

      {/* Cards */}
      <div className="overflow-y-hidden scrollbar-hide p-[1vw] md:p-[0.5vw]">
        <div className="flex flex-row justify-between gap-[5vw] md:gap-[3.56vw]">
            {requestData.map((req, index) => (
            <RequestCard key={index} {...req} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Requests;

// import React from "react";

// const RequestCard = ({ title, name, time, date, badgeText }) => {
//   return (
//     <div className="w-[65vw] md:w-[27.5vw] flex-shrink-0 bg-white shadow-[0_0_5px_2px_rgba(0,0,0,0.15)] rounded-[1vw] p-[2vw] relative">
//       {/* Title */}
//       <h3 className="font-poppins font-bold text-[3.2vw] text-[#383838]">
//         {title}
//       </h3>

//       {/* Details */}
//       <p className="font-poppins font-semibold text-[#929292] text-[2.6vw] mt-[2.2vw]">Name : {name}</p>
//       <p className="font-poppins font-semibold text-[#929292] text-[2.6vw] mt-[2.4vw]">Time : {time}
//         <span className="font-poppins font-semibold text-[#929292] text-[2.6vw] absolute right-[2.4vw] ">Date : {date}</span> 
//       </p>

//       {/* Badge */}
//       <div className="absolute top-0 right-0 bg-gradient-to-r from-[#AD5389] to-[#BB23DA] rounded-tr-[1vw] rounded-bl-[1vw] text-white px-[3vw] py-[0.6vw] font-semibold text-[2.88vw]">
//         {badgeText}
//       </div>

//       {/* Action Buttons */}
//       <div className="flex gap-[3vw] mt-[1.5vw] ml-[0.6vw]">
//         <button className="px-[9.6vw] py-[0.54vw] left-1 bg-gradient-to-l from-[#BB23DA] to-[#AD5389] text-white font-bold text-[2.97vw] rounded">
//           Accept
//         </button>
//         <button className="px-[9.6vw] py-[0.54vw] right-1 bg-white border border-[#BB23DA] text-[#BB23DA] font-bold text-[2.97vw] rounded">
//           Reject
//         </button>
//       </div>
//     </div>
//   );
// };

// const Requests = () => {
//   const requestData = [
//     {
//       title: "Request For Haircut",
//       name: "Roshan Kale",
//       time: "10:00 AM - 11:00 AM",
//       date: "07/01/2025",
//       badgeText: "6 min ago",
//     },
//     {
//       title: "Request For Haircut",
//       name: "Roshan Kale",
//       time: "10:00 AM - 11:00 AM",
//       date: "07/01/2025",
//       badgeText: "10 min ago",
//     },
//     {
//       title: "Request For Haircut",
//       name: "Roshan Kale",
//       time: "10:00 AM - 11:00 AM",
//       date: "07/01/2025",
//       badgeText: "15 min ago",
//     },
//     {
//       title: "Request For Haircut",
//       name: "Roshan Kale",
//       time: "10:00 AM - 11:00 AM",
//       date: "07/01/2025",
//       badgeText: "6 min ago",
//     },
//     {
//       title: "Request For Haircut",
//       name: "Roshan Kale",
//       time: "10:00 AM - 11:00 AM",
//       date: "07/01/2025",
//       badgeText: "10 min ago",
//     },
//     {
//       title: "Request For Haircut",
//       name: "Roshan Kale",
//       time: "10:00 AM - 11:00 AM",
//       date: "07/01/2025",
//       badgeText: "15 min ago",
//     },
//   ];

//   return (
//     <div className="relative w-[100vw] mx-auto py-[4vw] px-[6vw] bg-[#F7F7F7]">
//       {/* Title */}
//       <h2 className="font-poppins font-bold text-[3.82vw] leading-[6.5vw] text-[#383838] mb-[2vw]">
//         Requests
//       </h2>

//       {/* Cards */}
//       <div className="overflow-y-hidden scrollbar-hide p-[0.5vw]">
//         <div className="flex flex-row justify-between gap-[2vw]">
//             {requestData.map((req, index) => (
//             <RequestCard key={index} {...req} />
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Requests;
