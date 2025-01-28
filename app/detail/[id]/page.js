import { ObjectId } from "mongodb";
import { connectDB } from "@/util/database.js";
import Comment from "./Comment";

export default async function Detail(props) {
  const { id } = await props.params;
  let db = (await connectDB).db("Next실습");
  let result = await db.collection("post").findOne({ _id: new ObjectId(id) });
  return (
    <div>
      <h4>상세페이지임</h4>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
      <Comment _id={result._id.toString()} />
    </div>
  );
}
