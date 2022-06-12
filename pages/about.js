import Layout from "@/components/Layout";
import styles from "@/styles/About.module.css";

export default function AboutPage() {
  return (
    <Layout
      title="O DMS"
      description="DMS - Digital Mind Solutions LTD to kreatywny butik oraz agencja specjalizująca sie w budowaniu stron www i palikacji."
    >
      <h1>DMS - Digital Mind Solutions LTD</h1>
      <h2>Agencja świadczy usługi w zakresie:</h2>
      <ul>
        <li className={styles.aboutList}>
          Projektowania materiałow marketingowych, stron www, aplikacji.
        </li>
        <li className={styles.aboutList}>
          Budowania sklepów internetowych, portali, stron korporacyjncyh oraz
          aplikacji.
        </li>
        <li className={styles.aboutList}>
          Zarządzaniu serwerami i bezpieczeństwem.
        </li>
        <li className={styles.aboutList}>Pozycjonowania stron www</li>
        <li className={styles.aboutList}>Marketingu w Interencie</li>
        <li className={styles.aboutList}>Copywritingu</li>
      </ul>
      <h3>Adres:</h3>
      <p>Digital Mind Solutions LTD</p>
      <p>Office 265b, 182-184 High Street North,</p>
      <p>London E6 2JA,</p>
      <p>United Kingdom</p>
    </Layout>
  );
}
