/** @jsx jsx */
import { jsx, Styled, useThemeUI, useColorMode } from 'theme-ui'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { useAllMdxWpPosts, useAllMdxWpPages } from '../Hooks'

const convertArrayToObject = array =>
  array.reduce(
    (obj, item) => ((obj[item.fluid.originalName] = item.fluid), obj),
    {}
  )

const Landing = ({
  data: {
    mdx: { body },
    allImageSharp: { nodes: images }
  }
}) => {
  let imagesFluid = {}
  if (images && images.length) {
    imagesFluid = convertArrayToObject(images)
  }
  // helpers for mdx props
  const context = useThemeUI()
  const [colorMode, setColorMode] = useColorMode()
  const allMdxWpPosts = useAllMdxWpPosts()
  const allMdxWpPages = useAllMdxWpPages()

  return (
    <Styled.div>
      <MDXRenderer
        imagesFluid={imagesFluid}
        context={context}
        colorMode={colorMode}
        setColorMode={setColorMode}
        allMdxWpPosts={allMdxWpPosts}
        allMdxWpPages={allMdxWpPages}
      >
        {body}
      </MDXRenderer>
    </Styled.div>
  )
}

export const contentQuery = graphql`
  query landingQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
    }
    allImageSharp {
      nodes {
        fluid(maxWidth: 800) {
          originalName
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default Landing
