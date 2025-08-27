import React from 'react'

import NavBar from '@/components/navbar/NavBar'
import SalonForm from '@/components/getListed/GetListed'
import Footer from '@/components/footer/Footer'

export default function get_listed() {
  return (
    <div className="w-full mx-auto bg-gray-100 text-[#353535] font-poppins">
      <NavBar/>
      <SalonForm/>
      <Footer />
    </div>
  )
}
