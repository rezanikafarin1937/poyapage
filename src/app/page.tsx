import type { Metadata } from "next";

import styles from "./page.module.scss";

import Banner from "@/components/Banner/Banner";
import Benefits from "@/components/Benefits/Benefits";
import Presentation from "@/components/Presentation/Presentation";
import Portfolio from "@/components/Portfolio/Portfolio";

export const metadata: Metadata = {
  title: "پویا پیج | طراحی و توسعه وب‌سایت حرفه‌ای",
  description:
    "پویا پیج، ارائه‌دهنده خدمات طراحی و توسعه وب‌سایت‌های شرکتی، صنعتی و فروشگاهی با React و Next.js؛ همراه کسب‌وکارها در مسیر تحول دیجیتال.",

  alternates: {
    canonical: "https://poyapage.ir/",
  },

  openGraph: {
    title: "پویا پیج | طراحی و توسعه وب‌سایت",
    description:
      "طراحی و توسعه وب‌سایت‌های مدرن، شرکتی، صنعتی و فروشگاهی با پویا پیج.",
    url: "https://poyapage.ir/",
    siteName: "پویا پیج",
    locale: "fa_IR",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <main className={styles.page}>
      <Banner />
      <Benefits />
      <Presentation />
      <Portfolio />
      <br />
    </main>
  );
}
