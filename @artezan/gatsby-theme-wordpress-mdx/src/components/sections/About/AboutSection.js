/** @jsx jsx */
import React from 'react'
import { jsx, Styled, Flex, Box } from 'theme-ui'
import Img from 'gatsby-image'

export const AboutSection = ({ aboutImageFluid, children }) => {
  return (
    <>
      <Flex
        sx={{
          flexWrap: 'wrap',
          flexDirection: 'row',
          pb: [1, 1, 30],
          mt: [1, 1, 2]
        }}
      >
        <Box
          sx={{
            display: ['flex', 'flex', '', ''],
            justifyContent: ['center', 'center'],
            width: ['100%', '100%', '50%', '50%']
          }}
        >
          <Img
            fluid={aboutImageFluid}
            sx={{
              width: '80%',
              borderRadius: '5%',
              boxShadow: theme => theme.colors.imgShadow
            }}
          />
        </Box>
        <Box
          sx={{
            width: ['100%', '100%', '50%', '50%']
          }}
        >
          <Styled.div
            sx={{
              marginTop: '10%'
            }}
          >
            {children}
          </Styled.div>
        </Box>
      </Flex>
    </>
  )
}
