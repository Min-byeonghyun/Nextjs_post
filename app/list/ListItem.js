"use client";
import Link from "next/link";

export default function ListItem({ result }) {
  return (
    <div>
      {result.map((data) => {
        return (
          <div className="list-item" key={data._id}>
            <Link prefetch={false} href={`/detail/${data._id}`}>
              <h4>{data.title}</h4>
              <p>1월 1일</p>
            </Link>
            <Link href={`/edit/${data._id}`}>수정</Link>
            <span
              className="delete"
              onClick={(e) => {
                fetch(`/api/post/delete?_id=${data._id}`, {
                  method: "POST",
                }).then(() => {
                  e.target.parentElement.style.opacity = 0;
                  setTimeout(() => {
                    e.target.parentElement.style.display = "none";
                  }, 500);
                });
              }}
            >
              🗑️
            </span>
          </div>
        );
      })}
    </div>
  );
}
