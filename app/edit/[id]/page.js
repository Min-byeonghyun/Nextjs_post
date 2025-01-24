import { ObjectId } from "mongodb";
import { connectDB } from "@/util/database.js";

export default async function Edit(props) {
  let db = (await connectDB).db("Next실습");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  return (
    <div className="postview">
      <h3>수정 페이지</h3>
      <form action="/api/post/edit" method="post">
        <input name="title" placeholder="글제목" defaultValue={result.title} />
        <input
          name="content"
          placeholder="글내용"
          defaultValue={result.content}
        />
        <input
          style={{ display: "none" }}
          name="_id"
          defaultValue={result._id.toString()}
        />
        <button type="submit">수정하기</button>
      </form>
    </div>
  );
}
