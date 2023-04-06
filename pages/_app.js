import '../styles/globals.css'
import Navbar from './posts/navbar'

function MyApp({ Component, pageProps }) {
  console.log(pageProps);
  return (
    <>
    <Navbar></Navbar>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
