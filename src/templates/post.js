import React, {Component} from "react"
import {graphql, Link} from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import Layout from "../components/layout";

class Post extends Component {
	render() {
		const post = this.props.data.wordpressPost
		const childImageSharpFixed = post.featured_media && post.featured_media.localFile.childImageSharp.fixed
		const acf = {};

		if (post.acf) {
			if (post.acf.facebook){
				acf.facebook = `<h5>Facebook: <i>${post.acf.facebook}</i></h5>`
				acf.twitter = `<h5>Twitter: <i>${post.acf.twitter}</i></h5>`
			}
		}

		return (
				<>
					<Layout>
						<Link to="/posts">Back to Posts list</Link>
						<h1 dangerouslySetInnerHTML={{__html: post.title}}/>
						{ childImageSharpFixed && <Img fixed={childImageSharpFixed}/> }
						<div dangerouslySetInnerHTML={{__html: post.content}}/>
						<div dangerouslySetInnerHTML={{__html: acf.facebook}}/>
						<div dangerouslySetInnerHTML={{__html: acf.twitter}}/>
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
      acf {
        facebook
        twitter
      }
      featured_media{
       localFile{
         childImageSharp{
           fixed(width:300, height:300){
							...GatsbyImageSharpFixed
           }
         }
       }
     }  
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`