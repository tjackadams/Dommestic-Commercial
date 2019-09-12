const path = require("path")

// Initialize dotenv
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`, // or '.env'
})

const config = require("gatsby-plugin-config")

console.log("node config", config)

module.exports = {
  siteMetadata: {
    title: "Domestic & Commercial Drain Services",
    description: "",
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
