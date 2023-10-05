import clientPromise from "../../lib/mongodb";

export default async function handlerUsers(req, res) {
  const client = await clientPromise;
  const db = client.db("hr_admin");
  const collection = db.collection("users");

  const data = await collection.find({}).toArray();

  res.json(data);
}
