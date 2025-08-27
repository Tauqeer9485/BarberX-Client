"use client";

import Image from 'next/image';
import { useState } from 'react';

function TagInput({ label, initialTags }) {
  const [tags, setTags] = useState(initialTags);
  const [inputValue, setInputValue] = useState('');

  const handleAddTag = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      e.preventDefault();
      setTags([...tags, inputValue.trim()]);
      setInputValue('');
    }
  };

  const handleRemoveTag = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-poppins mb-1">{label}</label>
      <div className="w-full lg:w-[1100px] border px-4 py-2 rounded bg-gray-50 border-gray-300 min-h-[50px] flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span key={index} className="bg-[#BB23DA] hover:bg-[#a01fc0] text-white px-4 py-1 rounded-full text-sm flex items-center gap-1">
            {tag}
            <button type="button" onClick={() => handleRemoveTag(index)} className="ml-1">
              X
            </button>
          </span>
        ))}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleAddTag}
          className="flex-1 min-w-[120px] bg-gray-50 border-none focus:outline-none"
          placeholder=""
        />
      </div>
    </div>
  );
}

export default function ProfilePage() {
  const [status, setStatus] = useState('Open');
  const [activeTab, setActiveTab] = useState('Edit Profile');

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
        {/* Profile Header */}
        <div className="absolute inset-x-0 -bottom-[70%] flex flex-col items-center ">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg ">
            <Image src="/user.jpg" alt="User" width={128} height={128} className="w-full h-full object-cover" />
          </div>
          <h2 className="text-xl font-poppins mt-4 text-black">Kalpesh Mankar</h2>
          <p className="text-black text-sm mt-1">Salon Owner</p>

          {/* Tabs */}
          <div className="flex mt-6 border-b border-gray-300">
            <button
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === 'Edit Profile' ? 'text-[#BB23DA] border-b-2 border-[#BB23DA] ' : 'text-black'
              }`}
              onClick={() => setActiveTab('Edit Profile')}
            >
              Edit Profile
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === 'Photos' ? 'text-[#BB23DA] border-b-2  border-[#BB23DA]' : 'text-black'
              }`}
              onClick={() => setActiveTab('Photos')}
            >
              Photos
            </button>
          </div>
        </div>
      </div>

      {/* White Background with Name and Form */}
      {activeTab === 'Edit Profile' && (
        <section className="bg-white text-black pt-40 pb-[150px] md:pb-[160px] lg:pb-[140px] px-4 ">
          <div className="w-full max-w-screen-md mx-auto relative lg:left-[-200px] px-4 ">
            <h2 className="text-xl font-poppins mb-4 mt-16">Edit Profile</h2>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-poppins mb-1">Salon Name</label>
                <input
                  type="text"
                  className="w-full lg:w-[1100px] border px-4 py-2 rounded bg-gray-50 border border-gray-300"
                />
              </div>

              <div>
                <label className="block text-sm font-poppins mb-1">Address</label>
                <input
                  type="text"
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

              <TagInput label="Barbers" initialTags={['Barber 1', 'Barber 2', 'Barber 3', 'Barber 4', 'Barber 5']} />
              <TagInput label="Timing" initialTags={['10:00 AM', '12:00 PM', '01:00 PM', '03:00 PM']} />
              <TagInput label="Services" initialTags={['Hair Cut', 'Beard Trim', 'Hair Curl', 'Hair Spa', 'Hair Straightening']} />

              <div>
                <label className="block text-sm font-poppins mb-1">About Salon</label>
                <div className="border p-4 bg-gray-50 text-gray-700 rounded-md text-sm">
                  A beauty salon is an establishment that offers a variety of cosmetic treatments and cosmetic services for men and women.

                  Beauty salons may offer a variety of services including professional hair cutting and styling, manicures and pedicures, and often cosmetics, makeup and makeovers.
                </div>
              </div>

              <div>
                <h2 className="text-lg font-poppins mb-2">Salon Status</h2>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="status"
                      value="Open"
                      checked={status === 'Open'}
                      onChange={() => setStatus('Open')}
                    />
                    <span>Open</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer ">
                    <input
                      type="radio"
                      name="status"
                      value="Close"
                      checked={status === 'Close'}
                      onChange={() => setStatus('Close')}
                      
                    />
                    <span>Close</span>
                  </label>
                </div>
              </div>

              
            </form>
          </div>
        </section>
      )}

      {/* Photos Section (Optional - Placeholder) */}
      {activeTab === 'Photos' && (
        <section className="bg-white text-black pt-40 pb-[150px] md:pb-[160px] lg:pb-[140px] px-4">
          <div className="flex justify-center items-center min-h-[300px] text-gray-400">
            Photos section coming soon...
          </div>
        </section>
      )}
    </div>
  );
}