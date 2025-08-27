import React from 'react'
import NavBar from '@/components/navbar/NavBar'
import Hero from '@/components/hero/Hero_SS'
import SalonListSection from '@/components/salons_page/SalonsList/SalonListSection'
import Footer from '@/components/footer/Footer'

import { useAuthGuard } from "@/hooks/useAuthGuard";

export default function salons() {
  const { user, loading } = useAuthGuard({
    allowGuests: true,
    blockRoles: ["owner"],
    redirectIfRoleBlocked: "/admin_panel"
  });

  if (loading) return <p>Loading...</p>;

  return (
    <div className="w-full mx-auto bg-white text-[#353535] font-poppins">
      <NavBar />
      <Hero image="/images/f5aded3ee7cb841a2a0a5b5d3b398c97573e65a6.png" />
      <SalonListSection/>
      <Footer />
    </div>
  )
}
