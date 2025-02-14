import "./globals.css";
import Link from "next/link";
import LoginBtn from "./LoginBtn";
import LogOutBtn from "./LogOutBtn";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { cookies } from "next/headers";
import DarkMode from "./DarkMode";

export default async function RootLayout({ children }) {
  let session = await getServerSession(authOptions);

  let res = await cookies().get("mode");

  return (
    <html lang="kr">
      <body
        className={res != undefined && res.value == "dark" ? "dark-mode" : ""}
      >
        <div className="navbar">
          <Link href="/" className="logo">
            byeonghyunBoard
          </Link>
          <Link href="/list">List</Link>
          {session ? (
            <span>
              {session.user.name}
              <LogOutBtn />
            </span>
          ) : (
            <>
              <LoginBtn />
              <Link href="/register">회원가입</Link>
            </>
          )}
          <DarkMode />
        </div>
        {children}
      </body>
    </html>
  );
}
