"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function DarkMode() {
  const router = useRouter();
  const [mode, setMode] = useState("light");

  useEffect(() => {
    // 쿠키에서 현재 모드를 읽어 상태 업데이트
    const currentMode = ("; " + document.cookie)
      .split(`; mode=`)
      .pop()
      .split(";")[0];
    if (currentMode === "") {
      document.cookie = "mode=light; max-age=" + 3600 * 24 * 400; // 기본값 설정
    } else {
      setMode(currentMode);
    }
  }, []);

  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    document.cookie = `mode=${newMode}; max-age=` + 3600 * 24 * 400;
    setMode(newMode); // 상태 업데이트
    router.refresh(); // 페이지 새로고침
  };

  return <span onClick={toggleMode}>{mode === "light" ? "🌙" : "☀️"}</span>;
}
