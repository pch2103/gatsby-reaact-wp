import React, {Component} from "react"
import {graphql, Link} from "gatsby"
import Layout from "../components/layout";

class Page extends Component {
	render() {
		const StaticPage = this.props.data.wordpressPage

		return (
				<>
					<Layout>
						<h1>{StaticPage.title}</h1>
						<div dangerouslySetInnerHTML={{__html: StaticPage.content}}/>
						<Link to="/">Go back to the homepage</Link>
					</Layout>
				</>
		)
	}
}

export default Page

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
    }
    site {
      id
      siteMetadata {
        title
        description
      }
    }
  }
`