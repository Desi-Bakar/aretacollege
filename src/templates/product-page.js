import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Features from "../components/Features"
import Testimonials from "../components/Testimonials"
import HeroSlider from "../components/HeroSlider"

// eslint-disable-next-line
export const ProductPageTemplate = ({
  images,
  title,
  heading,
  description,
  intro,
  main,
  testimonials,
}) => {
  return (
    <div className="content">
      {/* Hero Slider */}
      <HeroSlider images={images} title={title} subheading={heading} />

      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-7 is-offset-1">
                <h3 className="has-text-weight-semibold is-size-2">
                  {heading}
                </h3>
                <p>{description}</p>
              </div>
            </div>

            <div className="columns">
              <div className="column is-10 is-offset-1">
                <Features gridItems={intro.blurbs} />

                <div className="columns">
                  <div className="column is-7">
                    <h3
                      className="has-text-weight-semibold is-size-3"
                      style={{ marginTop: "3rem", marginBottom: "1rem" }}
                    >
                      {main.heading}
                    </h3>
                    <p>{main.description}</p>

                    {main.extra && (
                      <>
                        <h3 className="has-text-weight-semibold is-size-3">
                          {main.extra.heading}
                        </h3>
                        <p>{main.extra.description}</p>
                      </>
                    )}
                  </div>
                </div>

                <Testimonials testimonials={testimonials} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

ProductPageTemplate.propTypes = {
  images: PropTypes.array,
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    extra: PropTypes.shape({
      heading: PropTypes.string,
      description: PropTypes.string,
    }),
  }),
  testimonials: PropTypes.array,
}

const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ProductPageTemplate
        images={frontmatter.images}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
        testimonials={frontmatter.testimonials}
      />
    </Layout>
  )
}

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ProductPage

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        images {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(
                  width: 240
                  quality: 64
                  layout: CONSTRAINED
                )
              }
            }
            text
          }
          heading
          description
        }
        main {
          heading
          description
          extra {
            heading
            description
          }
        }
        testimonials {
          author
          quote
        }
      }
    }
  }
`
