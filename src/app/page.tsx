import styles from "./page.module.scss";
import Banner from '@/components/Banner/Banner';
import Benefits from '../components/Benefits/Benefits';

export default function Home() {
  return (
    <div className={styles.page}>
      <Banner/>
      <Benefits/>
    </div>
  );
}
