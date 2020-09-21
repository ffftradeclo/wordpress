/** @jsx jsx */
import React, { useCallback } from 'react'
import { jsx } from 'theme-ui'
import { CardList } from '../CardList'
import { SearchBar } from '../SearchBar/SearchBar'

export const Posts = ({
  allMdxWpPosts,
  numOfPosts,
  lastedFirst = true,
  showSearchBar = true,
  ...rest
}) => {
  const [searchParam, setSearchParam] = React.useState([])

  /*  const handleSearchParam = filterValue => {
    const values = filterValue.map(({ value }) => value)
    setSearchParam(values)
  } */
  const handleSearchParam = useCallback(filterValue => {
    const values = filterValue.map(({ value }) => value)
    setSearchParam(values)
  })

  const { nodes: posts } = allMdxWpPosts
  // Map all posts
  let allPosts = posts.map(post => {
    const { mdxData, wpData, date } = post
    if (post.type === 'MDX') {
      return {
        excerpt: `${mdxData.excerpt || ''}`,
        slug: mdxData.fields.slug,
        timeToRead: mdxData.timeToRead,
        wordCount: mdxData.wordCount.words,
        date,
        tags: mdxData.frontmatter.tags,
        title: mdxData.frontmatter.title,
        featuredImage: mdxData.frontmatter.featureImage,
        type: post.type
      }
    } else {
      return {
        excerpt: `${wpData.excerpt}`,
        slug: wpData.slug,
        date,
        tags: wpData.tags,
        title: wpData.title,
        featuredImage: wpData.featured_media,
        type: post.type
      }
    }
  })

  //  sort by date
  if (!lastedFirst) {
    const c = new Date().getTime()
    allPosts.sort((a, b) => new Date(a.date || c) - new Date(b.date || c))
  }
  // number of post
  if (numOfPosts) {
    allPosts = allPosts.slice(0, numOfPosts)
  }
  // Get Tags
  const listTags = allPosts.reduce((acc, current) => {
    if (current.tags) {
      if (current.type === 'MDX') {
        const arrTags = current.tags.reduce((a, c) => {
          if (!acc.some(ta => ta && ta.value === c)) {
            a.push({ value: c.toLowerCase() })
          }
          return a
        }, [])
        acc = [...arrTags, ...acc]
      } else {
        const arrTags = current.tags.reduce((a, c) => {
          if (!acc.some(ta => ta && ta.value === c.name)) {
            a.push({ value: c.name.toLowerCase() })
          }
          return a
        }, [])
        acc = [...arrTags, ...acc]
      }
    }
    return acc
  }, [])
  // filter
  let filterPost = []
  if (searchParam.length > 0) {
    filterPost = allPosts.filter(({ tags, type }) => {
      if (type === 'MDX') {
        return tags && tags.some(tag => searchParam.includes(tag))
      } else {
        return tags && tags.some(({ name }) => searchParam.includes(name))
      }
    })
  } else {
    filterPost = allPosts
  }

  return (
    <>
      {showSearchBar && (
        <SearchBar
          filterData={listTags}
          onSearch={filterValue => handleSearchParam(filterValue)}
        />
      )}
      <CardList {...rest} listItems={filterPost} />
    </>
  )
}
