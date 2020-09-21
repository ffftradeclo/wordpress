import { useStaticQuery, graphql } from 'gatsby'

export const useAllMdxWpPages = () => {
  const { allMdxWpPages } = useStaticQuery(
    graphql`
      {
        allMdxWpPages(sort: { order: ASC, fields: title }) {
          edges {
            node {
              type
              id
              title
              wpData {
                slug
                title
              }
              mdxData {
                fields {
                  slug
                }
                frontmatter {
                  title
                  icon
                }
              }
            }
          }
        }
      }
    `
  )
  return allMdxWpPages
}
