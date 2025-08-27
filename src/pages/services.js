import React from 'react'
import NavBar from '@/components/navbar/NavBar'
import Hero from '@/components/hero/Hero_SS'
import SalonListSection from '@/components/services_page/ProductsGrid/ProductsGrid'
import Footer from '@/components/footer/Footer'

import { useAuthGuard } from "@/hooks/useAuthGuard";

export default function services() {
  const { user, loading } = useAuthGuard({
    allowGuests: true,
    blockRoles: ["owner"],
    redirectIfRoleBlocked: "/admin_panel"
  });

  if (loading) return <p>Loading...</p>;

  return (
    <div className="w-full mx-auto bg-white text-[#353535] font-poppins">
      <NavBar />
      <Hero image="/images/h2.png" />
      <SalonListSection/>
      <Footer />
    </div>
  )
}

