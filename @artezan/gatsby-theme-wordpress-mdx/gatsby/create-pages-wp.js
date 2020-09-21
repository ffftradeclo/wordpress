const path = require('path')
const { paginate } = require('gatsby-awesome-pagination')

const getOnlyPublished = edges =>
  edges.filter(({ node }) => node.wpData.status === 'publish')

module.exports = async function CreatePagesWp(
  actions,
  graphql,
  reporter,
  isPage,
  isPost
) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allMdxWpPosts(filter: { type: { eq: "WP" } }) {
        edges {
          node {
            id
            wpData {
              slug
              status
              wordpress_id
            }
          }
        }
      }
      allMdxWpPages(filter: { type: { eq: "WP" } }) {
        edges {
          node {
            id
            wpData {
              status
              slug
              id
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" wp query')
    throw new Error(result.errors)
  }

  // In production builds, filter for only published posts.
  const allPosts = result.data.allMdxWpPosts.edges
  const posts =
    process.env.NODE_ENV === 'production'
      ? getOnlyPublished(allPosts)
      : allPosts

  const postTemplate = path.join(__dirname, `../src/templates/wpPost.js`)
  const pageTemplate = path.join(__dirname, `../src/templates/wpPage.js`)

  // In production builds, filter for only published pages.
  const allPages = result.data.allMdxWpPages.edges
  const pages =
    process.env.NODE_ENV === 'production'
      ? getOnlyPublished(allPages)
      : allPages

  if (isPost) {
    allPosts.forEach(({ node: post }) => {
      // Create the Gatsby page for this WordPress post
      createPage({
        path: `${post.wpData.slug}`,
        component: postTemplate,
        context: {
          id: post.id
        }
      })
    })
  }
  if (isPage) {
    // Create a page
    allPages.forEach(({ node: page }) => {
      // Create the Gatsby page for this WordPress page
      createPage({
        path: `${page.wpData.slug}`,
        component: pageTemplate,
        context: {
          id: page.id
        }
      })
    })
  }
}
