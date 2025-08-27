// pages/_app.js
import "../styles/globals.css";
import { AuthProvider } from "@/context/AuthContext";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider user={pageProps.user || null}>
      <Component {...pageProps} />
    </AuthProvider>
  );
}



// import "../styles/globals.css";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";

// export default function App({ Component, pageProps }) {
//   const router = useRouter();
//   const [authChecked, setAuthChecked] = useState(false);

//   useEffect(() => {
//     const checkAccess = async (url) => {
//       const token = localStorage.getItem("token");
//       const role = localStorage.getItem("role");

//       const openRoutes = [
//         "/",
//         "/services",
//         "/s_services",
//         "/salons",
//         "/get_listed",
//       ];
//       const ownerOnlyRoutes = ["/admin_panel", "/ownr_profile"];
//       const customerOnlyRoutes = ["/", "/cstmr_profile", "/schedule", "/salons", "/service", "s_services"];

//       // 1. Open routes — allow immediately
//       if (openRoutes.includes(url)) {
//         setAuthChecked(true);
//         return;
//       }

//       // 2. No token → block
//       if (!token) {
//         router.replace("/");
//         return;
//       }

//       try {
//         // 3. Verify with backend
//         const res = await fetch("/api/auth/me", {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         if (!res.ok) {
//           localStorage.removeItem("token");
//           localStorage.removeItem("role");
//           router.replace("/");
//           return;
//         }

//         const data = await res.json();
//         const user = data.user;

//         // 4. Role checks
//         if (ownerOnlyRoutes.includes(url) && user.role !== "owner") {
//           router.replace("/admin_panel");
//           return;
//         }
//         if (customerOnlyRoutes.includes(url) && user.role !== "customer") {
//           router.replace("/");
//           return;
//         }

//         setAuthChecked(true);
//       } catch (err) {
//         console.error("Auth check failed:", err);
//         router.replace("/");
//       }
//     };

//     // Check immediately on mount
//     checkAccess(router.pathname);

//     // Check on client navigation
//     router.events.on("routeChangeStart", checkAccess);
//     return () => {
//       router.events.off("routeChangeStart", checkAccess);
//     };
//   }, [router]);

//   // 🚀 Prevent page flash: don’t render until auth check is complete
//   if (!authChecked) {
//     return <div className="flex h-screen items-center justify-center">loading...</div>;
//   }

//   return <Component {...pageProps} />;
// }



// import "../styles/globals.css";
// import { useEffect } from "react";
// import { useRouter } from "next/router";

// export default function App({ Component, pageProps }) {
//   const router = useRouter();

//   useEffect(() => {
//     const handleRouteChange = (url) => {
//       try {
//         const token = localStorage.getItem("token");
//         const role = localStorage.getItem("role");

//         // 🔹 Open/public routes (no login required)
//         const openRoutes = [
//           "/",
//           "/services",
//           "/s_services",
//           "/salons",
//           "/get_listed",
//           "/login",
//           "/register"
//         ];

//         // 🔹 Owner-protected routes
//         const ownerOnlyRoutes = ["/admin_panel", "/ownr_profile"];

//         // 🔹 Customer-protected routes
//         const customerOnlyRoutes = ["/cstmr_profile", "/schedule"];

//         // --- Logic ---

//         // 1. If route is open → allow
//         if (openRoutes.includes(url)) return;

//         // 2. If not logged in and not in open routes → block
//         if (!token || !role) {
//           router.replace("/login");
//           return;
//         }

//         // 3. Owner-only pages
//         if (ownerOnlyRoutes.includes(url) && role !== "owner") {
//           router.replace("/unauthorized");
//           return;
//         }

//         // 4. Customer-only pages
//         if (customerOnlyRoutes.includes(url) && role !== "customer") {
//           router.replace("/unauthorized");
//           return;
//         }

//         // ✅ Otherwise → allow
//       } catch (e) {
//         console.error("Auth check failed:", e);
//         router.replace("/login");
//       }
//     };

//     // Run once on first load
//     handleRouteChange(router.pathname);

//     // Run on client-side route changes
//     router.events.on("routeChangeStart", handleRouteChange);
//     return () => {
//       router.events.off("routeChangeStart", handleRouteChange);
//     };
//   }, [router]);

//   return <Component {...pageProps} />;
// }



// import "../styles/globals.css";
// import { useEffect } from "react";
// import { useRouter } from "next/router";

// export default function App({ Component, pageProps }) {
//   const router = useRouter();

//   useEffect(() => {
//     try {
//       const token = localStorage.getItem("token");
//       const role = localStorage.getItem("role");
//       if (token && role) {
//         // Optional: ping /api/auth/me to verify token here
//         // Redirect by role
//         // if (role === "owner") router.replace("/ownr_profile");
//         // else router.replace("/cstmr_profile");
//       }
//     } catch {}
//   }, []);

//   return <Component {...pageProps} />;
// }
// protected & owner only
// /admin_panel.js
// /ownr_profile.js

// protected & customer only 
// /cstmr_profile.js
// /schedule.js

// open 
// /s_services.js
// /salons.js
// /index.js
// /services.js
// /get_listed.js
// // import "@/styles/globals.css";

// // export default function App({ Component, pageProps }) {
// //   return <Component {...pageProps} />;
// // }
