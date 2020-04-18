import React, {Component} from "react"
import {graphql, Link} from "gatsby"
import PropTypes from "prop-types"
import Layout from "../components/layout";

class Post extends Component {
	render() {
		const post = this.props.data.wordpressPost

		return (
				<>
					<Layout>
						<Link to="/posts">Back to Posts list</Link>
						<h1>{post.title}</h1>
						<div dangerouslySetInnerHTML={{__html: post.content}}/>
						<Link to="/">Go back to the homepage</Link>
					</Layout>
				</>
		)
	}
}

Post.propTypes = {
	data: PropTypes.object.isRequired,
}

export default Post

export const postQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`