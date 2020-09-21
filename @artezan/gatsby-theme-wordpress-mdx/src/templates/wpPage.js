/** @jsx jsx */
import * as React from 'react'
import { jsx, Styled, css } from 'theme-ui'
import { graphql } from 'gatsby'
import { Seo } from '../components/Seo'
import { ContentContainer } from '../components/Content'
import { ButtonIcon } from '../components/ButtonIcon'
import ScrollAnimation from 'react-animate-on-scroll'

export const WpPage = ({ data }) => {
  const {
    site,
    mdxWpPages: {
      wpData: { content, title, excerpt }
    }
  } = data
  return (
    <ContentContainer>
      <ScrollAnimation animateIn="fadeIn">
        <Seo
          title={`${site.siteMetadata.title} | ${title}`}
          description={excerpt}
          isBlogPostPage
        />
        <Styled.h1>{title}</Styled.h1>
        <Styled.div
          sx={css({
            mb: 7,
            img: {
              width: '100%  !important',
              height: 'auto  !important'
            }
          })}
          dangerouslySetInnerHTML={{ __html: content }}
        />
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

export default WpPage

export const pageQuery = graphql`
  query WpPageQuery($id: String!) {
    site {
      siteMetadata {
        title
        siteURL
      }
    }
    mdxWpPages(id: { eq: $id }) {
      wpData {
        title
        content
        excerpt
      }
    }
  }
`
