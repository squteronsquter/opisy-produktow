import { FaExclamationTriangle } from "react-icons/fa";
import Layout from "@/components/Layout";
import styles from "@/styles/Error.module.css";
import Link from "next/link";

export default function pageNotFound() {
  return (
    <Layout>
      <section className={styles.error}>
        <h1>
          <FaExclamationTriangle /> 404
        </h1>
        <p>Sorry, the page you are looking for does not exist</p>
        <p>
          <Link href="/">Go back to Home Page</Link>
        </p>
      </section>
    </Layout>
  );
}
