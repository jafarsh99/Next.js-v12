import Layout from "../layout/layout.js";

export default function Page(props) {
  return (
    <Layout>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </Layout>
  );
}

export async function getServerSideProps() {
  const posts = {
    title: "Daily Tuition Post",
    description: "Post Data From Server Side Rendering",
  };

  return {
    props: posts,
  };
}
