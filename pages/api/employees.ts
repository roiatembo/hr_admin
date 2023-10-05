import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await clientPromise;
  const db = client.db("hr_admin");

  // Query user from MongoDB based on username
  const users = await db.collection("employees").find().toArray();

  res.status(200).json(users);
}
