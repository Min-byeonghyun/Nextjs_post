import { connectDB } from "@/util/database";

export default async function Home() {
  const db = (await connectDB).db("Next실습"); // mongoDB 데이터베이스 접속
  let result = await db.collection("post").find().toArray(); // DB에서 글꺼내옴
  console.log(result);
  return <div>ㅎㅇ</div>;
}
