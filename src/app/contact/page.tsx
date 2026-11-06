import Link from "next/link";
import {
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaArrowLeft,
  FaPaperPlane,
  FaBuilding,
  FaStore,
  FaLaptopCode,
} from "react-icons/fa6";

import styles from "./contact.module.scss";

export default function ContactPage() {
  return (
    <main className={styles.contact}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.hero__wrapper}>
          <div className={styles.hero__content}>
            <span className={styles.hero__eyebrow}>ارتباط با PoyaPage</span>

            <h1>
              بیایید ایده شما را
              <span> به یک تجربه دیجیتال </span>
              تبدیل کنیم.
            </h1>

            <p>
              برای طراحی وب‌سایت، توسعه کسب‌وکار یا شروع یک همکاری جدید، خوشحال
              می‌شویم با شما در ارتباط باشیم.
            </p>

            <a href="#contact-form" className={styles.hero__button}>
              شروع گفتگو
              <FaArrowLeft />
            </a>
          </div>

          <div className={styles.hero__visual}>
            <div className={styles.visual__card}>
              <div className={styles.visual__icon}>
                <FaLaptopCode />
              </div>

              <span>از ایده تا اجرا</span>
              <strong>یک قدم تا حضور حرفه‌ای در دنیای دیجیتال</strong>

              <div className={styles.visual__line} />

              <div className={styles.visual__bottom}>
                <span>POYAPAGE</span>
                <span>01 / 03</span>
              </div>
            </div>

            <div className={styles.visual__circle} />
          </div>
        </div>
      </section>

      {/* Contact information */}
      <section className={styles.information}>
        <div className={styles.information__heading}>
          <span>راه‌های ارتباطی</span>
          <h2>چطور می‌توانیم با هم در ارتباط باشیم؟</h2>
          <p>
            راه ارتباطی موردنظرتان را انتخاب کنید یا از فرم درخواست همکاری
            استفاده کنید.
          </p>
        </div>

        <div className={styles.information__grid}>
          <article className={styles.infoCard}>
            <div className={styles.infoCard__icon}>
              <FaEnvelope />
            </div>
            <h3>ایمیل</h3>
            <p>برای ارسال پیشنهادها و درخواست‌های همکاری</p>
            <span>ایمیل کاری شما</span>
            <span>rezanikafarin100@gmail.com</span>
          </article>

          <article className={styles.infoCard}>
            <div className={styles.infoCard__icon}>
              <FaPhone />
            </div>
            <h3>تماس تلفنی</h3>
            <p>برای گفتگو و دریافت اطلاعات بیشتر</p>
            <span>
              شماره تماس{" "}
              <span>
                {"09186936959"
                  .replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)])
                  .replace(/٬/g, " ")}
              </span>
            </span>
            <span>
              شماره تماس{" "}
              {"09183485509"
                .replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)])
                .replace(/٬/g, " ")}
            </span>
          </article>

          <article className={styles.infoCard}>
            <div className={styles.infoCard__icon}>
              <FaLocationDot />
            </div>
            <h3>موقعیت مکانی</h3>
            <p>آماده همکاری با کسب‌وکارها و مجموعه‌های مختلف</p>
            <span>همکاری حضوری و غیرحضوری</span>
          </article>
        </div>
      </section>

      {/* Contact form */}
      <section className={styles.formSection} id="contact-form">
        <div className={styles.formSection__intro}>
          <span>شروع یک همکاری</span>
          <h2>چه ایده‌ای در ذهن دارید؟</h2>
          <p>
            کمی درباره کسب‌وکار و نیازتان برای ما بنویسید. اطلاعات شما به ما کمک
            می‌کند پیشنهاد مناسب‌تری برای شروع همکاری ارائه دهیم.
          </p>

          <div className={styles.formSection__note}>
            <FaBuilding />
            <div>
              <strong>مخصوص کسب‌وکارها و تولیدکنندگان</strong>
              <span>از فروشگاه‌های کوچک تا مجموعه‌های صنعتی</span>
            </div>
          </div>

          <div className={styles.formSection__note}>
            <FaStore />
            <div>
              <strong>هر ایده‌ای ارزش شنیدن دارد</strong>
              <span>برای شروع همکاری، لازم نیست همه جزئیات مشخص باشد.</span>
            </div>
          </div>
        </div>

        <form className={styles.contactForm}>
          <div className={styles.contactForm__heading}>
            <h3>فرم درخواست همکاری</h3>
            <span>فیلدهای ستاره‌دار ضروری هستند.</span>
          </div>

          <div className={styles.contactForm__grid}>
            <div className={styles.field}>
              <label htmlFor="name">نام و نام خانوادگی *</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="نام خود را وارد کنید"
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="phone">شماره تماس *</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="09xxxxxxxxx"
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="email">ایمیل</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="example@email.com"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="subject">موضوع درخواست *</label>
              <select id="subject" name="subject" required defaultValue="">
                <option value="" disabled>
                  موضوع را انتخاب کنید
                </option>
                <option value="website">طراحی وب‌سایت</option>
                <option value="store">طراحی فروشگاه اینترنتی</option>
                <option value="industrial">وب‌سایت صنعتی و تولیدی</option>
                <option value="consultation">مشاوره و همکاری</option>
                <option value="other">سایر موارد</option>
              </select>
            </div>

            <div className={`${styles.field} ${styles.field__full}`}>
              <label htmlFor="message">توضیحات درخواست *</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="درباره کسب‌وکار یا ایده خود برای ما بنویسید..."
                required
              />
            </div>
          </div>

          <button type="submit" className={styles.contactForm__button}>
            ارسال درخواست
            <FaPaperPlane />
          </button>
        </form>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div>
          <span>POYAPAGE</span>
          <h2>آماده‌اید کسب‌وکارتان را یک قدم جلوتر ببرید؟</h2>
          <p>حضور حرفه‌ای در فضای دیجیتال می‌تواند شروع مسیر تازه‌ای باشد.</p>
        </div>

        <Link href="/portfolio" className={styles.cta__button}>
          مشاهده نمونه‌کارها
          <FaArrowLeft />
        </Link>
      </section>
    </main>
  );
}
