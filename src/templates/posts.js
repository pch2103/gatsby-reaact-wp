import React  from 'react'
import Link from 'gatsby-link'
import Img from "gatsby-image"
import Layout from "../components/layout";

const NavLink = props => {
	if (!props.test) {
		return <Link to={props.url}>{props.text}</Link>
	} else {
		return <span>{props.text}</span>
	}
}

const IndexPage = ({ pageContext }) => {

	const { group, index, first, last, pageCount } = pageContext
	const previousUrl = index - 1 === 1 ? '/posts' : '/posts/' + (index - 1)
	const nextUrl = '/posts/' + (index + 1)

	return (
			<Layout>
				<h4>{pageCount} Pages</h4>

				{group.map(({ node }) => (
						<div key={node.id}>
							<Link to={'/post/' + node.slug}>
								<h3>{node.title}</h3>
								{node.featured_media &&
								<div>
									<Img fixed={node.featured_media.localFile.childImageSharp.fixed}/>
								</div>
								}
							</Link>
							<div dangerouslySetInnerHTML={{__html: node.excerpt}}/>
							<div style={{marginBottom: 24}}><strong>{node.date}</strong></div>
						</div>
				))}
				<div className="previousLink">
					<NavLink test={first} url={previousUrl} text="Go to Previous Page" />
				</div>
				<div className="nextLink">
					<NavLink test={last} url={nextUrl} text="Go to Next Page" />
				</div>
			</Layout>
	)
}

export default IndexPage