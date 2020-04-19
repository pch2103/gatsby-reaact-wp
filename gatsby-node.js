/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)
const queryAll = require(`./src/queries/queryAll.js`)
const createPaginatedPages = require('gatsby-paginate')

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions
	const result = await graphql(queryAll)

	// Check for any errors
	if (result.errors) {
		throw new Error(result.errors)
	}

	// Access query results via object destructuring
	const { allWordpressPage, allWordpressPost } = result.data

	// Create Page pages.
	const pageTemplate = path.resolve(`./src/templates/page.js`)

	allWordpressPage.edges.forEach(edge => {
		createPage({
			path: edge.node.path,
			component: slash(pageTemplate),
			context: {
				id: edge.node.id,
			},
		})
	})

	const postTemplate = path.resolve(`./src/templates/post.js`)

	createPaginatedPages({
		edges: allWordpressPost.edges,
		createPage: createPage,
		pageTemplate: './src/templates/posts.js',
		pageLength: 3,
		pathPrefix: 'posts',
	})

	allWordpressPost.edges.forEach(edge => {
		createPage({
			path: `/post/${edge.node.slug}`,
			component: slash(postTemplate),
			context: {
				id: edge.node.id,
			},
		})
	})
}