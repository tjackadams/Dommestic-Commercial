/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  turbopack: {
    root: __dirname,
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};
