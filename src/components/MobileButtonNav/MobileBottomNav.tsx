
"use client";

import {
  HomeIcon,
  ProductsIcon,
  ServicesIcon,
  AboutIcon,
  ContactIcon,
} from "@/icons";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./MobileBottomNav.module.scss";

const navs = [
  {
    key: "home",
    title: "خانه",
    icon: HomeIcon,
    link: "/",
  },
  {
    key: "products",
    title: "نمونه‌کارها",
    icon: ProductsIcon,
    link: "/portfolio",
  },
  {
    key: "services",
    title: "خدمات",
    icon: ServicesIcon,
    link: "/services",
  },
  {
    key: "about",
    title: "درباره من",
    icon: AboutIcon,
    link: "/about",
  },
  {
    key: "contact",
    title: "تماس",
    icon: ContactIcon,
    link: "/contact",
  },
];

const MobileBottomNav = () => {
  const pathname = usePathname();

  return (
    <nav
      className={styles.navbar}
      aria-label="منوی اصلی موبایل"
    >
      {navs.map((nav) => {
        const Icon = nav.icon;
        const isActive = pathname === nav.link;

        return (
          <Link
            className={`${styles.navbar__item} ${
              isActive ? styles.navbar__active : ""
            }`}
            href={nav.link}
            key={nav.key}
            aria-current={isActive ? "page" : undefined}
          >
            <Icon aria-hidden="true" />
            <span>{nav.title}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default MobileBottomNav;






// "use client"
// import {
//   HomeIcon,
//   ProductsIcon,
//   ServicesIcon,
//   AboutIcon,
//   ContactIcon,
// } from "@/icons";


// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import styles from "./MobileBottomNav.module.scss";

// const navs = [
//     {key : "home",title : "خانه" , icon : "", link : "/"},
//     {key : "products",title : "نمونه کارها" , icon : "", link : "/portfolio"},
//     {key : "services",title : "خدمات" , icon : "", link : "/services"},
//     {key : "about",title : "درباره من" , icon : "", link : "/about"},
//     {key : "contact",title : "تماس" , icon : "", link : "/contact"},
// ]


// const mobileIcons = {
//   home: HomeIcon,
//   products: ProductsIcon,
//   services: ServicesIcon,
//   about: AboutIcon,
//   contact: ContactIcon,
// };


// const MobileBottomNav = () => {

//     const pathname = usePathname();

//     return (
//     <nav className={styles.navbar}>
//       {navs.map((nav,index) => {
//         const Icon = nav.icon;
//         return(
//         <Link className={`${styles.navbar__item} ${pathname === nav.link ? styles.navbar__active : ""}`} href={nav.link} key={index}>  
//              <Icon />
//              {nav.title}
//         </Link>
// )})}
//     </nav>
//   )
// }

// export default MobileBottomNav
