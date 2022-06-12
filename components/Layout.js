import Head from "next/head";
import Header from "./Header";
import styles from "@/styles/Layout.module.css";
import Footer from "./Footer";

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      <main className={styles.container}>{children}</main>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "Marketing internetowy",
  description: "Jak pisać lepsze opisy produktów, które sprzedają.",
};
