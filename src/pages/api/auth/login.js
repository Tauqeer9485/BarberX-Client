import bcrypt from "bcryptjs";
import { get } from "@/lib/db";
import { signToken } from "@/lib/jwt";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const { identifier, password} = req.body || {};
    // identifier can be email OR phone

    if (!identifier || !password) {
      return res.status(400).json({ error: "Missing credentials" });
    }

    // find by email OR phone
    const user = await get(
      `SELECT * FROM users WHERE email = ? OR phone = ?`,
      [identifier, identifier]
    );

    if (!user) return res.status(401).json({ error: "User not found" });

    // optional: if you want role to match
    // if (role && user.role !== role) {
    //   return res.status(403).json({ error: "Role mismatch" });
    // }

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(401).json({ error: "Invalid password" });

    const token = signToken({ email: user.email, phone: user.phone, role: user.role });
    return res.status(200).json({
      success: true,
      token,
      user: { fullName: user.fullName, email: user.email, phone: user.phone, role: user.role }
    });
  } catch (e) {
    console.error("LOGIN_ERROR:", e);
    return res.status(500).json({ error: "Login failed" });
  }
}
