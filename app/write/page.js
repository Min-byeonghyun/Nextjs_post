export default function Write() {
  return (
    <div className="postview">
      <h3>글작성</h3>
      <form action="/api/post/new" method="post">
        <input name="title" placeholder="글제목" />
        <input name="content" placeholder="글내용" />
        <button type="submit">보내기</button>
      </form>
    </div>
  );
}
