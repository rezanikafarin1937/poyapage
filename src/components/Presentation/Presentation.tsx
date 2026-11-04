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
      <section>
        <h2 className={styles.parent__about}>نمونه کارهای من</h2>
        <h1 className={styles.parent__title}>آخرین پروژه ها</h1>
        <h3 className={styles.parent__description}>
          <span>
            در این قسمت تعدادی از پروژه های انجام شده را مشاهده میکنید{" "}
          </span>
          <span>برای مشاهده جزییات هر پروژه روی آن کلیک کنید</span>
        </h3>
      </section>

      <section className={styles.parent__btns}>
        {items.map((items, index) => (
          <Button variant="simple" key={index}>
            {items.title}
          </Button>
        ))}
      </section>
    </div>
  );
};

export default Presentation;
