import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const BlogRollTemplate = (props) => {
  const { edges: posts } = props.data.allMarkdownRemark

  return (
    <div className="columns is-multiline is-centered">
      {posts &&
        posts.map(({ node: post }) => (
          <div className="column is-6" key={post.id}>
            <article
              className={`box has-background-light`}
              style={{
                height: '100%',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                padding: '20px'
              }}
            >
              <header className="mb-4">
                {post?.frontmatter?.featuredimage && (
                  <div className="mb-3">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        width:
                          post.frontmatter.featuredimage.childImageSharp?.gatsbyImageData.width,
                        height:
                          post.frontmatter.featuredimage.childImageSharp?.gatsbyImageData.height,
                      }}
                    />
                  </div>
                )}
                <p className="post-meta">
                  <Link
                    style={{ color: '#00008B' }}
                    className="title is-size-4 has-text-weight-bold"
                    to={post.fields.slug}
                  >
                    {post.frontmatter.title}
                  </Link>
                  <br />
                  <span className="subtitle is-size-6 has-text-grey">
                    {post.frontmatter.date}
                  </span>
                </p>
              </header>
              <div className="content">
                <p>{post.excerpt}</p>
              </div>
              <div className="mt-4">
                <Link className="button is-link is-light" to={post.fields.slug}>
                  Keep Reading →
                </Link>
              </div>
            </article>
          </div>
        ))}
    </div>
  )
}

BlogRollTemplate.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default function BlogRoll() {
  return (
    <StaticQuery
      query={graphql`
        query BlogRollQuery {
          allMarkdownRemark(
            sort: { frontmatter: { date: DESC } }
            filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 400)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  templateKey
                  date(formatString: "MMMM DD, YYYY")
                  featuredpost
                  featuredimage {
                    childImageSharp {
                      gatsbyImageData(width: 120, quality: 100, layout: CONSTRAINED)
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <BlogRollTemplate data={data} count={count} />}
    />
  )
}
