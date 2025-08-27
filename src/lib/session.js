import Cookies from "js-cookie";

// Save session to both localStorage + Cookies
export function saveSession({ token, role, phone }) {
  // LocalStorage (for quick client-side access)
  localStorage.setItem("token", token);
  localStorage.setItem("role", role);
  localStorage.setItem("phone", phone);

  // Cookies (for SSR and API requests)
  Cookies.set("token", token, { expires: 7 }); // 7 days expiry
  Cookies.set("role", role, { expires: 7 });
  Cookies.set("phone", phone, { expires: 7 });
}

// Clear session from both localStorage + Cookies
export function clearSession() {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
  localStorage.removeItem("phone");

  Cookies.remove("token");
  Cookies.remove("role");
  Cookies.remove("phone");
}

// Get session (client-side only!)
export function getSession() {
  return {
    token: localStorage.getItem("token") || Cookies.get("token") || null,
    role: localStorage.getItem("role") || Cookies.get("role") || null,
    phone: localStorage.getItem("phone") || Cookies.get("phone") || null,
  };
}


// import { KanbanSquare } from "lucide-react";

// export function saveSession({ token, role, phone }) {
//   localStorage.setItem("token", token);
//   localStorage.setItem("role", role);
//   localStorage.setItem("phone", phone);
// }

// export function clearSession() {
//   localStorage.removeItem("token");
//   localStorage.removeItem("role");
//   localStorage.removeItem("phone");
// }

// export function getSession() {
//   return {
//     token: localStorage.getItem("token"),
//     role: localStorage.getItem("role"),
//     phone: localStorage.getItem("phone"),
//   };
// }