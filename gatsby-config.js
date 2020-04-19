module.exports = {
  pathPrefix: `/gatsby-reaact-wp`,
  siteMetadata: {
    // siteUrl: "https://github.com/pch2103/gatsby-reaact-wp",
    title: `CHE testing Gatsby`,
    description: `CHE testing Gatsby`,
    author: `@CHE`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/che.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        // I have created a dummy site for us to use with the plugins we discussed
        baseUrl: "localhost:8001",
        protocol: "http",
        hostingWPCOM: false,
        // We will be using some advanced custom fields
        useACF: true,
        verboseOutput: true,
      },
      concurrentRequests: 10,
      includedRoutes: [
        "**/categories",
        "**/posts",
        "**/pages",
        "**/media",
        "**/tags",
        "**/taxonomies",
        // "**/users",
        "**/*/*/menus",
        "**/*/*/menu-locations",
      ],
      excludedRoutes: [],
      normalizer: function({ entities }) {
        return entities
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
