import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const session = await getServerSession(req, res, authOptions);
    console.log(session);
    const db = (await connectDB).db("Next실습");
    const result = await db
      .collection("post")
      .findOne({ _id: new ObjectId(req.body) });
    if (result.author == session.user.email) {
      let result = await db
        .collection("post")
        .deleteOne({ _id: new ObjectId(req.body) });
      return res.status(200).json("삭제완료");
    } else {
      return res.status(500).json("현재유저와 작성자 불일치");
    }
  }
}
