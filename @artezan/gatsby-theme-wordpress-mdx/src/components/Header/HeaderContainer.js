/** @jsx jsx */
import { jsx } from 'theme-ui'

import { Header } from './Header'
import { useAllMdxWpPages, useSiteMetadata } from '../../Hooks'

export const HeaderContainer = ({ children }) => {
  const allMdxWpPages = useAllMdxWpPages()
  const { config } = useSiteMetadata()
  const links = allMdxWpPages.edges.map(({ node: page }) => {
    if (page.type === 'WP') {
      const { wpData } = page
      return {
        slug: wpData.slug,
        icon: null,
        title: page.title
      }
    } else {
      const { mdxData } = page
      return {
        slug: mdxData.fields.slug,
        icon: mdxData.frontmatter.icon,
        title: page.title
      }
    }
  })
  return (
    <Header config={config} links={links}>
      {children}
    </Header>
  )
}
