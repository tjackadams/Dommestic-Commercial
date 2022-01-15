import type { AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";
import { SSRProvider } from "react-bootstrap";
import AppContext from "../appContext";
import Layout from "../components/layout";
import { OpeningTime } from "../configuration/opening-times";

import "../styling/app.scss";

function MyApp({ Component, pageProps }: AppProps) {
  const [openingTimes, setOpeningTimes] = useState<OpeningTime[]>([]);

  const value = { openingTimes, setOpeningTimes };

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <SSRProvider>
        <AppContext.Provider value={value}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AppContext.Provider>
      </SSRProvider>
    </>
  );
}

export default MyApp;
