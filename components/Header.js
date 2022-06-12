import Logo from "@/components/LogoImage";
import Link from "next/link";
import styles from "@/styles/Header.module.css";
export default function Header() {
  return (
    <section className={styles.menuWrapper}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <ul className={styles.menu}>
          <li>
            <Link href="/">Strona główna</Link>
          </li>
          <li>
            <Link href="/about">O nas</Link>
          </li>
        </ul>
      </header>
    </section>
  );
}
