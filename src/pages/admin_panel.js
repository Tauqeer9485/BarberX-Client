import React from 'react'
import NavBar from '@/components/navbar/NavBar'
import Requests from '@/components/admin_panel/Requests'
import AppointmentStats from '@/components/admin_panel/AppointmentStats'
import RecentFlights from '@/components/admin_panel/RecentFlights'
import Footer from '@/components/footer/Footer'

import { useAuthGuard } from "@/hooks/useAuthGuard";

export default function admin_panel() {
  const { user, loading } = useAuthGuard({
    allowGuests: false,
    blockRoles: ["customer"],
    redirectIfRoleBlocked: "/"
  });

  if (loading) return <p>Loading...</p>;
  if (!user) return null;

  return (
    <div className="w-full mx-auto text-[#353535] font-poppins bg-gray-50">
      <NavBar />
      <Requests/>
      <AppointmentStats />
      <RecentFlights/>
      <Footer/>
    </div>
  )
}
