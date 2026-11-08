import Link from "next/link";
import styles from "./services.module.scss";

const services = [
  {
    number: "01",
    icon: "</>",
    title: "طراحی سایت شرکتی و صنعتی",
    description:
      "معرفی حرفه‌ای شرکت‌ها، کارخانه‌ها و مجموعه‌های تولیدی با نمایش خدمات، محصولات، توانمندی‌ها و اطلاعات تماس.",
    features: [
      "معرفی شرکت و خدمات",
      "معرفی محصولات و توانمندی‌ها",
      "طراحی متناسب با هویت برند",
      "نمایش صحیح در موبایل و تبلت",
    ],
  },
  {
    number: "02",
    icon: "▣",
    title: "طراحی فروشگاه اینترنتی",
    description:
      "ایجاد بستری حرفه‌ای برای معرفی و فروش محصولات با ساختاری ساده، قابل استفاده و متناسب با نیاز مشتریان.",
    features: [
      "صفحه محصولات و دسته‌بندی‌ها",
      "جست‌وجو و فیلتر محصولات",
      "صفحه جزئیات محصول",
      "تجربه خرید واکنش‌گرا",
    ],
  },
  {
    number: "03",
    icon: "⌘",
    title: "طراحی و توسعه سایت اختصاصی",
    description:
      "طراحی و پیاده‌سازی وب‌سایت‌ها و سامانه‌هایی که به امکانات و ساختارهای اختصاصی نیاز دارند.",
    features: [
      "بررسی نیازهای پروژه",
      "طراحی ساختار صفحات",
      "پیاده‌سازی امکانات اختصاصی",
      "توسعه‌پذیری و نگهداری آسان",
    ],
  },
  {
    number: "04",
    icon: "✳",
    title: "توسعه رابط کاربری فرانت‌اند",
    description:
      "تبدیل طرح‌های گرافیکی و ایده‌های محصول به رابط کاربری دقیق، استاندارد و واکنش‌گرا.",
    features: [
      "پیاده‌سازی با React و Next.js",
      "توسعه رابط کاربری با Vue.js",
      "کدنویسی ساختارمند و ماژولار",
      "سازگاری با اندازه‌های مختلف صفحه",
    ],
  },
  {
    number: "05",
    icon: "↗",
    title: "بهبود و توسعه وب‌سایت‌های موجود",
    description:
      "ارتقای کیفیت ظاهری و فنی وب‌سایت‌های فعلی و اضافه کردن امکانات جدید متناسب با نیاز کسب‌وکار.",
    features: [
      "بازطراحی بخش‌های مختلف سایت",
      "رفع مشکلات نمایش در موبایل",
      "اصلاح و توسعه رابط کاربری",
      "افزودن قابلیت‌های جدید",
    ],
  },
];

const process = [
  {
    number: "01",
    title: "شناخت نیاز",
    description:
      "ابتدا درباره کسب‌وکار، مخاطبان و هدف پروژه گفت‌وگو می‌کنیم.",
  },
  {
    number: "02",
    title: "برنامه‌ریزی و طراحی",
    description:
      "ساختار صفحات، امکانات و مسیر اجرای پروژه مشخص می‌شود.",
  },
  {
    number: "03",
    title: "طراحی و توسعه",
    description:
      "پروژه با توجه به توافق‌ها و نیازهای مشخص‌شده پیاده‌سازی می‌شود.",
  },
  {
    number: "04",
    title: "بررسی و تحویل",
    description:
      "نتیجه کار بررسی می‌شود و پس از اصلاحات توافق‌شده تحویل داده خواهد شد.",
  },
];

