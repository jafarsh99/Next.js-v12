import Head from "next/head";
import styles from "./layout.module.css";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>
      <header>
        {home ? <div>Home Page Header</div> : <div>Other Page Header</div>}
      </header>
      <main>
        <h1>Layout</h1>
        {children}
      </main>
      <footer>Footer</footer>
    </div>
  );
}
