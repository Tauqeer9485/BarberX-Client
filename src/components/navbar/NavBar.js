'use client';
import Image from 'next/image';
import { Menu, X, Search} from 'lucide-react';
import { useState, useRef, useEffect, FaSearch} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LogOut, User } from "lucide-react";
import { useRouter } from 'next/router';
import LoginModal from '../signup_login/Login';
import ProfileDropdown from "./ProfileDropdown";
import { clearSession } from '@/lib/session';
import { useAuth } from "@/context/AuthContext";

const tabs = ['Home', 'Salons', 'Services', ''];
const routes = {
  Home: '/',
  Salons: '/salons',
  Services: '/services',
  S_Services: '/s_services',
  Get_Listed: '/get_listed',
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const [showLogin, setShowLogin] = useState(false);
  const [activeTab, setActiveTab] = useState('Services');
  
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { user } = useAuth();
  
  // Close dropdown when clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  
  // Sync active tab on initial load based on current route
  useEffect(() => {
    const currentPath = router.pathname;
    const matchedTab = Object.entries(routes).find(([, path]) => path === currentPath);
    if (matchedTab) setActiveTab(matchedTab[0]);
  }, [router.pathname]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    router.push(routes[tab]);
  };

  return (
    <nav className="w-full bg-white shadow-md px-4 sm:px-6 lg:px-[3vw] py-4 sm:py-6 flex justify-between relative z-50 sticky top-0">
      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
      
      {/* Left Section: Hamburger + Logo */}
      <div className="flex items-center">
        {/* Logo */}
        <Image
          src="/images/WhatsApp_Image_2025-05-03_at_19.05.14_90172077-removebg-preview (3).png"
          alt="BarberX Logo"
          width={170}
          height={72}
          className="object-contain"
        />
      </div> 

      {(!user || user.role !== "owner") && (
        <>
        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex gap-4 lg:gap-8 text-base xl:text-[20px] font-normal md:ml-10 lg:ml-20 mt-[1vw]">
          <div className="relative w-[15vw] h-[2.7vw] top-[1vw]">
            {/* Tab Buttons */}
            {tabs.map((tab, idx) => {
              const leftPercent = idx === 0 ? '1%' : idx === 1 ? '33%' : idx === 2 ? '70%' : '100%';
              const isActive = activeTab === tab;

              return (
                <button
                  key={tab}
                  className={`absolute text-[1.28888vw] leading-[1.5vw] font-poppins transition-all duration-500 ${
                    isActive ? 'text-[#BB23DA]' : 'text-[#353535]'
                  }`}
                  style={{ left: leftPercent }}
                  onClick={() => handleTabClick(tab)}
                >
                  {tab}
                </button>
              );
            })}

            {/* Background Indicator */}
            <div
              className="absolute top-[1.5vw] h-[2px] w-[5.63vw] rounded-[2vw] bg-[#BB23DA] transition-all duration-500 ease-in-out"
              style={{
                width:
                  activeTab === 'Home'
                    ? '25%'
                    : activeTab === 'Salons'
                      ? '29%'
                      : activeTab === 'Services'
                        ? '5.6333vw'
                        : '0vw', 
                left:
                  activeTab === 'Home'
                    ? '0%'
                    : activeTab === 'Salons'
                      ? '32%'
                      : activeTab === 'Services'
                        ? '68%'
                        : '0%', 
              }}
            />
          </div>
        </div>
        </>
      )}
      
      {/* Right Side - Desktop */}
      <div className="hidden md:flex items-center gap-6 ml-auto">
        {(!user || user.role !== "owner") && (
          <>
            {/* Search Bar */}
            <div className="relative hidden md:flex md:w-[20vw] ">
              <input
                type="text"
                placeholder="Search For Salons"
                className="w-full md:max-w-[15vw] lg:max-w-[350px] h-[45px] pl-10 pr-4 border border-[#B4B4B4] rounded-[8px] text-[16px] text-[#353535] placeholder-[#A0A0A0] focus:outline-none"
              />
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-xl text-[#A0A0A0]">
                {/*🔍
                <FaSearch className = "text-gray-500 mr-2"/>*/}
                <Search className="w-5 h-6 mr-2"/>
              </div>
            </div>
          </>
        )}
        
        {!user && (
          <>
            {/* Get Listed Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => router.push('/get_listed')}
              className="hidden md:flex items-center justify-center h-[45px]  px-6 bg-gradient-to-l from-[#BB23DA] to-[#AD5389] text-white rounded-[8px] font-bold text-[14px] hover:opacity-90 transition"
            >
              Get Listed
            </motion.button>

            <div className="p-[1px]  rounded-[9px] bg-gradient-to-l from-[#BB23DA] to-[#AD5389] inline-block">
              <motion.button
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={() => setShowLogin(!showLogin)}
                // onClick={() => router.push('/login')}
                className="hidden md:flex items-center justify-center h-[43px]  px-6  bg-white text-purple-600 font-bold rounded-[8px] font-bold text-[14px] hover:opacity-90 transition"
              >
                Login
              </motion.button>
            </div>
          </>
        )}

        {!user &&(
          <>
            {/* Profile Icon 
            <Image
              src="/images/profile.png"
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />*/}
            
            <div className="rounded-full border border-gray-500 border-2 pt-1 px-0.5" >
              <User className="w-[30] h-[30] text-gray-500" />
            </div>
          </>
        )}
        
        {user &&(
          <>
            <ProfileDropdown
              name="Xyz"
              email={ user?.email }
              avatar="https://i.pravatar.cc/150?img=32"
              onProfileClick={() => {
                if (user?.role === "owner") {
                  router.push("/ownr_profile");
                } else if (user?.role === "customer") {
                  router.push("/cstmr_profile");
                }
              }}
              onLogoutClick={() => { 
                clearSession();
                router.push("/");
                router.reload();
              }}
            />  
          </>
        )}
      </div>

      {/* Mobile Drawer Navigation */}
      <div className={`fixed inset-0 bg-black bg-opacity-40 z-40 transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`} onClick={() => setIsOpen(false)} />
        <div className={`fixed top-0 left-0 w-full h-full bg-white p-6 flex flex-col gap-4 text-[18px] mx-auto transition-all duration-300 z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="lg:hidden block md:hidden block absolute w-full h-full right-0 top-[100vw]">
            <div className="lg:hidden block md:hidden block absolute w-[30%] h-[300.01px] left-0 top-[50px] bg-[rgba(187,35,218,0.7)] blur-[200px]" />
            <div className="lg:hidden block md:hidden block absolute w-[30%] h-[307.19px] left-[50px] top-[-39px] bg-[rgba(173,83,137,0.7)] blur-[200px]" />
          </div>
        
          <div className="lg:hidden block md:hidden block absolute right-4">
            <div className="block lg:hidden drop-shadow-lg" onClick={() => setIsOpen(false)}>
              <X size={40} />
            </div>
          </div>

          <div className="h-[70%] flex flex-col justify-center items-center gap-4">
              <Image
                src="/images/BarberX-new.jpg"
                alt="BarberX Logo"
                width={200}
                height={102}
                className="object-contain"
              />
          
          <a href="/" className="text-[#353535] font-bold text-[150%] transition hover:scale-105 hover:text-[#BB23DA]">Home</a>
          <a href="/salons" className="text-[#353535] font-bold text-[150%] transition hover:scale-105 hover:text-[#BB23DA]">Salons</a>
          <a href="/services" className="text-[#353535] font-bold text-[150%] transition hover:scale-105 hover:text-[#BB23DA]">Services</a>

          {/* Get Listed Button (Mobile) */}
          <motion.button
            whileTap={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => {
              setIsOpen(false);
              router.push('/getListed');
            }}
            className=" md:flex items-center justify-center h-[45px]  px-6 bg-gradient-to-l from-[#BB23DA] to-[#AD5389] text-white rounded-[8px] font-bold text-[14px] hover:opacity-90 transition"
          >
            Get Listed
          </motion.button>
        </div>
      </div>
      
      {!user &&(
        <>          
          <div className="lg:hidden block rounded-full border border-gray-500 border-2 my-auto ml-[30vw] pt-1 px-0.5" >
            <User className="w-[30] h-[30] text-gray-500" />
          </div>
        </>
      )}
        
      {user &&(
        <>
          <div className="lg:hidden block">
            <ProfileDropdown
              name="Xyz"
              email={ user?.email }
              avatar="https://i.pravatar.cc/150?img=32"
              onProfileClick={() => {
                if (user?.role === "owner") {
                  router.push("/ownr_profile");
                } else if (user?.role === "customer") {
                  router.push("/cstmr_profile");
                }
              }}
              onLogoutClick={() => { 
                clearSession(); 
                router.push("/");
                router.reload();
              }}
            />  
          </div>
        </>
      )}

      {/* Hamburger Menu Icon - Left */}
      <div className="lg:hidden block md:hidden my-auto block" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </div>
    </nav>
  );
};

export default NavBar;



// 'use client';
// import Image from 'next/image';
// import { Menu, X } from 'lucide-react';
// import { motion } from "framer-motion";
// import SignupModal from '../signup_login/Signup';
// import LoginModal from '../signup_login/Login';
// import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';

// const tabs = ['Home', 'Salons', 'Services'];
// const routes = {
//   Home: '/',
//   //Salons: '/admin_panel',
//   Salons: '/salons',
//   Services: '/services',
// };

// const NavBar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showSignup, setShowSignup] = useState(false);
//   const [authMode, setAuthMode] = useState(null); // 'signup' | 'login'

//  const router = useRouter();
//   const [activeTab, setActiveTab] = useState('Services');

//   // Sync active tab on initial load based on current route
//   useEffect(() => {
//     const currentPath = router.pathname;
//     const matchedTab = Object.entries(routes).find(([, path]) => path === currentPath);
//     if (matchedTab) setActiveTab(matchedTab[0]);
//   }, [router.pathname]);

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//     router.push(routes[tab]);
//   };

//   return (
//     <nav className="w-full bg-white shadow-md px-4 sm:px-6 lg:px-[94px] py-4 sm:py-6 flex items-center justify-between relative z-50 sticky top-0">

//       {/* Signup */} 
//       <SignupModal isOpen={showSignup} onClose={() => setShowSignup(false)} />
      
//       {/* Show modals based on state */}
//       {authMode === 'signup' && (
//         <SignupModal
//           isOpen={true}
//           onClose={() => setAuthMode(null)}
//           switchToLogin={() => setAuthMode('login')}
//         />
//       )}
//       {authMode === 'login' && (
//         <LoginModal
//           isOpen={true}
//           onClose={() => setAuthMode(null)}
//           switchToSignup={() => setAuthMode('signup')}
//         />
//       )}

//       {/* Left Section: Hamburger + Logo */}
//       <div className="flex items-center gap-4">
//         {/* Logo */}
//         <Image
//           src="/images/WhatsApp_Image_2025-05-03_at_19.05.14_90172077-removebg-preview (3).png"
//           alt="BarberX Logo"
//           width={170}
//           height={72}
//           className="object-contain"
//         />
//       </div> 

//       {/* Navigation Links - Desktop */}
//       <div className="hidden md:flex gap-4 lg:gap-8 text-base xl:text-[20px] font-normal md:ml-10 lg:ml-20">
//         <div className="relative w-[15vw] h-[2.7vw] top-[1vw]">

//           {/* Tab Buttons */}
//           {tabs.map((tab, idx) => {
//             const leftPercent = idx === 0 ? '0%' : idx === 1 ? '32%' : '68%';
//             const isActive = activeTab === tab;

//             return (
//               <button
//                 key={tab}
//                 className={`absolute text-[1.28888vw] leading-[1.5vw] font-poppins font-bold transition-all duration-500 ${
//                   isActive ? 'text-[#BB23DA]' : 'text-[#353535]'
//                 }`}
//                 style={{ left: leftPercent }}
//                 onClick={() => handleTabClick(tab)}
//               >
//                 {tab}
//               </button>
//             );
//           })}

//           {/* Background Indicator */}
//           <div
//             className="absolute top-[1.5vw] h-[2px] w-[5.63vw] rounded-[2vw] bg-[#BB23DA] transition-all duration-500 ease-in-out"
//             style={{
//               width:
//                 activeTab === 'Home'
//                   ? '25%'
//                   : activeTab === 'Salons'
//                   ? '29%'
//                   : '5.6333VW', 
//               left:
//                 activeTab === 'Home'
//                   ? '0%'
//                   : activeTab === 'Salons'
//                   ? '32%'
//                   : '68%',
//             }}
//           />
//         </div>
//         {/* <a href="/" className="text-[#353535] transition hover:scale-105 hover:text-[#BB23DA]">Home</a>
//         <a href="/salons" className="text-[#353535] transition hover:scale-105 hover:text-[#BB23DA]">Salons</a>
//         <a href="/services" className="text-[#353535] transition hover:scale-105 hover:text-[#BB23DA]">Services</a> */}
//       </div>

//       {/* Right Side - Desktop */}
//       <div className="hidden md:flex items-center gap-6 ml-auto">
        
//         {/* Search Bar */}
//         <div className="relative hidden md:flex">
//           <input
//             type="text"
//             placeholder="Search For Salons"
//             className="w-full md:max-w-[250px] lg:max-w-[350px] h-[45px] pl-10 pr-4 border border-[#B4B4B4] rounded-[8px] text-[16px] text-[#353535] placeholder-[#A0A0A0] focus:outline-none"
//           />
//           <div className="absolute left-3 top-1/2 -translate-y-1/2 text-xl text-[#A0A0A0]">
//             🔍
//           </div>
//         </div>

//         {/* Get Listed Button
//         <button 
//           onClick={() => setShowSignup(true)}
//           className="hidden md:flex items-center justify-center h-[45px]  px-6 bg-gradient-to-l from-[#BB23DA] to-[#AD5389] text-white rounded-[8px] font-bold text-[14px] hover:opacity-90 transition"
//         >
//         </button> */}

//         <motion.button
//           whileTap={{ scale: 0.95 }}
//           transition={{ type: "spring", stiffness: 300 }}
//           onClick={() => setAuthMode('signup')}
//           className="hidden md:flex items-center justify-center h-[45px]  px-6 bg-gradient-to-l from-[#BB23DA] to-[#AD5389] text-white rounded-[8px] font-bold text-[14px] hover:opacity-90 transition"
//         >
//           Get Listed
//         </motion.button>

//         {/* Profile Icon */}
//         <Image
//           src="/images/profile.png"
//           alt="Profile"
//           width={40}
//           height={40}
//           className="rounded-full object-cover"
//         />
//       </div>

//       {/* Mobile Drawer Navigation */}
//       <div className={`fixed inset-0 bg-black bg-opacity-40 z-40 transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`} onClick={() => setIsOpen(false)} />
//         <div className={`fixed top-0 left-0 w-full h-full bg-white p-6 flex flex-col gap-4 text-[18px] mx-auto transition-all duration-300 z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
//           <div className="lg:hidden block md:hidden block absolute w-full h-full right-0 top-[100vw]">
//             <div className="lg:hidden block md:hidden block absolute w-[30%] h-[300.01px] left-0 top-[50px] bg-[rgba(187,35,218,0.7)] blur-[200px]" />
//             <div className="lg:hidden block md:hidden block absolute w-[30%] h-[307.19px] left-[50px] top-[-39px] bg-[rgba(173,83,137,0.7)] blur-[200px]" />
//           </div>
        
//           <div className="lg:hidden block md:hidden block absolute right-4">
//             <div className="block lg:hidden drop-shadow-lg" onClick={() => setIsOpen(false)}>
//               <X size={40} />
//             </div>
//           </div>

//           <div className="h-[70%] flex flex-col justify-center items-center gap-4">
//               <Image
//                 src="/images/BarberX-new.jpg"
//                 alt="BarberX Logo"
//                 width={200}
//                 height={102}
//                 className="object-contain"
//               />
          
//           <a href="/" className="text-[#353535] font-bold text-[150%] transition hover:scale-105 hover:text-[#BB23DA]">Home</a>
//           <a href="/salons" className="text-[#353535] font-bold text-[150%] transition hover:scale-105 hover:text-[#BB23DA]">Salons</a>
//           <a href="/services" className="text-[#353535] font-bold text-[150%] transition hover:scale-105 hover:text-[#BB23DA]">Services</a>
//           {/* Get Listed Button
//           <button 
//             onClick={() => {
//               setShowSignup(true)
//             }}
//             className=" md:flex items-center justify-center h-[45px]  px-6 bg-gradient-to-l from-[#BB23DA] to-[#AD5389] text-white rounded-[8px] font-bold text-[14px] hover:opacity-90 transition"
//           >
//             Get Listed
//           </button> */}
//           <motion.button
//             whileTap={{ scale: 1 }}
//             transition={{ type: "spring", stiffness: 300 }}
//             onClick={() => {
//               setIsOpen(false);
//               setAuthMode('signup');
//             }}
//             className=" md:flex items-center justify-center h-[45px]  px-6 bg-gradient-to-l from-[#BB23DA] to-[#AD5389] text-white rounded-[8px] font-bold text-[14px] hover:opacity-90 transition"
//           >
//             Get Listed
//           </motion.button>
//         </div>
//       </div>


//       {/* Hamburger Menu Icon - Left */}
//       <div className="lg:hidden block md:hidden block" onClick={() => setIsOpen(!isOpen)}>
//         {isOpen ? <X size={30} /> : <Menu size={30} />}
//       </div>
//     </nav>
//   );
// };

// export default NavBar;
