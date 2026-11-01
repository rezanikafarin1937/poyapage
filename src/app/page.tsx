import styles from "./page.module.scss";
import Banner from '../Banner/Banner';

export default function Home() {
  return (
    <div className={styles.page}>
      <Banner/>
    </div>
  );
}
