import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  let session = await getServerSession(req, res, authOptions);
  if (!session) {
    return res.status(401).json({ message: "Unauthorized. Please log in." });
  }
  console.log(session);
  if (req.method == "POST") {
    req.body = JSON.parse(req.body);
    let 저장할거 = {
      content: req.body.comment,
      parent: new ObjectId(req.body._id),
      author: session.user.email,
    };

    const db = (await connectDB).db("Next실습");
    let result = await db.collection("comment").insertOne(저장할거);
    res.status(200).json(저장할거 );
  }
}
