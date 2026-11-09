"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./portfolio.module.scss";

const projects = [
  {
    id: 1,
    title: "فروشگاه عینک تیزبین",
    category: "فروشگاهی",
    type: "فروشگاه اینترنتی",
    description:
      "طراحی فروشگاه اینترنتی تخصصی عینک با دسته‌بندی محصولات، فیلترهای کاربردی و تجربه خرید ساده و جذاب.",
    image: "/images/portfolio/tizbin.png",
    technologies: ["React", "javaScript", "SCSS"],
  },
  {
    id: 2,
    title: "فروشگاه پوشانا",
    category: "فروشگاهی",
    type: "فروشگاه اینترنتی",
    description:
      "طراحی فروشگاه اینترنتی پوشاک و کفش با تمرکز بر نمایش محصولات، دسته‌بندی مناسب و تجربه کاربری روان.",
    image: "/images/portfolio/poshana.png",
    technologies: ["Next.js", "javaScript", "TailwindCss", "SCSS"],
  },
  {
    id: 3,
    title: "تولید اوکی",
    category: "پلتفرم",
    type: "پلتفرم کسب‌وکار",
    description:
      "ایده یک بستر جامع برای معرفی، ارتباط و حمایت از شرکت‌ها و واحدهای تولیدی و کسب‌وکارها.",
    image: "/images/portfolio/tolidok.png",
    technologies: ["React", "JavaScript", "SCSS"],
  },
];

const filters = ["همه پروژه‌ها", "فروشگاهی", "پلتفرم"];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("همه پروژه‌ها");

  const filteredProjects =
    activeFilter === "همه پروژه‌ها"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <main className={styles.portfolioPage}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.wrapper}>
          <span className={styles.eyebrow}>OUR PORTFOLIO</span>

          <h1>
            نمونه‌کارهای <span>پویا پیج</span>
          </h1>

          <p>
            هر پروژه، تجربه‌ای تازه و فرصتی برای خلق یک راهکار دیجیتال ارزشمند
            است. در این بخش با نمونه‌هایی از ایده‌ها و پروژه‌های طراحی و توسعه
            وب آشنا شوید.
          </p>

          <div className={styles.heroStats}>
            <div>
              <strong>{projects.length.toLocaleString("fa-IR")}</strong>
              <span>نمونه پروژه</span>
            </div>

            <div className={styles.statDivider}></div>

            <div>
              <strong>Web</strong>
              <span>طراحی و توسعه</span>
            </div>

            <div className={styles.statDivider}></div>

            <div>
              <strong>Responsive</strong>
              <span>طراحی واکنش‌گرا</span>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className={styles.portfolioSection}>
        <div className={styles.wrapper}>
          <div className={styles.sectionHeader}>
            <div>
              <span className={styles.sectionLabel}>SELECTED PROJECTS</span>
              <h2>نگاهی به پروژه‌های ما</h2>
              <p>
                نمونه‌هایی از طراحی فروشگاه‌های اینترنتی و راهکارهای اختصاصی تحت
                وب.
              </p>
            </div>

            <div className={styles.projectCount}>
              {filteredProjects.length.toLocaleString("fa-IR")} پروژه
            </div>
          </div>

          {/* Filters */}
          <div className={styles.filters}>
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={activeFilter === filter ? styles.activeFilter : ""}
                onClick={() => setActiveFilter(filter)}
                aria-pressed={activeFilter === filter}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Project Cards */}
          <div className={styles.projectGrid}>
            {filteredProjects.map((project) => (
              <article className={styles.projectCard} key={project.id}>
                <div className={styles.projectImage}>
                  <img src={project.image} alt={project.title} />

                  <span className={styles.projectType}>{project.type}</span>
                </div>

                <div className={styles.projectContent}>
                  <div className={styles.projectMeta}>
                    <span>PROJECT {String(project.id).padStart(2, "0")}</span>
                    <span>{project.category}</span>
                  </div>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className={styles.technologies}>
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className={styles.projectLink}
                    aria-label={`درخواست طراحی پروژه‌ای مشابه ${project.title}`}
                  >
                    درخواست پروژه مشابه
                    <span aria-hidden="true">←</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <p className={styles.emptyMessage}>
              در این دسته‌بندی هنوز پروژه‌ای ثبت نشده است.
            </p>
          )}
        </div>
      </section>

      {/* Collaboration CTA */}
      <section className={styles.collaboration}>
        <div className={styles.wrapper}>
          <div>
            <span className={styles.sectionLabel}>LET'S WORK TOGETHER</span>
            <h2>پروژه بعدی می‌تواند متعلق به شما باشد!</h2>
            <p>
              اگر برای کسب‌وکار خود به یک وب‌سایت حرفه‌ای نیاز دارید، خوشحال
              می‌شویم درباره ایده شما گفت‌وگو کنیم.
            </p>
          </div>

          <Link href="/contact" className={styles.contactButton}>
            شروع همکاری
            <span aria-hidden="true">←</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
