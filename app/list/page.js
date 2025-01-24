import { connectDB } from "@/util/database";
import Link from "next/link";
import DetailLink from "./DetailLink";

export default async function List() {
  const db = (await connectDB).db("Next실습");
  let result = await db.collection("post").find().toArray();

  return (
    <div className="list-bg">
      {result.map((data) => {
        console.log(data);
        return (
          <div className="list-item" key={data._id}>
            <Link prefetch={false} href={`/detail/${data._id}`}>
              <h4>{data.title}</h4>
              <p>1월 1일</p>
            </Link>

            <Link href={`/edit/${data._id}`}>수정</Link>
          </div>
        );
      })}
      <DetailLink />
    </div>
  );
}
