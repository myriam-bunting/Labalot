import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Labalot</title>
        <meta name="description" content="Animal management system" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Labalot!</a>
        </h1>

        <p className={styles.description}>
          Lab animal management tool <br /> Created by researchers, for
          researchers
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Upload your Data</h2>
            <p>Easy to import your current excel spreadsheets and get going </p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2> Manage your Colonies</h2>
            <p>
              Add, view and update your colonies, accessible from any location
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Experiment Planning</h2>
            <p>Designate animals to research protocls and link sample data</p>
          </a>

          <a href="http://localhost:3000/dashboard" className={styles.card}>
            <h2>Share your Info</h2>
            <p>
              Colony details are shown on a dashboard. Easy to share and plan
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image
              src="/mouseIcon.png"
              alt="mouse icon"
              width={72}
              height={34}
            />
          </span>
        </a>
      </footer>
    </div>
  );
}
