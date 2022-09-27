import { useEffect } from 'react';
import '../styles/globals.css';
import Layout from '../components/Layout';
import 'bootstrap/dist/css/bootstrap.css';

function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    require("bootstrap/dist/js/bootstrap");
},[])

  return(
    <Layout>
       <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;
