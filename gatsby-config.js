module.exports = {
  pathPrefix: `/gatsby-reaact-wp`,
  siteMetadata: {
    siteUrl: `https://pch2103.github.io/gatsby-reaact-wp/`,
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
        start_url: `src/images`,
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
        baseUrl: "http://localhost:8001",
        protocol: "http",
        hostingWPCOM: false,
        // We will be using some advanced custom fields
        useACF: true,
        verboseOutput: true,
        // searchAndReplaceContentUrls: {
        //   sourceUrl: "http://localhost:8001",
        //   replacementUrl: "https://pch2103.github.io/gatsby-reaact-wp",
        // },
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
      normalizer: function ({ entities }) {
        return entities
      },
      normalizers: normalizers => [
        ...normalizers,
        {
          name: "nameOfTheFunction",
          normalizer: function ({ entities }) {
            // manipulate entities here
            return entities
          },
        },
      ],
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
