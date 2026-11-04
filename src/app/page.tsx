import styles from "./page.module.scss";
import Banner from '@/components/Banner/Banner';
import Benefits from '../components/Benefits/Benefits';
import Presentation from '../components/Presentation/Presentation';

export default function Home() {
  return (
    <div className={styles.page}>
      <Banner/>
      <Benefits/>
      <Presentation/>
    </div>
  );
}
