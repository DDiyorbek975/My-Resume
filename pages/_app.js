import 'bootstrap-icons/font/bootstrap-icons.css';
import Head from 'next/head';
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return(
    <>
    <Head>
        <link 
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" 
          rel="stylesheet"
        />
      </Head>
    <Component {...pageProps} />
    </>
  ) 
}
