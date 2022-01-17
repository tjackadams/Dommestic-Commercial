import { DefaultSeo, LocalBusinessJsonLd } from "next-seo";
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
      <DefaultSeo
        title="Blocked Drains | Dommestic & Commercial Drain Services in West Midlands, UK"
        description="We offer a fast & efficient Domestic & Commercial drains service in Dudley and across the West Midlands."
        canonical="https://www.dudleydrains.co.uk"
        openGraph={{
          type: "website",
          url: "https://www.dudleydrains.co.uk",
          title:
            "Blocked Drains | Dommestic & Commercial Drain Services in West Midlands, UK",
          description:
            "We offer a fast & efficient Domestic & Commercial drains service in Dudley and across the West Midlands.",
        }}
      />
      <LocalBusinessJsonLd
        type="Drainage service"
        id="https://www.dudleydrains.co.uk"
        name="Domestic & Commercial Drain Services"
        description="We offer a fast & efficient Domestic & Commercial drains service in Dudley and across the West Midlands."
        url="https://www.dudleydrains.co.uk"
        telephone="07974243764"
        address={{
          streetAddress: "67 Merryfield Rd",
          addressLocality: "Dudley",
          postalCode: "DY1 2ND",
          addressCountry: "UK",
        }}
        geo={{
          latitude: "52.511172",
          longitude: "-2.115357",
        }}
        openingHours={[
          {
            opens: "09:00",
            closes: "17:00",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          },
          {
            opens: "09:00",
            closes: "14:00",
            dayOfWeek: ["Saturday"],
          },
        ]}
      />
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
