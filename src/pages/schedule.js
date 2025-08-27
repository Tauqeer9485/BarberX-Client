import React from 'react'
import NavBar from '@/components/navbar/NavBar'
import Schedule from '@/components/schedule/Schedule'
import Footer from '@/components/footer/Footer'

import { useAuthGuard } from "@/hooks/useAuthGuard";

export default function schedule() {
  const { user, loading } = useAuthGuard({
    allowGuests: false,
    blockRoles: ["owner"],
    redirectIfRoleBlocked: "/admin_panel"
  });

  if (loading) return <p>Loading...</p>;
  if (!user) return null;

  return (
    <div className="w-full mx-auto bg-gray-100 font-poppins">
      <NavBar />
      <Schedule/>
      <Footer />
    </div>
  )
}
