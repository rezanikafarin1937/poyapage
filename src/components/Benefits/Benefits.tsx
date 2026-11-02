import Support from "@/icons/Support";
import Responsive from "@/icons/Responsive";
import OnTime from "@/icons/OnTime";
import Development from "@/icons/Development";
import ServiceCard from "../ServiceCard/ServiceCard ";
import styles from "./benefits.module.scss";

const Benefits = () => {
  return (
    <div className={styles.parent}>
      <ServiceCard   title="تحویل به موقع " description="با کیفیت بالا">
        <OnTime />
      </ServiceCard> 

      <ServiceCard  title="توسعه مدرن" description="React / Next.js">
        <Development />
      </ServiceCard>

      <ServiceCard  title="طراحی ریسپانسیو" description="در همه دستگاه ها">
        <Responsive />
      </ServiceCard>

      <ServiceCard  title="پشتیبانی و مشاوره" description="در تمامی مراحل پروژه">
        <Support />
      </ServiceCard>

    </div>
  );
};

export default Benefits;
