// pages/api/login.js
import jwt from "jsonwebtoken";
import cookie from "cookie";

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email, role } = req.body;

  // Simple validation
  if (!email || !role || (role !== "owner" && role !== "customer")) {
    return res.status(400).json({ message: "Invalid credentials or role" });
  }

  // Sign JWT
  const token = jwt.sign({ email, role }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  // Set cookie with token
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("token", token, {
      httpOnly: true, // Not accessible from JS
      secure: process.env.NODE_ENV === "production", // Use HTTPS in prod
      sameSite: "strict", // Prevent CSRF
      maxAge: 60 * 60, // 1 hour
      path: "/", // Accessible everywhere
    })
  );

  res.status(200).json({ message: "Login successful" });
}
