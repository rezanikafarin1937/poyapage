import type { Metadata } from "next";
import type { ReactNode } from "react";
import "vazirmatn/Vazirmatn-font-face.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import MobileBottomNav from '../components/MobileButtonNav/MobileBottomNav';
import "./globals.scss";


export const metadata: Metadata = {
  metadataBase: new URL("https://poyapage.ir"),

  title: {
    default: "پویا پیج | طراحی و توسعه وب‌سایت حرفه‌ای",
    template: "%s | پویا پیج",
  },

  description:
    "پویا پیج، ارائه‌دهنده خدمات طراحی و توسعه وب‌سایت‌های شرکتی، صنعتی و فروشگاهی توسط رضا نیک‌آفرین.",

  applicationName: "پویا پیج",

  authors: [
    {
      name: "رضا نیک‌آفرین",
    },
  ],

  creator: "رضا نیک‌آفرین",

  publisher: "پویا پیج",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: "/",
    siteName: "پویا پیج",
    title: "پویا پیج | طراحی و توسعه وب‌سایت حرفه‌ای",
    description:
      "طراحی و توسعه وب‌سایت‌های مدرن، شرکتی، صنعتی و فروشگاهی با پویا پیج.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "پویا پیج | طراحی و توسعه وب‌سایت",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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
        <MobileBottomNav/>
      </body>
    </html>
  );
}
