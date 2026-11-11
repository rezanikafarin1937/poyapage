
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock3, CalendarDays } from "lucide-react";

import { articles } from "@/data/articles";
import styles from "./articles.module.scss";

export const metadata: Metadata = {
  title: "مقالات آموزشی طراحی سایت | پویا پیج",
  description:
    "مقالات آموزشی پویا پیج درباره طراحی سایت، توسعه وب، طراحی سایت صنعتی، فروشگاهی و راهکارهای حضور آنلاین کسب‌وکارها.",
  alternates: {
    canonical: "/articles",
  },
};

const BlogPage = () => {
  return (
    <main className={styles.blog}>
      <section className={styles.hero}>
        <div className={styles.hero__content}>
          <span className={styles.hero__label}>
            BLOG & ARTICLES
          </span>

          <h1>
            مقالات و <span>دانش وب</span>
          </h1>

          <p>
            مطالب آموزشی و کاربردی درباره طراحی سایت، توسعه وب
            و راهکارهای حضور حرفه‌ای کسب‌وکارها در فضای آنلاین.
          </p>
        </div>
      </section>

      <section className={styles.articles}>
        <div className={styles.articles__heading}>
          <div>
            <span>مطالب آموزشی</span>
            <h2>آخرین مقالات</h2>
          </div>

          <p>
            مطالبی برای آشنایی بیشتر با دنیای طراحی و توسعه وب
          </p>
        </div>

        <div className={styles.articles__grid}>
          {articles.map((article) => (
            <article
              className={styles.card}
              key={article.slug}
            >
              <div className={styles.card__top}>
                <span className={styles.card__category}>
                  {article.category}
                </span>

                <span className={styles.card__icon}>
                  <ArrowLeft size={22} />
                </span>
              </div>

              <h2 className={styles.card__title}>
                <Link href={`/articles/${article.slug}`}>
                  {article.title}
                </Link>
              </h2>

              <p className={styles.card__excerpt}>
                {article.excerpt}
              </p>

              <div className={styles.card__meta}>
                <span>
                  <CalendarDays size={15} />
                  {article.date}
                </span>

                <span>
                  <Clock3 size={15} />
                  {article.readTime} مطالعه
                </span>
              </div>

              <Link
                href={`/articles/${article.slug}`}
                className={styles.card__link}
              >
                مطالعه مقاله
                <ArrowLeft size={17} />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default BlogPage;
