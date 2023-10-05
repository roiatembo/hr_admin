import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { username, password } = req.body;
  const body: unknown = await req.body;

  // Connect to MongoDB
  const client = await clientPromise;
  const db = client.db("hr_admin");

  try {
    await db
      .collection("user")
      .insertOne({ username: "card", password: "pass" });
    console.log("Document inserted successfully");
  } catch (e) {
    console.error(e);
  } finally {
    client.close();
  }

  res.status(200).json({ message: "success" });
}
