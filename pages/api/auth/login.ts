import { loginSchema } from "@/lib/types";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body: unknown = await request.json();

  const result = loginSchema.safeParse(body);
  let zodErrors = {};
  if (!result.success) {
    result.error.issues.forEach((issue) => {
      zodErrors = { ...zodErrors, [issue.path[0]]: issue.message };
    });
  }

  return NextResponse.json(
    Object.keys(zodErrors).length > 0
      ? { errors: zodErrors }
      : { success: true }
  );
}

// import { NextApiRequest, NextApiResponse } from "next";
// import bcrypt from "bcryptjs";
// import clientPromise from "@/lib/mongodb";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const { username, password } = req.body;

//   // Connect to MongoDB
//   const client = await clientPromise;
//   const db = client.db("hr_admin");

//   // Query user from MongoDB based on username
//   const user = await db.collection("users").findOne({ username });

//   if (!user || !bcrypt.compareSync(password, user.password)) {
//     // Authentication failed
//     return res.status(401).json({ message: "Invalid credentials" });
//   }

//   // Authentication successful, create and store session ID (you can use JWT or session cookies)

//   // Send a response with session ID or JWT token
//   res.status(200).json({
//     message: "Authentication successful",
//     sessionId: "your-session-id",
//   });
// }
