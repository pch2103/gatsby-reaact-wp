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
        featured_media {
          localFile {
            childImageSharp {
              fixed(width: 320, height: 90) {
                base64
                width
                height
                src
                srcSet
              }
            }
          }
        }
      }
    }
  }
    }
  `