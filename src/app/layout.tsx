
import type { Metadata } from "next";
import type { ReactNode } from "react";

import "vazirmatn/Vazirmatn-font-face.css";
import "./globals.scss";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://poyapage.ir"),

  title: {
    default: "پویا پیج | طراحی و توسعه وب‌سایت حرفه‌ای",
    template: "%s | پویا پیج",
  },

  description:
    "پویا پیج، ارائه‌دهنده خدمات طراحی و توسعه وب‌سایت‌های شرکتی، صنعتی و فروشگاهی توسط رضا نیک‌آفرین.",

  applicationName: "پویا پیج",

  openGraph: {
    type: "website",
    locale: "fa_IR",
    siteName: "پویا پیج",
    title: "پویا پیج | طراحی و توسعه وب‌سایت حرفه‌ای",
    description:
      "طراحی و توسعه وب‌سایت‌های مدرن، شرکتی، صنعتی و فروشگاهی با پویا پیج.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
