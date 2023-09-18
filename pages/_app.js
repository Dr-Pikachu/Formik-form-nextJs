import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Formik Form</title>
        <meta
          name="description"
          content="#fromikdata #reactjs #formikfrom #nextJs"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
