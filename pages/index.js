import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          TEST <Link href="components/FormikForm">FORMIK FORM</Link>
        </h1>
      </main>
    </div>
  );
}
