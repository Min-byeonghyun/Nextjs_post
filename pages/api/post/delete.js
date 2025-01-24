import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { _id } = req.query; // 쿼리 스트링에서 _id 추출

      const db = (await connectDB).db("Next실습");
      const result = await db
        .collection("post")
        .deleteOne({ _id: new ObjectId(_id) });

      if (result.deletedCount === 1) {
        res.status(200).json({ message: "삭제 성공" });
      } else {
        res.status(400).json({ message: "삭제 실패" });
      }
    } catch (error) {
      res.status(500).json({ message: "서버 에러", error });
    }
  } else {
    res.status(405).json({ message: "허용되지 않은 HTTP 메서드" });
  }
}
