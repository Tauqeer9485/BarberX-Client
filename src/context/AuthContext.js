// context/AuthContext.js
import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { jwtDecode } from "jwt-decode";  // ✅ fix here

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token"); 
    if (token) {
      try {
        const decoded = jwtDecode(token); // { email, role, mob }
        setUser(decoded);
      } catch (err) {
        console.error("Invalid token", err);
        localStorage.removeItem("token");
      }
    }
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}


// // context/AuthContext.js
// import { createContext, useContext } from "react";

// const AuthContext = createContext(null);

// export function AuthProvider({ user, children }) {
//   return (
//     <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
//   );
// }

// export function useAuth() {
//   return useContext(AuthContext);
// }

