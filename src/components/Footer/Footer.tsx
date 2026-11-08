import {
  ArrowLeft,
  Code2,
  Mail,
  Send,
  ShieldCheck,
  Zap,
  Headset,
} from "lucide-react";

import {
  FaLinkedinIn,
  FaGithub,
  FaYoutube,
  FaTelegramPlane,
  FaPhone,
} from "react-icons/fa";

import styles from "./Footer.module.scss";
import Link from "next/link";
import Logo from "../Logo/Logo";

const quickLinks = [
  { title: "صفحه اصلی", href: "/" },
  { title: "نمونه کارها", href: "/portfolio" },
  { title: "خدمات", href: "/services" },
  { title: "درباره ما", href: "/about" },
  { title: "تماس با ما", href: "/contact" },
];

const services = [
  "طراحی سایت اختصاصی",
  "توسعه وب اپلیکیشن",
  "بهینه‌سازی و سئو",
  "مشاوره و پشتیبانی",
  "طراحی رابط کاربری (UI/UX)",
];

const socialLinks = [
  { title: "LinkedIn", href: "#", icon: FaLinkedinIn },
  { title: "GitHub", href: "#", icon: FaGithub },
  { title: "Telegram", href: "#", icon: FaTelegramPlane },
  { title: "YouTube", href: "#", icon: FaYoutube },
];
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Call To Action */}
        <section className={styles.cta}>
          <div className={styles.cta__icon}>
            <Send size={30} strokeWidth={1.5} />
          </div>

          <div className={styles.cta__content}>
            <h2>
              آماده‌اید پروژه <span>بعدی</span> خود را شروع کنیم؟
            </h2>
            <p>با ما در ارتباط باشید تا از مشاوره رایگان بهره‌مند شوید.</p>
            <br />
            <h3>
              آماده <span>همکاری</span> هستم
            </h3>
            <p>
              از همکاری با تیم‌های خلاق، شرکت‌های فناوری و همکاران متخصص استقبال
              می‌کنم.
            </p>
          </div>

          <Link href="/contact" className={styles.cta__button}>
            تماس با ما
            <ArrowLeft size={18} />
          </Link>
        </section>

        {/* Footer Main */}
        <div className={styles.main}>
          {/* Brand */}
          <div className={styles.brand}>
            <Link href="/" className={styles.brand__logo}>
              <Logo />
            </Link>

            <p>
              با تجربه در طراحی و توسعه وب‌سایت‌های مدرن، به کسب‌وکارها کمک
              می‌کنیم تا حضور آنلاین قدرتمندی داشته باشند.
            </p>

            <div className={styles.contactItem}>
              <FaPhone className={styles.contactIcon} />
              <a href="tel:09186936959" dir="ltr">
                ۰۹۱۸ ۶۹۳ ۶۹۵۹
              </a>
            </div>

            <div className={styles.contactItem}>
              <FaPhone className={styles.contactIcon} />
              <a href="tel:09183485509" dir="ltr">
                ۰۹۱۸ ۳۴۸ ۵۵۰۹
              </a>
            </div>
            <br />

            <div className={styles.socials}>
              {socialLinks.map(({ title, href, icon: Icon }) => (
                <a
                  key={title}
                  href={href}
                  aria-label={title}
                  title={title}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={19} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.column}>
            <h3>لینک‌های سریع</h3>

            <ul>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className={styles.column}>
            <h3>خدمات ما</h3>

            <ul>
              {services.map((service) => (
                <li key={service}>
                  <Link href="/services">{service}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className={styles.newsletter}>
            <h3>عضویت در خبرنامه</h3>

            <p>
              برای دریافت جدیدترین اخبار و پیشنهادات ما در خبرنامه عضو شوید.
            </p>

            <div className={styles.newsletter__form}>
              <Mail size={19} />

              <input
                type="email"
                placeholder="آدرس ایمیل شما"
                aria-label="آدرس ایمیل"
              />

              <button type="button">عضویت</button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.bottom}>
          <div className={styles.copyright}>
            <span>© 2026</span>
            <span>تمامی حقوق محفوظ است.</span>
            <strong>پویا پیج</strong>
          </div>

          <p className={styles.creator}>طراحی و توسعه توسط رضا نیک‌آفرین</p>

          <div className={styles.features}>
            <div>
              <ShieldCheck />
              <span>امنیت بالا</span>
            </div>

            <div>
              <Zap />
              <span>تحویل به‌موقع</span>
            </div>

            <div>
              <Headset />
              <span>پشتیبانی حرفه‌ای</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
