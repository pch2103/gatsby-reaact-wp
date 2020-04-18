/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import {useStaticQuery, graphql} from "gatsby"

import Header from "./header"
import "./layout.scss"
import MainMenu from "./Menu/MainMenu";

const Layout = ({children}) => {
	const {site, allWordpressWpApiMenusMenusItems} = useStaticQuery(graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allWordpressWpApiMenusMenusItems {
      edges {
        node {
          id
          name
          items {
            title
            object_slug
            url
            object_id
          }
        }
      }
    }
  }
`)

	return (
			<>
				<Header siteTitle={site.siteMetadata.title}/>
				<div
						style={{
							margin: `0 auto`,
							maxWidth: 960,
							padding: `0 1.0875rem 1.45rem`,
						}}
				>
					<MainMenu menu={allWordpressWpApiMenusMenusItems}/>
					<main>{children}</main>
					<footer>
						© {new Date().getFullYear()}, Built with
						{` `}
						<a href="https://www.gatsbyjs.org">Gatsby</a>
					</footer>
				</div>
			</>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout

