import styles from "./portfolio.module.scss";
import Card from "@/components/Card/Card";

const items = [
  {
    imageAlt: "تصویر نمونه طراحی فروشگاه اینترنتی عینک تیزبین",
    image: "/images/portfolio/tizbin.png",
    title: "فروشگاه اینترنتی",
    description: "فروشگاه عینک تیزبین",
    href: "",
  },
  {
    imageAlt: "تصویر نمونه طراحی فروشگاه اینترنتی پوشانا",
    image: "/images/portfolio/poshana.png",
    title: "فروشگاه اینترنتی",
    description: "فروشگاه لباس و کفش پوشانا",
    href: "",
  },
  {
    imageAlt: "تصویر نمونه طراحی پلتفرم کسب‌وکار تولید اوکی",
    image: "/images/portfolio/tolidok.png",
    title: "پلتفرم کسب‌وکار",
    description: "پلتفرم جامع معرفی و حمایت از کسب‌وکارها",
    href: "",
  },
  // {image : "",title : "وب سایت شرکتی" ,description : "شرکت صنایع فلزی آریا", href : ""},
];

const Portfolio = () => {
  return (
    <section className={`${styles.portfolio} wrapper`}>
      {items.map((item) => (
        <Card
          key={item.description}
          image={item.image}
          title={item.title}
          description={item.description}
          imageAlt={item.imageAlt}
        />
      ))}
    </section>
  );
};

export default Portfolio;
