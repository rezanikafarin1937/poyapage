import type { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import "./globals.scss";

export const metadata: Metadata = {
  title: "پویا پیج",
  description: "نمونه کارهای طراحی سایت رضا نیک آفرین",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <div className="wrapper">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}

