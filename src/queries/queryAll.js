module.exports = `
   {
      allWordpressPage {
        edges {
          node {
            id
            path
            status
            template
          }
        }
      }
      allWordpressPost {
        edges {
          node {
            id
            slug
            path
            status
            template
            format
            title
            excerpt
            date(formatString: "DD MMMM, YYYY")
          }
        }
      }
    }
  `