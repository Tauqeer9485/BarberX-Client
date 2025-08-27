import React from 'react'
import NavBar from '@/components/navbar/NavBar';
import Owner_Profile from '@/components/owner_profile/Owner_Profile'
import Footer from '@/components/footer/Footer'

import { useAuthGuard } from "@/hooks/useAuthGuard";

export default function owner_profile() {
  const { user, loading } = useAuthGuard({
    allowGuests: false,
    blockRoles: ["customer"],
    redirectIfRoleBlocked: "/"
  });

  if (loading) return <p>Loading...</p>;
  if (!user) return null;

  return (
    <div className="w-full mx-auto bg-white text-[#353535] font-poppins">
      <NavBar/>
      <Owner_Profile/>
      <Footer />
    </div>
  )
}
