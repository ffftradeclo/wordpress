import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

// Note: You can change "images" to whatever you'd like.

const ImageDynamic = ({ filename, alt, name, ...rest }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              sourceInstanceName
              extension
              publicURL
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(({ node }) => {
        if (name && name === node.sourceInstanceName) {
          return true
        }
        return node.relativePath.includes(filename)
      })
      if (!image) {
        return null
      }
      if (image.node.extension === 'svg') {
        return (
          <img
            {...rest}
            src={image.node.publicURL}
            alt={alt || image.node.name}
          />
        )
      } else {
        return (
          <Img
            {...rest}
            alt={alt || image.node.name}
            fluid={image.node.childImageSharp.fluid}
          />
        )
      }
    }}
  />
)

export default ImageDynamic
