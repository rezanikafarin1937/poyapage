import styles from "./header.module.scss";
import Navbar from "@/components/Navbar/Navbar";

const Header = () => {
  return (
    <header className={`wrapper ${styles.header}`}>
        <div>درخواست پروژه</div>
        <Navbar />
        <div>PoyaPage</div>
    </header>
  );
};

export default Header;
