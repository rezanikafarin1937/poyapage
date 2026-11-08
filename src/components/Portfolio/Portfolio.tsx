import styles from "./portfolio.module.scss";
import Card from "@/components/Card/Card";


const items = [
    {image : "/images/portfolio/tizbin.png",title : "فروشگاه اینترنتی" ,description : "فروشگاه عینک تیزبین", href : ""},
    {image : "/images/portfolio/poshana.png",title : "فروشگاه اینترنتی" ,description : "فروشگاه لباس و کفش پوشانا", href : ""},
{image : "/images/portfolio/tolidok.png",title : "پلتفرم کسب‌وکار",description : "پلتفرم جامع معرفی و حمایت از کسب‌وکارها",href : ""},
    // {image : "",title : "وب سایت شرکتی" ,description : "شرکت صنایع فلزی آریا", href : ""},

]

const Portfolio = () => {
  return (
    <div className={`${styles.portfolio} wrapper`}>
      {items.map((item,index) => (
        <Card key={index} image={item.image} title={item.title} description={item.description}/>
      ))}
    </div>
  )
}

export default Portfolio
