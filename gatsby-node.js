const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    result.errors.forEach(e => console.error(e.toString()))
    throw result.errors
  }

  const posts = result.data.allMarkdownRemark.edges

  posts.forEach(edge => {
    const id = edge.node.id
    const slug = edge.node.fields?.slug
    const templateKey = edge.node.frontmatter?.templateKey

    if (!slug || !templateKey) return

    createPage({
      path: slug, // slug otomatis dari nama file
      component: path.resolve(`src/templates/${templateKey}.js`),
      context: { id }, // kirim ID untuk query template
    })
  })

  // Handle tags
  let tags = []
  posts.forEach(edge => {
    if (_.get(edge, 'node.frontmatter.tags')) {
      tags = tags.concat(edge.node.frontmatter.tags)
    }
  })

  tags = _.uniq(tags)

  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag)}/`,
      component: path.resolve(`src/templates/tags.js`),
      context: { tag },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
