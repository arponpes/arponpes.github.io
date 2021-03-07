require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteTitle: "Aaron",
    siteTitleAlt: `Aaron, web developer.`,
    title: `My Blog`,
    author: `Aaron Dominguez`,
    description: `Personal web page.`,
    siteUrl: `https://arponpes.github.io/`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `Projects`,
            slug: `/projects`,
          },
          {
            title: `Goals`,
            slug: `/goals`,
          },
        ],
        externalLinks: [
          {
            name: `Linkedin`,
            url: `https://www.linkedin.com/in/aaron-dominguez-diez/`,
          },
          {
            name: `Github`,
            url: `https://github.com/arponpes`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Aaron Dominguez Diez`,
        short_name: `Aaron`,
        description: `Personal web page.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-icon-36x36.png`,
            sizes: `36x36`,
            type: `image/png`
           },
           {
            src: `/android-icon-48x48.png`,
            sizes: `48x48`,
            type: `image/png`
           },
           {
            src: `/android-icon-72x72.png`,
            sizes: `72x72`,
            type: `image/png`
           },
           {
            src: `/android-icon-96x96.png`,
            sizes: `96x96`,
            type: `image/png`
           },
           {
            src: `/android-icon-144x144.png`,
            sizes: `144x144`,
            type: `image/png`
           },
           {
            src: `/android-icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`
           }
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
