'use client';
import Image from 'next/image';
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { motion } from "framer-motion";
import { saveSession } from "@/lib/session";

const SignupModal = ({ isOpen, onClose, switchToLogin }) => {
  const [showPassword, setShowPassword] = useState(false);

  // NEW: controlled fields
  const [fullName, setFullName] = useState("");
  const [email, setEmail]     = useState("");
  const [phone, setPhone]     = useState("");
  const [password, setPassword] = useState("");
  const role = "customer"; // fixed for this popup
  const [error, setError]   = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, phone, password, role })
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Signup failed");
        return;
      }

      onClose();
    } catch (err) {
      setError("Something went wrong");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 w-[100vw] bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center px-4 py-10 overflow-y-auto">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="relative w-[90vw] md:w-[65vw] bg-white border border-gray-300 shadow-2xl rounded-2xl overflow-hidden flex flex-col md:flex-row"
      >
        {/* Form Side */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-center text-3xl font-semibold text-gray-700 mb-6">Signup</h2>

          <form className="space-y-4" onSubmit={handleSignup}>
            <input
              type="text"
              placeholder="Full Name *"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full border border-gray-300 text-black rounded-md h-10 px-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
            <input
              type="email"
              placeholder="E-mail Address *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 text-black rounded-md h-10 px-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />

            <div className="flex gap-3">
              <input
                type="text"
                value="+91"
                disabled
                className="w-11 border border-gray-300 text-black rounded-md h-10 px-2 bg-gray-100"
              />
              <input
                type="text"
                placeholder="Phone Number *"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="flex-1 border border-gray-300 text-black rounded-md h-10 px-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
            </div>

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password *"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 text-black rounded-md h-10 px-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
              <button
                type="button"
                className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 hover:text-gray-700 text-lg"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye className="w-5 h-5" /> : <FaEyeSlash className="w-5 h-5" />}
              </button>
            </div>

            {error && <p className="text-red-500 text-sm text-center">{error}</p>}

            <button
              type="submit"
              className="w-full h-10 bg-gradient-to-r from-[#AD5389] to-[#BB23DA] text-white rounded-md mt-2 text-lg hover:opacity-90 transition"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center text-[0.6rem] text-gray-500 mt-1">
            By continuing, you agree to <span className="text-[#BB23DA]">BarberX</span> Terms and Privacy Policy.
          </p>

          <div className="text-center text-gray-500 mt-2 text-sm">
            Already have an account?{" "}
            <span onClick={switchToLogin} className="text-purple-600 font-medium hover:underline cursor-pointer">
              Login
            </span>
          </div>

          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="px-3 text-[0.6rem] text-gray-500">Or continue with</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <div className="flex justify-center space-x-6 mt-2">
            <Image src="/fb.png" alt="Facebook" width={32} height={32} />
            <Image src="/google.png" alt="Google" width={32} height={32} />
            <Image src="/twitter.png" alt="Twitter" width={32} height={32} />
          </div>
        </div>

        {/* Image Side */}
        <div className="w-full md:w-1/2 relative hidden md:block">
          <Image src="/signup.png" alt="Salon Interior" fill className="object-cover" />
        </div>

        <button className="absolute top-3 right-4 text-gray-500 hover:text-gray-700 text-3xl font-bold" onClick={onClose}>
          &times;
        </button>
      </motion.div>
    </div>
  );
};

export default SignupModal;


// 'use client';
// import Image from 'next/image';
// import { useState, useEffect } from "react";
// import { FaFacebook, FaGoogle, FaTwitter, FaEye, FaEyeSlash } from "react-icons/fa";
// import { motion } from "framer-motion";

// const SignupModal = ({ isOpen, onClose, switchToLogin }) => {
//   const [showPassword, setShowPassword] = useState(false);
//   const togglePassword = () => setShowPassword(!showPassword);

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 w-[100vw] bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center px-4 py-10 overflow-y-auto">
//       <motion.div
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         exit={{ scale: 0.8, opacity: 0 }}
//         transition={{ duration: 0.2, ease: "easeOut" }}
//         className="relative w-[90vw] md:w-[65vw] bg-white border border-gray-300 shadow-2xl rounded-2xl overflow-hidden flex flex-col md:flex-row"
//       >
//         {/* Signup Form Side */}
//         <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
//           <h2 className="text-center text-3xl font-semibold text-gray-700 mb-6">Signup</h2>
//           <form className="space-y-4">
//             <input
//               type="text"
//               placeholder="Role *"
//               className="w-full border border-gray-300 text-black rounded-md h-10 md:h-10 px-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
//             /> 
//             <input
//               type="text"
//               placeholder="Full Name *"
//               className="w-full border border-gray-300 text-black rounded-md h-10 md:h-10 px-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
//             />
//             <input
//               type="email"
//               placeholder="E-mail Address *"
//               className="w-full border border-gray-300 text-black rounded-md h-10 md:h-10 px-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
//             />
            
//             <div className="flex gap-3">
//               <input
//                 type="text"
//                 placeholder="+91"
//                 className="w-11 border border-gray-300 text-black rounded-md h-10 md:h-10 px-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
//               />
//               <input
//                 type="text"
//                 placeholder="Phone Number *"
//                 className="flex-1 border border-gray-300 text-black rounded-md h-10 md:h-10 px-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
//               />
//             </div>
            
//             <div className="relative">
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 placeholder="Password *"
//                 className="w-full border border-gray-300 text-black rounded-md h-10 md:h-10 px-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
//               />
//               <button
//                 type="button"
//                 className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700 text-lg"
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 {showPassword ? <FaEye className="w-5 h-5" /> : <FaEyeSlash className="w-5 h-5" />}
//               </button>
//             </div>
            
//             <button
//               type="submit"
//               className="w-full h-10 bg-gradient-to-r from-[#AD5389] to-[#BB23DA] text-white rounded-md mt-2 text-lg hover:opacity-90 transition"
//             >
//               Sign Up
//             </button>
//           </form>

//           <p className="text-center text-[0.6rem] text-gray-500 mt-1">
//             By continuing, you agree to <span className="text-[#BB23DA]">BarberX</span> Terms and Privacy Policy.
//           </p>

//           <div className="text-center text-gray-500 mt-2 text-sm">
//             Already have an account?{' '} 
//             <span
//               onClick={switchToLogin}
//               className="text-purple-600 font-medium hover:underline cursor-pointer"
//             >
//               Login
//             </span>
//           </div>

//           <div className="flex items-center my-2">
//             <hr className="flex-grow border-gray-300" />
//             <span className="px-3 text-[0.6rem] text-gray-500">Or continue with</span>
//             <hr className="flex-grow border-gray-300" />
//           </div>

//           <div className="flex justify-center space-x-6 mt-2">
//             <Image src="/fb.png" alt="Facebook" width={32} height={32} />
//             <Image src="/google.png" alt="Google" width={32} height={32} />
//             <Image src="/twitter.png" alt="Twitter" width={32} height={32} />
//           </div>
//         </div>

//         {/* Image Side */}
//         <div className="w-full md:w-1/2 relative hidden md:block">
//           <Image src="/signup.png" alt="Salon Interior" fill className="object-cover" />
//         </div>

//         {/* Close Button */}
//         <button
//           className="absolute top-3 right-4 text-gray-500 hover:text-gray-700 text-3xl font-bold"
//           onClick={onClose}
//         >
//           &times;
//         </button>
//       </motion.div>
//     </div>
//   );
// };

// export default SignupModal;