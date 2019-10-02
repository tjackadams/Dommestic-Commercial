const path = require("path")

require("dotenv").config({
  path: `.env`,
})

const config = require("gatsby-plugin-config")

const cfg = {
  siteMetadata: {
    title: "Domestic & Commercial Drain Services in West Midlands, UK",
    description:
      "We offer a fast & efficient Domestic & Commercial drains service in Dudley and across the West Midlands.",
    keywords: "domestic,commercial,drain,dudley,west midlands",
    siteUrl: "https://www.dudleydrains.co.uk",
    image: "",
    author: {
      name: "",
      minibio: "",
    },
    organization: {
      name: "Domestic & Commercial Drain Services",
      url: "https://www.dudleydrains.co.uk",
      logo: "",
    },
    social: {
      twitter: "",
      fbAppID: "",
    },
  },
  plugins: [],
}

if (process.env.CONTEXT === "production") {
  const googleAnalyticsCfg = {
    resolve: "gatsby-plugin-google-analytics",
    options: {
      trackingId: config.GOOGLE_ANALYTICS_TRACKINGID,
      head: true,
      respectDNT: true,
      anonymize: true,
    },
  }
  const faviconCfg = {
    resolve: `gatsby-plugin-favicon`,
    options: {
      logo: "./src/images/favicon.png",
      lang: "en-GB",
      background: "#FFFFFF",
      theme_color: "#00b294",
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        yandex: false,
        windows: false,
      },
    },
  }
  cfg.plugins.push(googleAnalyticsCfg)
  cfg.plugins.push(faviconCfg)
}

cfg.plugins.concat([
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: path.join(__dirname, `src`, `images`),
    },
  },
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  `gatsby-plugin-sitemap`,
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-typescript`,
  {
    resolve: "gatsby-plugin-robots-txt",
    options: {
      policy: [{ userAgent: "*", allow: "/" }],
    },
  },
  {
    resolve: "gatsby-plugin-netlify",
    options: {
      mergeSecurityHeaders: false,
    },
  },
])

module.exports = cfg
