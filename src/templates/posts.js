import React, {Component} from "react"
import {graphql, Link} from "gatsby"
import PropTypes from "prop-types"
import Layout from "../components/layout";

class Posts extends Component {
	render() {
		const data = this.props.data

		return (
				<>
					<Layout>
						<h1>
							Posts
						</h1>
						{data.allWordpressPost.edges.map(
								({node}) => (
										<div key={node.id}>
											<Link to={'post/' + node.slug}>
												<h3>{node.title}</h3>
											</Link>
											<div dangerouslySetInnerHTML={{__html: node.excerpt}}/>
											<div style={{marginBottom: 24}}><strong>{node.date}</strong></div>
										</div>
								)
						)}
					</Layout>
				</>
		)
	}
}

Posts.propTypes = {
	data: PropTypes.object.isRequired,
	edges: PropTypes.array,
}

export default Posts

export const postsQuery = graphql`
  query {
        allWordpressPost {
        edges {
          node {
            id
            title
            slug
            excerpt
            date(formatString: "DD MMMM, YYYY")
          }
        }
      }
}
`