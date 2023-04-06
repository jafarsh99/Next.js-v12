import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import nextjs from "../../public/images/mss.png";
import styles from "../../styles/sass/style.module.scss";
import Layout from "../layout/layout.js";
import { useState, useEffect } from "react";


function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default function FirstPost() {
  const [posts, setPosts] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    //make some delay using sleep function
    sleep(3000).then(() => {
    setPosts({ title:"New Post", description:"Posts data from server props"});
    setLoading(false);
});
  },[]);

  if(isLoading) return <p>Loading....</p>
  if(!posts) return <p>No Data Available</p>

  return (
    <Layout>
      <Head>
        <title>Next.js First Post</title>
        {/* <Script src='' strategy='lazyOnLoad' onLoad={()}></Script> */}
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.21.4/babel.min.js"
          integrity="sha512-FneB6sFwq3OQG08dlVoj9iDn0XZG68wD9yg80ofbMCCzW8BioIgsAwSciFaVjM77PdsKdvz3kt/5MKwd+KVGDw=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        ></script>
      </Head>

      {/* pengaplikasian style untuk class elemen */}
      {/* <h1 className={styles['title']}>Style dengan module scss </h1> */}
      {/* <h1 className={styles.title}>First Blog Post</h1> */}
      {/* <h1 className='title'>Style dengan jsx</h1> */}

      {/* <style jsx>
        {
            `
            .title{
                font-size:129px;
                color:red;
            }
            `
        }
    </style>

    <Image
        src={nextjs}
        // src='images/mss.png'
        width={300}
        height={300}
    /> */}

      <h1>{posts.title}</h1>
      <p>{posts.description}</p>
    </Layout>
  );
}
