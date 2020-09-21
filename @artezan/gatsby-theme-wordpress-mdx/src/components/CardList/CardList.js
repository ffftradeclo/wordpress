/** @jsx jsx */
import React, { useState } from 'react'
import { Link } from 'gatsby'
import { jsx, Flex, Box, Styled, useColorMode } from 'theme-ui'

import { Card } from '../Card'

export const CardList = ({ listItems }) => {
  const [colorMode, setColorMode] = useColorMode()
  const [sxStyle, setsxStyle] = useState({})
  const handleClick = () => {
    setsxStyle({
      boxShadow: `inset 10px 10px 20px #2b2f3b, inset -10px -10px 20px #3b3f4f`
    })
  }
  return (
    <>
      <Styled.div
        sx={{
          mb: 4
        }}
      />
      <Flex
        sx={{
          flexWrap: 'wrap',
          '> :nth-of-type(odd)': {
            pr: [0, 0, 4]
          }
        }}
      >
        {listItems.map((item, index) => {
          const { slug, title } = item

          return (
            <Box
              key={index}
              sx={{
                display: 'flex',
                width: ['100%', '100%', '50%']
              }}
            >
              <Link
                aria-label={title}
                to={slug}
                sx={{
                  display: 'flex',
                  flex: '1 1 auto',
                  textDecoration: 'none',
                  borderRadius: 1,
                  mb: 4,
                  ':focus': theme => ({
                    '& > article': theme.colors.onClickCard,
                    boxShadow: `${theme.shadows[1]} ${theme.colors.textMuted}`,
                    outline: 'none',
                    ...theme.colors.onClickLink
                  })
                }}
              >
                <Card {...item} />
              </Link>
            </Box>
          )
        })}
      </Flex>
    </>
  )
}
