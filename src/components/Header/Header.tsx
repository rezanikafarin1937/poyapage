import styles from "./header.module.scss";
import Navbar from "@/components/Navbar/Navbar";
import Logo from "@/components/Logo/Logo";
import Button from "../Button/Button";
import DownloadIcon from '../../icons/DownloadIcon';

const Header = () => {
  return (
    <header className={`wrapper ${styles.header}`}>
        <Button variant="noColor">
          <span className={styles.header__parentIcon}>
            <DownloadIcon width="18px" height="18px"/>
          </span>
          <span>دانلود رزومه</span>
        </Button>
        <Navbar />
        <Logo/>
    </header>
  );
};

export default Header;
