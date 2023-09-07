"use client";

/* Core */
import Link from "next/link";
import { usePathname } from "next/navigation";

/* Instruments */
import styles from "../styles/layout.module.css";

export const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <Link
        className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}
        href="/"
      >
        Home
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/verify" ? styles.active : ""
        }`}
        href="/verify"
      >
        Verify
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/user" ? styles.active : ""
        }`}
        href="/user"
      >
        User
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/products" ? styles.active : ""
        }`}
        href="/products"
      >
        Products
      </Link>
    </nav>
  );
};
