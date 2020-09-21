import { useStaticQuery, graphql } from 'gatsby'

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      {
        site {
          siteMetadata {
            title
            description
            keywords
            siteURL
            siteImage
            twitterUsername
            author {
              name
            }
            config {
              headerHeight
              sideBarWidth
              logo
              navButtonTheme {
                showButtonTheme
                text
                colorsModes
              }
              colorModes {
                default
              }
            }
          }
        }
      }
    `
  )
  return site.siteMetadata
}
