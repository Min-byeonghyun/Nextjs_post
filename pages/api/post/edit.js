import { ObjectId } from "mongodb";
import { connectDB } from "@/util/database";
export default async function handler(req, res) {
  if (req.method == "POST") {
    let data = { title: req.body.title, content: req.body.content };
    const db = (await connectDB).db("Next실습");
    const result = await db
      .collection("post")
      .updateOne({ _id: new ObjectId(req.body._id) }, { $set: data }); //updateOne 첫번째 객체에 {어떤 document수정할지} , {수정할 내용} 보내기
  }
  res.status(200).redirect("/list");
}

