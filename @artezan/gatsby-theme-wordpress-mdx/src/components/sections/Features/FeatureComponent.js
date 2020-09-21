/** @jsx jsx */
import React from 'react'
import { jsx, Styled } from 'theme-ui'
import Img from 'gatsby-image'

export const FeatureComponent = ({ featureImageFluid, children }) => {
  return (
    <>
      <Styled.div
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          borderRadius: '15px',
          marginTop: '35%'
        }}
      >
        <Img
          fluid={featureImageFluid}
          sx={{
            width: '80%',
            height: '200px',
            borderRadius: '15px',
            boxShadow: theme => theme.colors.imgShadow
          }}
        />
      </Styled.div>

      <Styled.div
        sx={{
          marginTop: '10%',
          mx: ['0%', '0%', '2%', '2%']
        }}
      >
        {children}
      </Styled.div>
    </>
  )
}
