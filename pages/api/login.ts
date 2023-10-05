import { NextApiRequest, NextApiResponse } from "next";
// import bcrypt from "bcryptjs";
import clientPromise from "@/lib/mongodb";
import { loginSchema } from "@/lib/types";
import jwt from "jsonwebtoken";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { username, password } = req.body;
  const body: unknown = await req.body;

  const result = loginSchema.safeParse(body);

  // Connect to MongoDB
  const client = await clientPromise;
  const db = client.db("hr_admin");

  // Query user from MongoDB based on username
  const user = await db.collection("users").findOne({ username });
  if (!user || user.password !== password) {
    // Authentication failed
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // if (!user || !bcrypt.compareSync(password, user.password)) {
  //   // Authentication failed
  //   return res.status(401).json({ message: "Invalid credentials" });
  // }

  const secretKey = process.env.JWT_SECRET_KEY || "default-secret-key";
  const payload = { userId: user._id };
  const token = jwt.sign(payload, secretKey, { expiresIn: "1h" });
  res.setHeader("Set-Cookie", `token=${token}; HttpOnly; Path=/; Max-Age=3600`);

  // Send the JWT token in the response
  res.status(200).json({ token });
}
