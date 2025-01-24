import { connectDB } from "@/util/database";
import Link from "next/link";
import DetailLink from "./DetailLink";

export default async function List() {
  const db = (await connectDB).db("Next실습");
  let result = await db.collection("post").find().toArray();

  console.log(result);

  return (
    <div className="list-bg">
      {result.map((data, i) => {
        console.log(data);
        return (
          <Link prefetch={false} className="link" href={`/detail/${data._id}`}>
            <div className="list-item" key={i}>
              <h4>{data.title}</h4>
              <p>1월 1일</p>
            </div>
          </Link>
        );
      })}
      <DetailLink />
    </div>
  );
}
