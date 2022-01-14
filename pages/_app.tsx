import type { AppProps } from "next/app";
import { useState } from "react";
import { SSRProvider } from "react-bootstrap";
import AppContext from "../appContext";
import Layout from "../components/layout";

import "../styling/app.scss";

function MyApp({ Component, pageProps }: AppProps) {
  const [openingTimes, setOpeningTimes] = useState();
  const value = { openingTimes, setOpeningTimes };
  return (
    <SSRProvider>
      <AppContext.Provider value={value}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppContext.Provider>
    </SSRProvider>
  );
}

export default MyApp;
