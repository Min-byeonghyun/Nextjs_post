import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  if (req.method == "POST") {
    if (req.body.title == "") {
      return res.status(404).json("제목쓰세요");
    }
    try {
      const db = (await connectDB).db("Next실습");
      const result = await db.collection("post").insertOne(req.body);
      return res.status(200).redirect("/list");
    } catch (error) {
      console.log(error);
    }
  }
}
