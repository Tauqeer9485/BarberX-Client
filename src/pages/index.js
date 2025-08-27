import React from "react";
import NavBar from "@/components/navbar/NavBar";
import Hero from "@/components/hero/Hero_Home";
import Info from "@/components/home_page/info/Info";
import PopularServices from "@/components/home_page/popularservices/PopularServices";
import TopServices from "@/components/home_page/topservices/TopServices";
import About from "@/components/home_page/about/About";
import CustomerReviews from "@/components/home_page/customerreviews/CustomerReviews";
import Footer from "@/components/footer/Footer";

import { useAuthGuard } from "@/hooks/useAuthGuard";

function HomePage() {
  const { user, loading } = useAuthGuard({
    allowGuests: true,
    blockRoles: ["owner"],
    redirectIfRoleBlocked: "/admin_panel"
  });

  if (loading) return <p>Loading...</p>;


  return (
    <div className="w-full mx-auto bg-white text-[#353535] font-poppins">
      <NavBar />
      <Hero />
      <Info />
      <PopularServices />
      <TopServices />
      <About />
      <CustomerReviews />
      <Footer />
    </div>
  );
}

export default HomePage;




// import React from 'react'
// import NavBar from '@/components/navbar/NavBar'
// import Hero from '@/components/hero/Hero_Home'
// import Info from '@/components/home_page/info/Info'
// import PopularServices from '@/components/home_page/popularservices/PopularServices'
// import TopServices from '@/components/home_page/topservices/TopServices'
// import About from '@/components/home_page/about/About'
// import CustomerReviews from '@/components/home_page/customerreviews/CustomerReviews'
// import Footer from '@/components/footer/Footer'

// export default function index() {
//   return (
//     <div className="w-full mx-auto bg-white text-[#353535] font-poppins">
//       <NavBar />
//       <Hero />
//       <Info />
//       <PopularServices />
//       <TopServices />
//       <About />
//       <CustomerReviews />
//       <Footer />
//     </div>
//   )
// }
