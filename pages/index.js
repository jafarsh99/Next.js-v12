import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import Layout from './layout/layout.js';

export default function Home() {
  return (

      <Layout home>
        <Link href='/posts/first-post'>
          <h1 className={styles.goto}>
            Go to First Post 👉
          </h1>
        </Link>
      </Layout>

  )
}
