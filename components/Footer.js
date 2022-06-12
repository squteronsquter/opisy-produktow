import Link from "next/link";
import styles from "@/styles/Footer.module.css";
export default function Footer() {
  return (
    <>
      <footer className={styles.footerWrapper}>
        <p className={styles.footerText}>
          Copyright &copy; 2022
          <Link href="https://insidedms.com">
            <a className={styles.footerLink}>DMS</a>
          </Link>
        </p>
      </footer>
    </>
  );
}
