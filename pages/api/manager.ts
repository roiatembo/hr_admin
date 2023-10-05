import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await clientPromise;
  const db = client.db("hr_admin");

  // Query user from MongoDB based on username
  const users = await db
    .collection("employees")
    .findOne({ userID: req.query.managerID });
  const fullName = users?.firstName + " " + users?.lastName;
  res.status(200).json({ fullName });
}
