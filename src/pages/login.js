import React from 'react'
import SignupModal from  '@/components/signup_login/Signup'
 

export default function index() {
  return (
    <div className="w-full mx-auto bg-gray-100 text-[#353535] font-poppins">
      <SignupModal isOpen={true}/>
       
    </div>
  )
}
