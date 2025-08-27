"use client";

import { useState, useEffect } from "react";
import { FaFacebook, FaGoogle, FaTwitter, FaEye, FaEyeSlash } from "react-icons/fa";

export default function LoginPage() {
  const [showPassword,  setShowPassword] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // Mobile view condition
    };
    
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return <MobileLoginModule />;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="flex w-[850px] bg-white rounded-lg shadow-lg overflow-hidden">
        
        {/* Left Side: Login Form */}
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-semibold text-gray-700 text-center">Login</h2>

          <input
            type="email"
            className="w-full mt-4 px-4 py-2 border rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500 placeholder-gray-600"
            placeholder="E-mail Address"
          />

          <div className="relative w-full mt-4">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full px-4 py-2 border rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500 placeholder-gray-600"
              placeholder="Password"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-3 flex items-center text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash className="w-5 h-5" /> : <FaEye className="w-5 h-5" />}
            </button>
          </div>

          <button className="w-full mt-6 bg-pink-700 text-white py-2 rounded-lg hover:opacity-90 transition duration-300">
            Login
          </button>

          <p className="mt-4 text-center text-gray-600">
            Already have an account? <a className="text-blue-500 cursor-pointer">Register</a>
          </p>

          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="px-3 text-gray-500">Or continue with</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <div className="flex justify-center space-x-4">
            <button className="p-2 bg-blue-600 text-white rounded-full">
              <FaFacebook className="w-5 h-5" />
            </button>
            <button className="p-2 bg-red-500 text-white rounded-full">
              <FaGoogle className="w-5 h-5" />
            </button>
            <button className="p-2 bg-blue-400 text-white rounded-full">
              <FaTwitter className="w-5 h-5" />
            </button>
          </div>

          <p className="mt-4 text-xs text-gray-500 text-center">
            By continuing, you agree to the <span className="font-semibold">SalonX's Terms</span> and{" "}
            <span className="font-semibold">Privacy Policy</span>.
          </p>
        </div>

        {/* Right Side: Background Image */}
        <div
          className="w-1/2 bg-cover bg-center"
          style={{ backgroundImage: "url('/salon1.jpg')" }}
        ></div>
      </div> 
    </div>   
  );  
}

// Mobile Login Module
function MobileLoginModule() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-center text-lg font-bold text-gray-800 mb-4">Login</h2>

        <input
          type="email"
          placeholder="E-mail Address *"
          className="w-full p-2 border rounded-md text-gray-800 focus:outline-none"
        />
        <div className="relative mt-3">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full p-2 border rounded-md text-gray-800 focus:outline-none"
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-2 text-gray-500"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        <button className="w-full mt-4 p-2 bg-pink-700 text-white rounded-md">
          Login
        </button>

        <p className="text-center text-sm mt-2 text-gray-500">
          Already have an account? <a href="#" className="text-blue-500">Register</a>
        </p>

        <div className="flex items-center my-4">
          <div className="flex-1 border-b"></div>
          <p className="text-xs text-gray-500 px-2">Or Continue with</p>
          <div className="flex-1 border-b"></div>
        </div>

        <div className="flex justify-center space-x-4">
          <button className="p-2 border rounded-full"><FaGoogle className="text-red-500" /></button>
          <button className="p-2 border rounded-full"><FaFacebook className="text-blue-500" /></button>
          <button className="p-2 border rounded-full"><FaTwitter className="text-blue-400" /></button>
        </div>

        <p className="text-xs text-center mt-4 text-gray-500">
          By continuing, you agree to the SalonX's <a href="#" className="text-blue-500">Terms</a> and <a href="#" className="text-blue-500">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
}