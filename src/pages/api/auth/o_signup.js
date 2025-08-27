import bcrypt from "bcryptjs";
import { run, get } from "@/lib/db";
import { signToken } from "@/lib/jwt";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Method not allowed" });

  try {
    const { fullname, email, phone, password, salonName, address, barbers } = req.body || {};

    if (!fullname || !email || !phone || !password || !salonName || !address) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // ensure unique email/phone
    const existing = await get(
      `SELECT id FROM users WHERE email = ? OR phone = ?`,
      [email, phone]
    );
    if (existing) {
      return res.status(409).json({ message: "Email or phone already registered" });
    }

    const hashed = await bcrypt.hash(password, 10);

    // insert into users with role = 'owner'
    const userResult = await run(
      `INSERT INTO users (fullname, email, phone, password, role) VALUES (?, ?, ?, ?, ?)`,
      [fullname, email, phone, hashed, "owner"]
    );

    const ownerId = userResult.id;

    // insert salon details
    await run(
      `INSERT INTO owners (ownerId, salonName, address, barbers) VALUES (?, ?, ?, ?)`,
      [ownerId, salonName, address, JSON.stringify(barbers || [])]
    );

    const token = signToken({ email, phone, role: "owner" });

    return res.status(200).json({
      success: true,
    });
  } catch (e) {
    console.error("OWNER_SIGNUP_ERROR:", e);
    return res.status(500).json({ message: "Owner signup failed" });
  }
}



// import bcrypt from "bcryptjs";


// import { run, get } from "@/lib/db";
// import { signToken } from "@/lib/jwt";

// export default async function handler(req, res) {
//   if (req.method !== "POST")
//     return res.status(405).json({ error: "Method not allowed" });

//   try {
//     const { ownerName, email, phone, password, salonName, address, barbers } = req.body || {};

//     if (!ownerName || !email || !phone || !password || !salonName || !address) {
//       return res.status(400).json({ error: "Missing required fields" });
//     }

//     // ensure unique email/phone
//     const existing = await get(
//       `SELECT id FROM users WHERE email = ? OR phone = ?`,
//       [email, phone]
//     );
//     if (existing) {
//       return res.status(409).json({ error: "Email or phone already registered" });
//     }

//     const hashed = await bcrypt.hash(password, 10);

//     // insert into users with role = 'owner'
//     const userResult = await run(
//       `INSERT INTO users (fullname, email, phone, password, role) VALUES (?, ?, ?, ?, ?)`,
//       [ownerName, email, phone, hashed, "owner"]
//     );

//     const ownerId = userResult.lastID;

//     // insert salon details
//     await run(
//       `INSERT INTO owners (ownerId, salonName, address, barbers) VALUES (?, ?, ?, ?)`,
//       [ownerId, salonName, address, JSON.stringify(barbers || [])]
//     );

//     const token = signToken({ email, phone, role: "owner" });

//     return res.status(200).json({
//       success: true,
//       token,
//       phone,
//       role: "owner",
//     });
//   } catch (e) {
//     console.error("OWNER_SIGNUP_ERROR:", e);
//     return res.status(500).json({ error: "Owner signup failed" });
//   }
// }
