
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock3 } from "lucide-react";
import { notFound } from "next/navigation";

import { articles } from "@/data/articles";
import styles from "./article.module.scss";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return {
      title: "مقاله پیدا نشد | پویا پیج",
    };
  }

  return {
    title: `${article.title} | پویا پیج`,
    description: article.excerpt,
    alternates: {
      canonical: `/articles/${article.slug}`,
    },
  };
}

const ArticlePage = async ({ params }: Props) => {
  const { slug } = await params;

  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <main className={styles.article}>
      <header className={styles.hero}>
        <div className={styles.hero__content}>
          <Link href="/articles" className={styles.hero__back}>
            <ArrowRight size={17} />
            بازگشت به مقالات
          </Link>

          <span className={styles.hero__category}>
            {article.category}
          </span>

          <h1>{article.title}</h1>

          <p>{article.excerpt}</p>

          <div className={styles.hero__meta}>
            <span>
              <CalendarDays size={16} />
              {article.date}
            </span>

            <span>
              <Clock3 size={16} />
              {article.readTime} مطالعه
            </span>
          </div>
        </div>
      </header>

      <div className={styles.content}>
        <article className={styles.content__body}>
          <p className={styles.content__intro}>
            {article.intro}
          </p>

          {article.sections.map((section, index) => (
            <section
              className={styles.content__section}
              key={index}
            >
              <h2>{section.heading}</h2>

              {section.paragraphs.map((paragraph, paragraphIndex) => (
                <p key={paragraphIndex}>
                  {paragraph}
                </p>
              ))}
            </section>
          ))}

          <div className={styles.content__cta}>
            <h2>برای توسعه کسب‌وکار خود آماده‌اید؟</h2>

            <p>
              اگر به طراحی یا توسعه وب‌سایت نیاز دارید،
              خوشحال می‌شویم درباره پروژه شما گفت‌وگو کنیم.
            </p>

            <Link href="/contact">
              ارتباط با پویا پیج
              <ArrowRight size={17} />
            </Link>
          </div>
        </article>

        <aside className={styles.sidebar}>
          <h2>مقالات دیگر</h2>

          {articles
            .filter((item) => item.slug !== article.slug)
            .map((item) => (
              <Link
                href={`/articles/${item.slug}`}
                key={item.slug}
                className={styles.sidebar__link}
              >
                {item.title}
                <ArrowRight size={15} />
              </Link>
            ))}

          <Link href="/services" className={styles.sidebar__services}>
            مشاهده خدمات پویا پیج
          </Link>
        </aside>
      </div>
    </main>
  );
};

export default ArticlePage;
