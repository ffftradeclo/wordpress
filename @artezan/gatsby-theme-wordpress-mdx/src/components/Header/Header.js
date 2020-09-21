/** @jsx jsx */
import * as React from 'react'
import { jsx, Styled } from 'theme-ui'

import { ButtonIcon } from '../ButtonIcon'
import { SideBarContext } from '../SideBarContext'
import { SideBarNavList } from '../SideBarNavList'
import { Link } from 'gatsby'
import ImageDynamic from '../ImgDynamic/ImgDynamic'
import { ButtonColor } from '../ButtonColor'

export const Header = ({ config, links }) => {
  const { headerHeight, logo, navButtonTheme } = config
  const { state, dispatch } = React.useContext(SideBarContext)
  return (
    <>
      <header
        sx={{
          position: 'fixed',
          width: '100%',
          top: 0,
          borderBottomWidth: 0,
          borderBottomStyle: 'solid',
          borderBottomColor: 'muted',
          color: 'text',
          backgroundColor: theme => theme.colors.backgroundNavBar,
          opacity: 0.85,
          paddingLeft: [3, 4],
          paddingRight: [3, 4],
          marginLeft: [0, 0, 0, 0],
          transition: theme => theme.sideBarTransition,
          zIndex: 3
        }}
      >
        <Styled.div
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: `${headerHeight}px`
          }}
        >
          {/* <Logo /> */}
          <Styled.div id="logo">
            <Link to={'/'} accessKey={'logo'} aria-label={'logo'}>
              {logo === '' ? (
                `Logo`
              ) : (
                <ImageDynamic
                  sx={{
                    width: theme => theme.logo.width
                  }}
                  name={'logo'}
                  filename={logo}
                  alt={'logo'}
                />
              )}
            </Link>
          </Styled.div>
          {/* Menu btn */}
          <Styled.div
            sx={{
              display: [
                `${state.isNavOpen ? 'none' : 'flex'}`,
                `${state.isNavOpen ? 'none' : 'flex'}`,
                `${state.isNavOpen ? 'none' : 'flex'}`,
                'none'
              ],
              justifyContent: 'flex-end',
              flexBasis: '100%'
            }}
          >
            <ButtonIcon
              aria-label={'menu'}
              onClick={() => dispatch({ type: 'openNav' })}
              iconPath="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
            />
          </Styled.div>
          <Styled.div
            sx={{
              display: ['none', 'none', 'none', 'flex'],
              justifyContent: 'flex-end',
              flexBasis: '100%',
              mt: [0, 0, 3],
              alignItems: 'baseline'
            }}
          >
            {/* Pages */}
            <SideBarNavList links={links} />
            {/* Toggle */}
            {navButtonTheme.showButtonTheme && (
              // <ToggleSwitch toggleSwitchName="header-theme-toggle" />
              <ButtonColor
                style={{
                  border: theme => `1px solid ${theme.colors.background}`
                }}
                themes={navButtonTheme.colorsModes}
                children={
                  navButtonTheme.text !== '' ? navButtonTheme.text : null
                }
              />
            )}
          </Styled.div>
        </Styled.div>
      </header>
      {/* <Styled.div sx={{ height: `${headerHeight}px` }}></Styled.div> */}
    </>
  )
}
