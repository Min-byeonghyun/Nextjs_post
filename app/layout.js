import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="kr">
      <body>
        <div className="navbar">
          <Link href="/" className="logo">
            byeonghyunBoard
          </Link>
          <Link href="/list">List</Link>
        </div>
        {children}
      </body>
    </html>
  );
}
