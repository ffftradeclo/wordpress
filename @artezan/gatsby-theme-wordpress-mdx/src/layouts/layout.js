/** @jsx jsx */
import React from 'react'
import { Global } from '@emotion/core'
import { jsx, Styled, css, useColorMode } from 'theme-ui'
import { graphql, useStaticQuery } from 'gatsby'
import { Location } from '@reach/router'
import { SideBarProvider } from '../components/SideBarContext'
import { Seo } from '../components/Seo'
import { HeaderContainer } from '../components/Header/HeaderContainer'
import { SideBarContainer } from '../components/SideBar'
import { LightPanel } from '../components/LightPanel'
import { formatPathname } from '../helpers'
import { MDXProvider } from '@mdx-js/react'
import * as Shortcodes from '../Shortcodes'
import 'animate.css/animate.min.css'
import ScrollAnimation from 'react-animate-on-scroll'
import { useSiteMetadata } from '../Hooks'

const shortcodes = { ...Shortcodes, ScrollAnimation }

const Layout = ({ children }) => {
  const data = useSiteMetadata()
  const { title, description, keywords, siteURL, siteImage, config } = data
  const [colorMode, setColorMode] = useColorMode()
  if (config.colorModes.default !== '' && colorMode === 'dark') {
    setColorMode(config.colorModes.default)
  }
  return (
    <>
      <Seo
        title={title}
        description={description}
        keywords={keywords}
        siteURL={siteURL}
        image={siteImage}
      />
      <Styled.root>
        <Global
          styles={css({
            '*': {
              boxSizing: `inherit`,
              '&:before': {
                boxSizing: `inherit`
              },
              '&:after': {
                boxSizing: `inherit`
              }
            },
            body: {
              margin: 0,
              padding: 0,
              boxSizing: `border-box`,
              bg: 'background'
            },
            '::selection': {
              backgroundColor: `primary`,
              color: `white`
            }
          })}
        />
        <SideBarProvider>
          <Location>
            {({ location }) => {
              const { pathname } = location

              return (
                <>
                  <HeaderContainer />
                  <SideBarContainer />
                  <LightPanel />
                  <Styled.div sx={{ mt: `${config.headerHeight}px` }}>
                    <MDXProvider components={shortcodes}>
                      {children}
                    </MDXProvider>
                  </Styled.div>
                </>
              )
            }}
          </Location>
        </SideBarProvider>
      </Styled.root>
    </>
  )
}

export default Layout
