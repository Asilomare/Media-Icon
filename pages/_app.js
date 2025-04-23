import { useEffect } from 'react';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Import AOS only on client-side
    const AOS = require('aos');
    // Initialize AOS
    AOS.init({
      once: true,
      duration: 800,
    });
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Media Icon</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp; 