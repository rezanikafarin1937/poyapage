import Image from "next/image";
import Link from "next/link";
import styles from "./about.module.scss";

export default function AboutPage() {
  return (
    <main className={styles.aboutPage}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.wrapper}>
          <span className={styles.eyebrow}>ABOUT POYAPAGE</span>

          <h1>
            درباره <span>پویا پیج</span>
          </h1>

          <h2>همراه کسب‌وکارها در مسیر تحول دیجیتال</h2>

          <p>
            از یک ایده تا یک تجربه دیجیتال ارزشمند؛ همراه شما برای ساختن حضوری
            حرفه‌ای و مؤثر در دنیای وب.
          </p>

          <Link href="/contact" className={styles.heroButton}>
            شروع یک همکاری
            <span aria-hidden="true">←</span>
          </Link>
        </div>
      </section>

      {/* Introduction */}
      <section className={styles.introduction}>
        <div className={styles.wrapper}>
          <div className={styles.introContent}>
            <div className={styles.sectionHeading}>
              <span className={styles.sectionLabel}>POYAPAGE</span>
              <h2>ایده‌ها را به تجربه‌های دیجیتال تبدیل می‌کنیم</h2>
            </div>

            <p>
              دنیای امروز، دنیای ارتباطات دیجیتال است. حضور حرفه‌ای در فضای وب
              دیگر فقط یک انتخاب نیست؛ بلکه فرصتی ارزشمند برای معرفی
              توانمندی‌ها، توسعه ارتباط با مشتریان و رشد کسب‌وکارهاست.
            </p>

            <p>
              پویا پیج با هدف طراحی و توسعه راهکارهای کاربردی در دنیای وب شکل
              گرفته است؛ جایی که تلاش می‌کنیم ایده‌ها و نیازهای کسب‌وکارها را به
              تجربه‌هایی حرفه‌ای، کارآمد و متناسب با اهداف آن‌ها تبدیل کنیم.
            </p>
          </div>

          <div className={styles.introAccent}>
            <span className={styles.accentMark}>P</span>
            <p>
              طراحی هدفمند،
              <br />
              توسعه اصولی،
              <br />
              تجربه‌ای ماندگار.
            </p>
          </div>
        </div>
      </section>

      {/* Personal introduction */}
      <section className={styles.profile}>
        <div className={styles.wrapper}>
          <div className={styles.profileContent}>
            <span className={styles.sectionLabel}>BEHIND POYAPAGE</span>

            <h2>
              تجربه‌ای که پشتوانه
              <span> مسیر ماست</span>
            </h2>

            <p>
              من رضا نیک‌آفرین، توسعه‌دهنده فرانت‌اند و طراح وب هستم. فعالیت
              حرفه‌ای خود را با تجربه همکاری در مجموعه‌های نرم‌افزاری آغاز کردم
              و در ادامه، در پروژه‌های مختلف و به‌صورت مستقل به طراحی و توسعه وب
              پرداختم.
            </p>

            <p>
              همکاری با مجموعه‌هایی مانند روشن کاوان و باسلام، فرصت ارزشمندی
              برای کسب تجربه در محیط‌های واقعی توسعه نرم‌افزار و آشنایی با
              نیازهای کاربران و کسب‌وکارها فراهم کرد.
            </p>

            <p>
              در مسیر حرفه‌ای خود با فناوری‌هایی مانند Vue.js، React و Next.js
              کار کرده‌ام و همواره تلاش کرده‌ام دانش فنی خود را در کنار اصول
              طراحی رابط کاربری، کیفیت کدنویسی و تجربه کاربری توسعه دهم.
            </p>

            <div className={styles.skills}>
              <span>HTML / CSS</span>
              <span>JavaScript</span>
              <span>Vue.js</span>
              <span>React</span>
              <span>Next.js</span>
              <span>Sass</span>
            </div>
          </div>

          <div className={styles.profileSide}>
            <div className={styles.profileQuote}>
              <div className={styles.experienceImage}>
                <Image
                  src="/images/about/reza.png"
                  alt="تصویر جمعی همکاران رضا نیک‌آفرین در شرکت باسلام قم"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <span className={styles.imageNumber}>0</span>
             
              </div>


              <p>
                برای من، توسعه وب فقط نوشتن کد نیست؛ بلکه تبدیل یک نیاز واقعی به
                راهکاری کاربردی است.
              </p>
            </div>

            <div className={styles.profileCaption}>
              <strong>رضا نیک‌آفرین</strong>
              <span>توسعه‌دهنده فرانت‌اند و طراح وب</span>
            </div>
          </div>
        </div>
      </section>

      {/* Work experience */}
      <section className={styles.experience}>
        <div className={styles.wrapper}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>MY JOURNEY</span>
            <h2>بخشی از مسیر حرفه‌ای من</h2>
            <p>
              تجربه همکاری در کنار افراد متخصص، بخشی ارزشمند از مسیر یادگیری و
              رشد حرفه‌ای من بوده است.
            </p>
          </div>

          <div className={styles.experienceList}>
            {/* Roshan Kavan */}
            <article className={styles.experienceCard}>
              <div className={styles.experienceImage}>
                <Image
                  src="/images/about/roshan-kavan.png"
                  alt="تجربه همکاری رضا نیک‌آفرین در شرکت روشن کاوان اراک"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <span className={styles.imageNumber}>01</span>
              </div>

              <div className={styles.experienceInfo}>
                <span className={styles.experienceDate}>۱۳۹۷ تا ۱۳۹۸</span>

                <h3>شرکت روشن کاوان</h3>
                <span className={styles.experienceLocation}>اراک</span>

                <p>
                  تجربه همکاری در محیط توسعه نرم‌افزار و فعالیت در پروژه وب‌سایت
                  ویسمه (vismeh.com)، با تمرکز بر توسعه رابط کاربری و
                  برنامه‌نویسی فرانت‌اند با Vue.js.
                </p>

                <div className={styles.experienceTags}>
                  <span>Vue.js</span>
                  <span>Front-end</span>
                  <span>Teamwork</span>
                </div>
              </div>
            </article>

            {/* Basalam */}
            <article className={`${styles.experienceCard} ${styles.reverse}`}>
              <div className={styles.experienceImage}>
                <Image
                  src="/images/about/basalam.png"
                  alt="تصویر جمعی همکاران رضا نیک‌آفرین در شرکت باسلام قم"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <span className={styles.imageNumber}>02</span>
              </div>

              <div className={styles.experienceInfo}>
                <span className={styles.experienceDate}>۱۳۹۸ تا ۱۴۰۰</span>

                <h3>مجموعه باسلام</h3>
                <span className={styles.experienceLocation}>قم</span>

                <p>
                  همکاری در یک مجموعه فعال در حوزه تجارت الکترونیک و تجربه حضور
                  در کنار اعضای یک تیم نرم‌افزاری؛ فرصتی ارزشمند برای آشنایی
                  بیشتر با فرایند توسعه محصولات دیجیتال و کار تیمی.
                </p>

                <div className={styles.experienceTags}>
                  <span>Front-end</span>
                  <span>Vue.js</span>
                  <span>Teamwork</span>
                </div>
              </div>
            </article>

            {/* Freelance */}
            <article className={styles.freelanceCard}>
              <div className={styles.freelanceNumber}>03</div>

              <div>
                <span className={styles.experienceDate}>۱۴۰۰ تاکنون</span>

                <h3>فعالیت مستقل و توسعه پروژه‌های وب</h3>

                <p>
                  ادامه مسیر حرفه‌ای در قالب همکاری‌های مستقل و طراحی و توسعه
                  پروژه‌های مختلف با تمرکز بر React و Next.js؛ با توجه به
                  نیازهای واقعی کاربران و کسب‌وکارها.
                </p>

                <div className={styles.experienceTags}>
                  <span>React</span>
                  <span>Next.js</span>
                  <span>JavaScript</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Today */}
      <section className={styles.today}>
        <div className={styles.wrapper}>
          <div className={styles.todayHeading}>
            <span className={styles.sectionLabel}>WHAT WE DO</span>
            <h2>امروز در پویا پیج چه می‌کنیم؟</h2>
            <p>
              تمرکز ما بر خلق وب‌سایت‌هایی است که صرفاً زیبا نباشند، بلکه برای
              کسب‌وکارها کاربرد و ارزش واقعی ایجاد کنند.
            </p>
          </div>

          <div className={styles.services}>
            <article className={styles.serviceCard}>
              <span className={styles.serviceNumber}>01</span>
              <h3>وب‌سایت‌های شرکتی و صنعتی</h3>
              <p>
                معرفی حرفه‌ای مجموعه‌ها، خدمات، توانمندی‌ها و فعالیت‌های
                کسب‌وکارها در فضای وب.
              </p>
            </article>

            <article className={styles.serviceCard}>
              <span className={styles.serviceNumber}>02</span>
              <h3>فروشگاه‌های اینترنتی</h3>
              <p>
                طراحی تجربه خرید ساده و کاربردی برای معرفی محصولات و توسعه فروش
                آنلاین.
              </p>
            </article>

            <article className={styles.serviceCard}>
              <span className={styles.serviceNumber}>03</span>
              <h3>سامانه‌های اختصاصی</h3>
              <p>
                طراحی و توسعه راهکارهای تحت وب متناسب با نیازها و فرایندهای
                اختصاصی هر کسب‌وکار.
              </p>
            </article>
          </div>

          <p className={styles.qualityText}>
            کیفیت اجرا، طراحی واکنش‌گرا، ساختار مناسب، توسعه‌پذیری و توجه به
            جزئیات، از اصول مهم ما در اجرای هر پروژه است.
          </p>
        </div>
      </section>

      {/* Collaboration */}
      <section className={styles.collaboration}>
        <div className={styles.wrapper}>
          <div className={styles.collaborationContent}>
            <span className={styles.sectionLabel}>LET'S WORK TOGETHER</span>

            <h2>همکاری، فرصتی برای خلق ارزش بیشتر</h2>

            <p>
              باور داریم پروژه‌های بزرگ و ارزشمند حاصل هم‌فکری و همکاری افراد
              متخصص هستند.
            </p>

            <p>
              به همین دلیل، پویا پیج از همکاری با شرکت‌های برنامه‌نویسی، تیم‌های
              طراحی و توسعه نرم‌افزار، فریلنسرها و متخصصان حوزه فناوری استقبال
              می‌کند.
            </p>

            <p>
              هدف ما ایجاد ارتباطات حرفه‌ای، مشارکت در پروژه‌های مشترک و استفاده
              از ظرفیت‌های تخصصی برای ارائه راهکارهای بهتر است.
            </p>

            <Link href="/contact" className={styles.collaborationButton}>
              درباره همکاری صحبت کنیم
              <span aria-hidden="true">←</span>
            </Link>
          </div>

          <div className={styles.collaborationVisual}>
            <div className={styles.visualCircle}>
              <span>P</span>
            </div>
            <div className={styles.visualText}>
              <strong>هم‌فکری</strong>
              <span>همکاری</span>
              <strong>رشد مشترک</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className={styles.vision}>
        <div className={styles.wrapper}>
          <span className={styles.sectionLabel}>OUR VISION</span>

          <h2>نگاهی رو به آینده</h2>

          <p>
            چشم‌انداز پویا پیج، حرکت به سمت مجموعه‌ای خلاق و قابل اعتماد در
            زمینه طراحی و توسعه راهکارهای دیجیتال است؛ مجموعه‌ای که بتواند در
            کنار کسب‌وکارها رشد کند و در مسیر توسعه آن‌ها نقش مؤثری داشته باشد.
          </p>

          <strong>پویا پیج؛ از یک ایده تا یک تجربه دیجیتال ارزشمند.</strong>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.finalCta}>
        <div className={styles.wrapper}>
          <div>
            <h2>ایده‌ای برای شروع دارید؟</h2>
            <p>
              خوشحال می‌شویم درباره پروژه یا پیشنهاد همکاری شما بیشتر بدانیم.
            </p>
          </div>

          <Link href="/contact" className={styles.finalButton}>
            با ما در ارتباط باشید
            <span aria-hidden="true">←</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
