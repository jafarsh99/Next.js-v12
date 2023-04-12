import useSWR, {SWRConfig} from "swr";

// const fetcher = (...args) => fetch(...args).then((res) => res.json());
// test
//test
const fetcher = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    const error = new Error("Error saat fetching data");
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

export default function Users({fallback}) {
  return(
   <SWRConfig value={{fallback}}>
   {getData()}

   </SWRConfig> 
  )
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/users");
  const users = await res.json();

  return {
    props: {
      fallback:{
        '/api/users': users
      }
    },
  };
}

//custom hook
function getData() {

  const { data, error } = useSWR('http://localhost:3000/api/users', fetcher);

  if (error) return <div>Error fetching data</div>;
  if (!data) return <div>Loading...</div>;


  return (
    <article>
      {data.map((u) => (
        <div key={u.id}>
          <h1>{u.name}</h1>
          <p>{u.job}</p>
        </div>
      ))}
    </article>
  );


  // const { data, error } = useSWR("http://localhost:3000/api/users", fetcher, {
  //   onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
  //     if (error.status === 404) return;

  //     if (key === "/api/user") return;

  //     if (retryCount >= 10) return;

  //     setTimeout(() => revalidate({ retryCount }), 5000);
  //   },
  // });

  // return {
  //   user: data,
  //   isLoading: !error && !data,
  //   isError: error,
  // };
}

{/* <SWRConfig value={{
  refreshInterval:3000,
  fetcher: (resource, init) => fetch(resource, init).then(res=> res.json())
}}>

</SWRConfig> */}
