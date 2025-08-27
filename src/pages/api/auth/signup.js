import bcrypt from "bcryptjs";
import { run, get } from "@/lib/db";
import { signToken } from "@/lib/jwt";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const { fullName, email, phone, password, role } = req.body || {};

    if (!fullName || !email || !phone || !password || !role) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    if (!["customer", "owner"].includes(role)) {
      return res.status(400).json({ error: "Invalid role" });
    }

    // ensure unique email/phone
    const existing = await get(
      `SELECT id FROM users WHERE email = ? OR phone = ?`,
      [email, phone]
    );
    if (existing) {
      return res.status(409).json({ error: "Email or phone already registered" });
    }

    const hashed = await bcrypt.hash(password, 10);

    await run(
      `INSERT INTO users (fullName, email, phone, password, role) VALUES (?, ?, ?, ?, ?)`,
      [fullName, email, phone, hashed, role]
    );

    return res.status(200).json({
      success: true,
    });
  } catch (e) {
    console.error("SIGNUP_ERROR:", e);
    return res.status(500).json({ error: "Signup failed" });
  }
}
