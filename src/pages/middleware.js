// middleware.js
import { NextResponse } from "next/server";

// If you want to decode/verify JWT, import helper here
// e.g., import { verifyToken } from "@/lib/jwt";

export function middleware(req) {
  const token = req.cookies.get("token")?.value; // we read from cookies
  const url = req.nextUrl.clone();

  // Example: configure protected paths
  const ownerOnly = ["/admin_panel", "/ownr_profile"];
  const customerOnly = ["/cstmr_profile", "/schedule"];
  const openRoutes = ["/", "/services", "/salons", "/get_listed", "/s_services"];

  // 1. Guest access
  if (!token) {
    if (openRoutes.includes(url.pathname)) {
      return NextResponse.next(); // let guests in
    }
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  // 2. Decode token or fetch user (here assuming JWT payload in cookie)
  let user = null;
  try {
    // Replace with your actual JWT decoding or API call
    const payload = JSON.parse(
      Buffer.from(token.split(".")[1], "base64").toString()
    );
    user = payload;
  } catch (e) {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  if (url.pathname === "get_listed" && user !== null) {
    return;
  }

  // 3. Role restrictions
  if (ownerOnly.includes(url.pathname) && user.role !== "owner") {
    url.pathname = "/admin_panel";
    return NextResponse.redirect(url);
  }

  if (customerOnly.includes(url.pathname) && user.role !== "customer") {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  // 4. Special case: block owners from homepage
  if ((url.pathname === "/" || url.pathname === "/salons" || url.pathname === "/services" || url.pathname === "/s_services") && user.role === "owner") {
    url.pathname = "/admin_panel";
    return NextResponse.redirect(url);
  }

  // ✅ Let it through
  return NextResponse.next();
}

// Define which paths middleware runs on
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|api).*)", // apply to all pages except static/api
  ],
};



// import { NextResponse } from 'next/server';
// import jwt from 'jsonwebtoken';

// export function middleware(req) {
//   const token = req.cookies.get('token')?.value;

//   const url = req.nextUrl.clone();
//   const pathname = url.pathname;

//   if (!token) {
//     url.pathname = '/'; // redirect to home if no token
//     return NextResponse.redirect(url);
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     const role = decoded.role;

//     // Customer route protection
//     if (pathname.startsWith('/customer') && role !== 'customer') {
//       url.pathname = '/';
//       return NextResponse.redirect(url);
//     }

//     // Owner route protection
//     if (pathname.startsWith('/owner') && role !== 'owner') {
//       url.pathname = '/';
//       return NextResponse.redirect(url);
//     }

//     // Schedule route only for customer
//     if (pathname.startsWith('/schedule') && role !== 'customer') {
//       url.pathname = '/';
//       return NextResponse.redirect(url);
//     }

//     // If valid, continue
//     return NextResponse.next();
//   } catch (err) {
//     url.pathname = '/';
//     return NextResponse.redirect(url);
//   }
// }

// // Specify which routes the middleware applies to
// export const config = {
//   matcher: ['/customer/:path*', '/owner/:path*', '/schedule/:path*'],
// };