import styles from "./header.module.scss";
import Navbar from "@/components/Navbar/Navbar";
import Logo from "@/components/Logo/Logo";

const Header = () => {
  return (
    <header className={`wrapper ${styles.header}`}>
        <div>درخواست پروژه</div>
        <Navbar />
        <Logo/>
    </header>
  );
};

export default Header;
