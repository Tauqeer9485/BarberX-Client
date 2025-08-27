"use client";
import React from "react";
import SignupModal from "../signup_login/Signup";
import LoginModal from "../signup_login/Login";

const AuthPopup = ({ mode, onClose }) => {
  if (!mode) return null;

  return (
    <>
      {mode === "signup" && (
        <SignupModal
          isOpen={true}
          onClose={() => onClose(null)}
          switchToLogin={() => onClose("login")}
        />
      )}
      {mode === "login" && (
        <LoginModal
          isOpen={true}
          onClose={() => onClose(null)}
          switchToSignup={() => onClose("signup")}
        />
      )}
    </>
  );
};

export default AuthPopup;


// "use client";
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import SignupModal from "./Signup";
// import LoginModal from "./Login";

// const AuthPopup = () => {
//   const [authMode, setAuthMode] = useState<"signup" | "login" | null>(null);

//   return (
//     <div>
//       {/* Trigger Buttons */}
//       <motion.button
//         whileTap={{ scale: 0.95 }}
//         transition={{ type: "spring", stiffness: 300 }}
//         onClick={() => setAuthMode("signup")}
//         className="px-6 py-2 bg-gradient-to-l from-[#BB23DA] to-[#AD5389] 
//                    text-white rounded-[8px] font-bold text-[14px] hover:opacity-90 transition"
//       >
//         Get Listed
//       </motion.button>

//       {/* Signup Modal */}
//       {authMode === "signup" && (
//         <SignupModal
//           isOpen={true}
//           onClose={() => setAuthMode(null)}
//           switchToLogin={() => setAuthMode("login")}
//         />
//       )}

//       {/* Login Modal */}
//       {authMode === "login" && (
//         <LoginModal
//           isOpen={true}
//           onClose={() => setAuthMode(null)}
//           switchToSignup={() => setAuthMode("signup")}
//         />
//       )}
//     </div>
//   );
// };

// export default AuthPopup;
