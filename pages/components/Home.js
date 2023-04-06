import Layout from "../layout/layout.js";

export default function Home({ posts }) {
  return (
    <Layout>
      <h1>{posts.title}</h1>
      <p>{posts.description}</p>
    </Layout>
  );
}

export async function getStaticProps() {
  //Get external data from the file system, API, DB, etc.
  const posts = {
    title: "Daily Tuition Post",
    description: "Post data From Static Props",
  };

  //The value of the 'props' ket will be
  //passed top the 'Home' component
  return {
    props: { posts },
  };
}
