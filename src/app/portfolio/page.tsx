import type { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
  title: "نمونه‌کارهای طراحی سایت | پویا پیج",

  description:
    "مشاهده نمونه‌کارهای طراحی و توسعه وب‌سایت پویا پیج؛ شامل فروشگاه اینترنتی عینک تیزبین، فروشگاه پوشانا و پلتفرم کسب‌وکار تولید اوکی.",

  alternates: {
    canonical: "/portfolio",
  },

  openGraph: {
    title: "نمونه‌کارهای طراحی سایت | پویا پیج",

    description:
      "نمونه پروژه‌های طراحی فروشگاه اینترنتی و پلتفرم‌های تحت وب توسط پویا پیج.",

    url: "/portfolio",
    type: "website",
  },
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
