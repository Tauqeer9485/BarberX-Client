import React from 'react'
import NavBar from '@/components/navbar/NavBar'
import Hero from '@/components/hero/Hero_S'
import Salon_service from '@/components/salons_services_page/salon_services'
import Footer from '@/components/footer/Footer'

import { useAuthGuard } from "@/hooks/useAuthGuard";

export default function salon_services() {
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
      <Salon_service />
      <Footer/>
    </div>
  )
}
