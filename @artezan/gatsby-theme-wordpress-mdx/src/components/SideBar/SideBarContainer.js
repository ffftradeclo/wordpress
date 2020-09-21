/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'

import { SideBar } from './SideBar'
import { useAllMdxWpPages, useSiteMetadata } from '../../Hooks'

export const SideBarContainer = () => {
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
    <Styled.div
      sx={{
        position: 'fixed',
        top: 0,
        height: '100%',
        display: 'flex',
        flexBasis: 'auto',
        flexDirection: 'column',
        flexShrink: 0,
        marginBottom: 0,
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
        minHeight: 0,
        minWidth: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        zIndex: 4
      }}
    >
      <SideBar config={config} links={links} />
    </Styled.div>
  )
}
