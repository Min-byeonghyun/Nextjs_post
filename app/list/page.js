import { connectDB } from "@/util/database";
import DetailLink from "./DetailLink";
import ListItem from "./ListItem";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function List(props) {
  const db = (await connectDB).db("Next실습");
  let result = await db.collection("post").find().toArray();

  const formattedResult = result.map((data) => ({
    ...data,
    _id: data._id.toString(), // ObjectId를 문자열로 변환
  }));

  return (
    <div className="list-bg">
      <ListItem result={formattedResult} />
      <DetailLink />     
      <Link href='/write'>글작성</Link>
    </div>
  );
}
