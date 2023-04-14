import Head from "next/head";
import styles from "./layout.module.css";
import { navLinks } from "../lib/navLinks";
import Link from "next/link";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>
      <header>{home ? Home_nav() : <div>Other Page Header</div>}</header>
      <main>
        <h1>Layout</h1>
        {children}
      </main>
      <footer>Footer</footer>
    </div>
  );
}

function Home_nav() {
  return (
    <nav className={styles.nav}>
      {navLinks.map((link, i) => {
        return (
          <div className={styles.containerNav}>
          <ul key={link.name} className={styles.ulLink}>
            <Link href={{ pathname: link.path, query: { id: "1" } }} className={styles.link}>
              <li>{link.name}</li>
            </Link>
          </ul>
          </div>
        );
      })}
    </nav>
  );
}
