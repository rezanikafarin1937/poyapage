
import styles from "./banner.module.scss";

const Banner = () => {
  return (
    <div className={`${styles.banner} wrapper`}>
        <div dir="ltr">
            <div className={styles.banner__fontsize16}>سلام من</div>
            <h3 className={styles.banner__fontsize48}>رضا نیک آفرین</h3>
            <h2 className={styles.banner__fontsize18}>توسعه دهنده فرانت اند و طراح وب</h2>
            <div className="margin-y"></div> 
            <h1 className={styles.banner__fontsize14}>طراحی و پیاده سازی وب سایتهای مدرن</h1>
            <h4 className={styles.banner__fontsize14}>به کسب و کارها کمک میکنم تا حضور آنلاین قدرتمندتری داشته باشند</h4>
        </div>
    </div>
  );
};

export default Banner;