export default function ServicesPage() {
  return (
    <main className={styles.servicesPage}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.wrapper}>
          <span className={styles.eyebrow}>OUR SERVICES</span>

          <h1>
            خدمات <span>پویا پیج</span>
          </h1>

          <h2>راهکارهای دیجیتال برای رشد کسب‌وکار شما</h2>

          <p>
            از طراحی وب‌سایت‌های شرکتی و فروشگاهی تا توسعه رابط کاربری
            و سامانه‌های اختصاصی؛ همراه شما هستیم تا ایده‌هایتان را
            به راهکارهایی کاربردی در دنیای وب تبدیل کنیم.
          </p>

          <Link href="/contact" className={styles.heroButton}>
            درخواست مشاوره و همکاری
            <span aria-hidden="true">←</span>
          </Link>

          <div className={styles.heroNote}>
            طراحی هدفمند <span>•</span> توسعه اصولی <span>•</span> تجربه کاربری بهتر
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className={styles.intro}>
        <div className={styles.wrapper}>
          <div className={styles.introHeading}>
            <span className={styles.sectionLabel}>WHAT WE OFFER</span>
            <h2>برای هر ایده، یک راهکار مناسب</h2>
          </div>

          <p>
            هر کسب‌وکار نیازها و اهداف متفاوتی دارد. به همین دلیل،
            پیش از شروع هر پروژه تلاش می‌کنیم نیاز واقعی آن را بشناسیم
            و راهکاری متناسب با همان هدف ارائه دهیم.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className={styles.serviceSection}>
        <div className={styles.wrapper}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>OUR EXPERTISE</span>
            <h2>خدماتی که ارائه می‌دهیم</h2>
            <p>
              مجموعه‌ای از خدمات طراحی و توسعه وب برای معرفی بهتر،
              ارتباط مؤثرتر و رشد کسب‌وکارها.
            </p>
          </div>

          <div className={styles.serviceGrid}>
            {services.map((service) => (
              <article className={styles.serviceCard} key={service.number}>
                <div className={styles.cardTop}>
                  <span className={styles.serviceNumber}>
                    {service.number}
                  </span>

                  <span className={styles.serviceIcon}>
                    {service.icon}
                  </span>
                </div>

                <h3>{service.title}</h3>

                <p className={styles.serviceDescription}>
                  {service.description}
                </p>

                <ul>
                  {service.features.map((feature) => (
                    <li key={feature}>
                      <span aria-hidden="true">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={styles.cardLink}
                  aria-label={`درخواست مشاوره برای ${service.title}`}
                >
                  درخواست مشاوره
                  <span aria-hidden="true">←</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className={styles.whyUs}>
        <div className={styles.wrapper}>
          <div className={styles.whyContent}>
            <span className={styles.sectionLabel}>WHY POYAPAGE</span>

            <h2>در اجرای هر پروژه به چه چیزهایی اهمیت می‌دهیم؟</h2>

            <p>
              برای ما یک وب‌سایت موفق فقط ظاهر زیبا ندارد؛ باید
              استفاده از آن ساده باشد، نیاز مخاطب را پاسخ دهد و
              در آینده نیز امکان توسعه داشته باشد.
            </p>
          </div>

          <div className={styles.advantages}>
            <article>
              <span>01</span>
              <div>
                <h3>طراحی واکنش‌گرا</h3>
                <p>
                  نمایش مناسب و تجربه کاربری مطلوب در موبایل، تبلت و دسکتاپ.
                </p>
              </div>
            </article>

            <article>
              <span>02</span>
              <div>
                <h3>توجه به نیاز واقعی</h3>
                <p>
                  انتخاب ساختار و امکانات بر اساس هدف و نوع فعالیت کسب‌وکار.
                </p>
              </div>
            </article>

            <article>
              <span>03</span>
              <div>
                <h3>کدنویسی ساختارمند</h3>
                <p>
                  توجه به خوانایی کد، نظم پروژه و امکان توسعه در آینده.
                </p>
              </div>
            </article>

            <article>
              <span>04</span>
              <div>
                <h3>توجه به جزئیات</h3>
                <p>
                  اهمیت دادن به جزئیات بصری، تعاملات و کیفیت اجرای صفحات.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className={styles.process}>
        <div className={styles.wrapper}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>HOW WE WORK</span>
            <h2>مسیر همکاری با پویا پیج</h2>
            <p>
              تلاش می‌کنیم مسیر اجرای پروژه از ابتدا تا تحویل،
              روشن و قابل پیگیری باشد.
            </p>
          </div>

          <div className={styles.processGrid}>
            {process.map((item) => (
              <article className={styles.processCard} key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration */}
      <section className={styles.teamwork}>
        <div className={styles.wrapper}>
          <div>
            <span className={styles.sectionLabel}>COLLABORATION</span>
            <h2>برای همکاری‌های حرفه‌ای آماده‌ایم</h2>

            <p>
              علاوه بر همکاری مستقیم با کسب‌وکارها، از مشارکت با
              شرکت‌های برنامه‌نویسی، تیم‌های طراحی و توسعه نرم‌افزار
              و متخصصان حوزه فناوری استقبال می‌کنیم.
            </p>

            <p>
              اگر برای اجرای پروژه‌های خود به همکاری در زمینه
              توسعه فرانت‌اند و رابط کاربری نیاز دارید، خوشحال
              می‌شویم درباره فرصت همکاری گفت‌وگو کنیم.
            </p>

            <Link href="/contact" className={styles.teamworkButton}>
              پیشنهاد همکاری
              <span aria-hidden="true">←</span>
            </Link>
          </div>

          <div className={styles.teamworkVisual}>
            <span className={styles.visualSymbol}>P</span>
            <span>IDEAS INTO DIGITAL EXPERIENCES</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.wrapper}>
          <div>
            <h2>پروژه‌ای در ذهن دارید؟</h2>
            <p>
              بیایید درباره ایده شما صحبت کنیم و مسیر اجرای آن را بررسی کنیم.
            </p>
          </div>

          <Link href="/contact" className={styles.ctaButton}>
            با ما در ارتباط باشید
            <span aria-hidden="true">←</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
