import * as React from 'react'

import { Helmet } from 'react-helmet'
import { useSiteMetadata } from '../../Hooks'
import SchemaOrg from './SchemaOrg'

export const Seo = ({
  title,
  titleTemplate,
  description,
  siteURL,
  image,
  keywords = [],
  isBlogPostPage
}) => {
  const {
    title: siteTitle,
    description: siteDescription,
    siteURL: siteHookUrl,
    siteImage,
    twitterUsername,
    author
  } = useSiteMetadata()
  const seoTitle = title || siteTitle
  const seoDescription = description || siteDescription
  const seoSiteUrl = siteURL || siteHookUrl
  const seoUrlImage = isBlogPostPage
    ? `${siteHookUrl}/${image ? image : ''}`
    : `${siteHookUrl}${siteImage}`
  return (
    <>
      <Helmet defer={false}>
        {/* General tags */}
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta name="image" content={seoUrlImage} />
        <link rel="canonical" href={seoSiteUrl} />
        <meta name="keywords" content={keywords.join(', ')} />

        {/* OpenGraph tags */}
        <meta property="og:url" content={seoSiteUrl} />
        {isBlogPostPage ? (
          <meta property="og:type" content="article" />
        ) : (
          <meta property="og:type" content="website" />
        )}
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:image" content={seoUrlImage} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={twitterUsername} />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content={seoUrlImage} />
      </Helmet>
      <SchemaOrg
        isBlogPost={isBlogPostPage}
        url={seoSiteUrl}
        title={seoTitle}
        image={seoUrlImage}
        description={seoDescription}
        siteUrl={siteHookUrl}
        author={author}
        defaultTitle={siteTitle}
      />
    </>
  )
}
