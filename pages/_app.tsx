import { DefaultSeo, LocalBusinessJsonLd } from "next-seo";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect, useState } from "react";
import { SSRProvider } from "react-bootstrap";
import AppContext from "../appContext";
import Layout from "../components/layout";
import { OpeningTime } from "../configuration/opening-times";
import * as gtag from "../lib/gtag";
import "../styling/app.scss";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  const [openingTimes, setOpeningTimes] = useState<OpeningTime[]>([]);

  const value = { openingTimes, setOpeningTimes };

  const title = "Domestic & Commercial Drain Services in Dudley, West Midlands";
  const description =
    "We serve Dudley, West Midlands - Blocked Drains, Drainage, Drain Cleaning. Fast & reliable service. No VAT charges. Domestic & Commercial Drain Services.";

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <DefaultSeo
        title={title}
        description={description}
        canonical="https://www.dudleydrains.co.uk"
        openGraph={{
          type: "website",
          url: "https://www.dudleydrains.co.uk",
          title: title,
          description: description,
        }}
      />
      <LocalBusinessJsonLd
        type="Drainage service"
        id="https://www.dudleydrains.co.uk"
        name="Domestic & Commercial Drain Services"
        description={description}
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
