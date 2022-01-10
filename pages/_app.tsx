import type { AppProps } from "next/app";
import { SSRProvider } from "react-bootstrap";
import Layout from "../components/layout";

import "../styling/app.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SSRProvider>
  );
}

export default MyApp;
