import type { Metadata } from "next";
import "vazirmatn/Vazirmatn-font-face.css";
import "./globals.scss";
import Header from '../components/Header/Header';
import Footer from "@/components/Footer/Footer";


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
          <Header />
          {children}
          <Footer/>
      </body>
    </html>
  );
}

