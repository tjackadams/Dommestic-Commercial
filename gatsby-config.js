const path = require("path")

// Initialize dotenv
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`, // or '.env'
})

const config = require("gatsby-plugin-config")

const cfg = {
  siteMetadata: {
    title: "Domestic & Commercial Drain Services in West Midlands, UK",
    description:
      "We offer a fast & efficient Domestic & Commercial drains service in Dudley and across the West Midlands.",
    keywords: "domestic,commercial,drain,dudley,west midlands",
    siteUrl: "https://www.dudleydrains.com",
    image: "",
    author: {
      name: "",
      minibio: "",
    },
    organization: {
      name: "Domestic & Commercial Drain Services",
      url: "https://www.dudleydrains.com",
      logo: "",
    },
    social: {
      twitter: "",
      fbAppID: "",
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: config.GOOGLE_ANALYTICS_TRACKINGID,
        head: false,
        respectDNT: true,
      },
    },
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
  ],
}

if (process.env.CONTEXT === "production") {
  const googleAnalyticsCfg = {
    resolve: "gatsby-plugin-google-analytics",
    options: {
      trackingId: config.GOOGLE_ANALYTICS_TRACKINGID,
    },
  }
  cfg.plugins.push(googleAnalyticsCfg)
}

module.exports = cfg
