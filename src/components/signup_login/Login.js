'use client';
import Image from 'next/image';
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { saveSession } from "@/lib/session";
import { usePathname } from "next/navigation";

const LoginModal = ({ isOpen, onClose, switchToSignup }) => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [identifier, setIdentifier] = useState(''); // email OR phone
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const pathname = usePathname();

  if (!isOpen) return null;

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ identifier, password }),
    });

    const data = await res.json();

    if (res.ok) {
      saveSession({ token: data.token, role: data.user.role, phone: data.user.phone });

      onClose();
      if (data.user.role === 'owner') {
        router.push('/admin_panel');
      } else if(data.user.role === 'customer'|| (data.user.role === 'customer' && pathname === '/')) {
        router.push('/');
        router.reload();
      }
    } else {
      setError(data.error || "Login failed");
    }
  };

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
          <h2 className="text-center text-3xl font-semibold text-gray-700 mb-12">Login</h2>
          <form onSubmit={handleLogin} className="space-y-8">
            {/* <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full border border-gray-300 text-black rounded-md h-10 px-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              <option value="customer">Customer</option>
              <option value="owner">Owner</option>
            </select> */}

            <input
              type="text"
              placeholder="Email or Phone *"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              className="w-full border border-gray-300 text-black rounded-md h-10 px-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />

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

            {error && <p className="text-red-500 text-center text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full h-10 bg-gradient-to-r from-[#AD5389] to-[#BB23DA] text-white rounded-md mt-6 text-lg hover:opacity-90 transition"
            >
              Login
            </button>
          </form>

          <p className="text-center text-[0.6rem] text-gray-500 mt-1">
            By continuing, you agree to <span className="text-[#BB23DA]">BarberX</span> Terms and Privacy Policy.
          </p>

          <div className="text-center text-gray-500 mt-2 text-sm">
            Don't have an account?{' '}
            <span onClick={switchToSignup} className="text-purple-600 font-medium hover:underline cursor-pointer">
              Sign Up
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

export default LoginModal;


// 'use client';
// import Image from 'next/image';
// import { useState, useEffect } from "react";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { useRouter } from "next/router";
// import Cookies from "js-cookie";

// const LoginModal = ({ isOpen, onClose, switchToSignup }) => {
//   const router = useRouter();
//   const [showPassword, setShowPassword] = useState(false);
//   const [email, setEmail] = useState('');
//   const [role, setRole] = useState('customer');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   if (!isOpen) return null;

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     const res = await fetch('/api/login', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ email, role, password }),
//     });

//     const data = await res.json();

//     if (res.ok) {
//       Cookies.set('token', data.token); // Save JWT in cookie
//       if (role === 'owner') {
//         router.push('/owner');
//       } else {
//         router.push('/customer');
//       }
//     } else {
//       setError(data.message || "Login failed");
//     }
//   };

//   return (
//     <div className="fixed inset-0 z-50 w-[100vw] bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center px-4 py-10 overflow-y-auto">
//       <motion.div
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         exit={{ scale: 0.8, opacity: 0 }}
//         transition={{ duration: 0.2, ease: "easeOut" }}
//         className="relative w-[90vw] md:w-[65vw] bg-white border border-gray-300 shadow-2xl rounded-2xl overflow-hidden flex flex-col md:flex-row"
//       >
//         {/* Form Side */}
//         <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
//           <h2 className="text-center text-3xl font-semibold text-gray-700 mb-12">Login</h2>
//           <form onSubmit={handleLogin} className="space-y-8">
//             {/* Role Selection */}
//             <select
//               value={role}
//               onChange={(e) => setRole(e.target.value)}
//               className="w-full border border-gray-300 text-black rounded-md h-10 px-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
//             >
//               <option value="customer">Customer</option>
//               <option value="owner">Owner</option>
//             </select>

//             {/* Email */}
//             <input
//               type="email"
//               placeholder="E-mail Address *"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full border border-gray-300 text-black rounded-md h-10 px-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
//               required
//             />
            
//             {/* Password */}
//             <div className="relative">
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 placeholder="Password *"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full border border-gray-300 text-black rounded-md h-10 px-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
//                 required
//               />
//               <button
//                 type="button"
//                 className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700 text-lg"
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 {showPassword ? <FaEye className="w-5 h-5" /> : <FaEyeSlash className="w-5 h-5" />}
//               </button>
//             </div>
            
//             {/* Error */}
//             {error && <p className="text-red-500 text-center text-sm">{error}</p>}
            
//             {/* Submit */}
//             <div>
//               <button
//                 type="submit"
//                 className="w-full h-10 bg-gradient-to-r from-[#AD5389] to-[#BB23DA] text-white rounded-md mt-6 text-lg hover:opacity-90 transition"
//               >
//                 Login
//               </button>
//             </div>
//           </form>

//           <p className="text-center text-[0.6rem] text-gray-500 mt-1">
//             By continuing, you agree to <span className="text-[#BB23DA]">BarberX</span> Terms and Privacy Policy.
//           </p>

//           <div className="text-center text-gray-500 mt-2 text-sm">
//             Don't have an account?{' '}
//             <span
//               onClick={switchToSignup}
//               className="text-purple-600 font-medium hover:underline cursor-pointer"
//             >
//               Sign Up
//             </span>
//           </div>

//            <div className="flex justify-center space-x-6 mt-2">
//               <Image src="/fb.png" alt="Facebook" width={32} height={32} />
//               <Image src="/google.png" alt="Google" width={32} height={32} />
//               <Image src="/twitter.png" alt="Twitter" width={32} height={32} />
//             </div>
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

// export default LoginModal;
