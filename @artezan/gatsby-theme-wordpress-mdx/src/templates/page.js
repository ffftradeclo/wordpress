/** @jsx jsx */
import * as React from 'react'

import { jsx, Styled } from 'theme-ui'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Seo } from '../components/Seo'
import { ContentContainer } from '../components/Content'
import { ButtonIcon } from '../components/ButtonIcon'
import ScrollAnimation from 'react-animate-on-scroll'

const Page = ({ data: { mdx, site } }) => {
  const {
    frontmatter: { featureImage, tags, title },
    excerpt
  } = mdx

  return (
    <ContentContainer>
      <ScrollAnimation animateIn="fadeIn">
        <article
          sx={{
            mb: 7
          }}
        >
          <Seo
            title={`${site.siteMetadata.title} | ${title}`}
            description={excerpt || ''}
            keywords={tags || []}
            siteURL={site.siteMetadata.siteURL}
            image={
              featureImage && featureImage.localFile
                ? featureImage.localFile.childImageSharp.fluid.src.replace(
                    '/',
                    ''
                  )
                : ''
            }
            isBlogPostPage
          />
          <Styled.div>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </Styled.div>
        </article>
        <span>
          <ButtonIcon
            aria-label={'back'}
            onClick={() => window.history.back()}
            iconPath="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
          />
        </span>
      </ScrollAnimation>
    </ContentContainer>
  )
}

export const contentQuery = graphql`
  query postQuery($id: String) {
    site {
      siteMetadata {
        title
        siteURL
      }
    }
    mdx(id: { eq: $id }) {
      id
      body
      excerpt
      frontmatter {
        tags
        title
        featureImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
export default Page
