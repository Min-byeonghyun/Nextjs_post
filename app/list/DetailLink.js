"use client";

import { useRouter } from "next/navigation";

export default function DetailLink() {
  let router = useRouter();
  return (
    <button
      className="homeButton"
      onClick={() => {
        router.push("/");
      }}
    >
      Home
    </button>
  );
}

/* 
router.push('/어쩌구') 실행하면 /어쩌구 경로로 페이지이동이 가능합니다.
router.back() 실행하면 뒤로가기
router.forward() 실행하면 앞으로가기
router.refresh() 실행하면 새로고침해줍니다.
근데 페이지를 처음부터 다시 로드하는게 아니라
이전과 바뀐점을 분석해서 바뀐부분만 새로고침해준다고 합니다. 
Next.js 공식문서에선 soft refresh라고 부릅니다. 
router.prefetch('/어쩌구') 실행하면 '/어쩌구'의 내용을 미리 로드해줍니다. 
그럼 그 페이지 방문할 때 매우 빠르게 방문할 수 있습니다. 
빠른 사이트를 만들고 싶을 때 쓸 수 있는 유용한 기능입니다. 
*/
