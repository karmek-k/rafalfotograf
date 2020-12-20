require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Fotograf Rafał Woźniak`,
    description: `
Polski fotograf pracujacy w Warszawie.
Instruktor w szkole www.kursfoto.pl. Specjalizujący się w portretach,
fotografii modowej, fotografii reklamowej oraz reportażu.
    `,
    author: `https://github.com/karmek-k`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`
    //   }
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATOCMS_TOKEN,
        environment: `main`,
        previewMode: false,
        disableLiveReload: false,
        localeFallbacks: {
          pl: ['pl']
        }
      }
    }
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
    //   }
    // }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
