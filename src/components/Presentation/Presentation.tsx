import Button from "../Button/Button";
import styles from "./presentation.module.scss";

const items = [
  { title: "همه", link: "" },
  { title: "وب سایت شرکتی", link: "" },
  { title: "فروشگاهی", link: "" },
  { title: "سفارشی", link: "" },
  { title: "طراحی رابط کاربری", link: "" },
];

const Presentation = () => {
  return (
    <div className={`${styles.parent} wrapper`}>
      <section aria-labelledby="presentation-title">
        <p className={styles.parent__about}>نمونه کارهای من</p>
        <h2  id="presentation-title" className={styles.parent__title}>آخرین پروژه ها</h2>
        <p className={styles.parent__description}>
          <span>
            در این قسمت تعدادی از پروژه های انجام شده را مشاهده میکنید{" "}
          </span>
          <span>برای مشاهده جزییات هر پروژه روی آن کلیک کنید</span>
        </p>
      </section>

      <nav  aria-label="دسته‌بندی نمونه‌کارها" className={styles.parent__btns}>
        {items.map((items) => (
          <div  className={styles.parent__marginX} key={items.title}>
            <Button variant="simple">{items.title}</Button>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Presentation;
