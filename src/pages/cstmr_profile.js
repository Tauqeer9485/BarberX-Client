import React from 'react'
import NavBar from '@/components/navbar/NavBar';
import Customer_Profile from '@/components/customer_profile/Customer_Profile'
import Footer from '@/components/footer/Footer'

import { useAuthGuard } from "@/hooks/useAuthGuard";

export default function customer_profile() {
  const { user, loading } = useAuthGuard({
    allowGuests: false,
    blockRoles: ["owner"],
    redirectIfRoleBlocked: "/admin_panel"
  });

  if (loading) return <p>Loading...</p>;
  if (!user) return null;

  return (
    <div className="w-full mx-auto bg-white text-[#353535] font-poppins">
      <NavBar/>
      <Customer_Profile/>
      <Footer />
    </div>
  )
}
