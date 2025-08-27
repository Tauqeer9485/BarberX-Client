import Image from 'next/image';``
import { useState } from 'react';

export default function ProfilePage()
 { 
    
return (
  <div className="bg-gray-900 text-white min-h-screen">
    {/* Banner */}
    <div className="relative">
      <Image
        src="/banner.jpg"
        alt="Salon Banner"
        width={1920}
        height={400}
        className="w-full h-64 object-cover"
      />
      {/* Avatar */}
      <div className="absolute inset-x-0 -bottom-12 flex flex-col items-center">
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white">
          <Image
            src="/user.jpg"
            alt="User Avatar"
            width={96}
            height={96}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>

    {/* White Background with Name and Form */}
    <section className="bg-white text-black pt-20 pb-[150px] md:pb-[160px] lg:pb-[20vw] px-4">
      <div className="flex flex-col items-center mb-6">
        <p className="text-lg font-poppins">Roshan Kale</p>
      </div>

      <div className="w-full max-w-screen-md mx-auto relative lg:left-[-200px] px-4">
        <h2 className="text-xl font-poppins mb-6">Edit Profile</h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-poppins mb-1">Name</label>
            <input
              type="text"
              className="w-full lg:w-[1100px] border px-4 py-2 rounded bg-gray-50 border border-gray-300"
            />
          </div>

          <div>
            <label className="block text-sm font-poppins mb-1">Date of Birth</label>
            <input
              type="date"
              className="w-full lg:w-[1100px] border px-4 py-2 rounded  bg-gray-50 border border-gray-300"
            />
          </div>

          <div>
            <label className="block text-sm font-poppins mb-1">Email</label>
            <input
              type="email"
              className="w-full lg:w-[1100px] border px-4 py-2 rounded  bg-gray-50 border border-gray-300"
            />
          </div>

          <div>
            <label className="block text-sm font-poppins mb-1">Phone Number</label>
            <div className="w-full lg:w-[1100px]">
              <div className="flex flex-col sm:flex-row gap-2">
                <span className="px-4 py-2 border rounded bg-gray-100 text-center sm:w-auto w-full">
                  +91
                </span>
                <input
                  type="tel"
                  className="border px-4 py-2 rounded flex-1 w-full  bg-gray-50 border border-gray-300"
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[600px] p-4 px-0 ml-0 lg:ml-[225px]">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                className="border px-4 py-4 rounded flex-1 w-full  bg-gray-50 border border-gray-300"
                placeholder=""
              />
              <button
                type="button"
                className="bg-[#BB23DA] hover:bg-[#a01fc0] text-white px-6 py-2 rounded font-poppins w-full sm:w-auto transition duration-200"

              >
                Refer your friends
              </button>
            </div>
          </div>

        </form>
      </div>

    </section>
  </div>
)};