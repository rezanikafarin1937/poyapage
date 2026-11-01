"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./navbar.module.scss"


const navs = [
    {title : "صفحه اصلی",link : "/"},
    {title : "نمونه کارها",link : "/portfolio"},
    {title : "خدمات",link : "/services"},
    {title : "درباره من",link : "/about"},
    {title : "تماس با من",link : "/contact"}
]

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className={styles.navbar}>
      {navs.map((nav,index) => (
        <Link className={`${styles.navbar__item} ${pathname === nav.link ? styles.navbar__active : ""}`} href={nav.link} key={index}>{nav.title}</Link>
      ))}
    </div>
  )
}

export default Navbar
