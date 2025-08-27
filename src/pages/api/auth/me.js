import { verifyToken } from "@/lib/jwt";

export default async function handler(req, res) {
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

  try {
    const auth = req.headers.authorization || "";
    const token = auth.startsWith("Bearer ") ? auth.slice(7) : null;
    if (!token) return res.status(401).json({ error: "Missing token" });

    const payload = verifyToken(token);
    return res.status(200).json({ success: true, user: payload });
  } catch (e) {
    return res.status(401).json({ error: "Invalid token" });
  }
}
