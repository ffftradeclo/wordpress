import { useStaticQuery, graphql } from 'gatsby'

export const useAllMdxWpPosts = () => {
  const { allMdxWpPosts } = useStaticQuery(
    graphql`
      {
        allMdxWpPosts(sort: { fields: date, order: DESC }) {
          nodes {
            date
            type
            mdxData {
              body
              excerpt
              timeToRead
              wordCount {
                words
              }
              fields {
                slug
              }
              frontmatter {
                title
                tags
                featureImage {
                  childImageSharp {
                    fluid(maxWidth: 600) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
            wpData {
              excerpt
              content
              title
              slug
              tags {
                name
              }
              featured_media {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 600) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  return allMdxWpPosts
}
