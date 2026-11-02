import styles from "./banner.module.scss";

const Banner = () => {
  return (
    <div className={`${styles.banner} wrapper`}>
        <h1 dir="ltr">
            <div className={styles.banner__fontsize16}>سلام من</div>
            <div className={styles.banner__fontsize48}>رضا نیک آفرین</div>
            <div className={styles.banner__fontsize18}>توسعه دهنده فرانت اند و طراح وب</div>
            <div className="margin-y"></div> 
            <div className={styles.banner__fontsize14}>طراحی و پیاده سازی وب سایتهای مدرن</div>
            <div className={styles.banner__fontsize14}>به کسب و کارها کمک میکنم تا حضور آنلاین قدرتمندتری داشته باشند</div>
        </h1>
    </div>
  );
};

export default Banner;