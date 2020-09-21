/** @jsx jsx */
import * as React from 'react'
import { jsx, Styled } from 'theme-ui'

import { SideBarNavList } from '../SideBarNavList'
import { SideBarContext } from '../SideBarContext'

import { ButtonColor } from '../ButtonColor'

export const SideBar = ({ config, links }) => {
  const { state } = React.useContext(SideBarContext)
  const { sideBarWidth, headerHeight, navButtonTheme } = config
  const conditionalLeft = state.isNavOpen ? 0 : sideBarWidth
  return (
    <Styled.div
      sx={{
        position: 'absolute',
        height: '100%',
        backgroundColor: theme => theme.colors.backgroundSideBar,
        borderRightWidth: 0,
        borderRightStyle: 'solid',
        borderRightColor: 'muted',
        width: sideBarWidth,
        left: [
          `-${conditionalLeft}px`,
          `-${conditionalLeft}px`,
          `-${conditionalLeft}px`,
          `-${conditionalLeft}px`
        ],
        transition: '.3s ease-in-out left'
      }}
    >
      <Styled.div
        sx={{
          display: 'flex',
          flexDirection: 'column',
          pl: 4,
          pr: 4,
          height: '100%'
        }}
      >
        <Styled.div
          sx={{
            display: 'flex',
            alignItems: 'center',
            minHeight: `${headerHeight}px`,
            pt: 1,
            pl: 4
          }}
        >
          {/* <Link to={'/'}>Logo</Link> */}
          {/* <Logo /> */}
        </Styled.div>
        <Styled.div
          sx={{
            display: 'flex',
            pt: 3,
            flexDirection: 'column',
            flexBasis: '100%',
            overflowY: 'auto',
            WbkitOverflowScrolling: 'touch'
          }}
        >
          <SideBarNavList links={links} />
          <Styled.div
            sx={{
              pl: 3,
              pr: 3,
              mb: 4,
              display: ['flex', 'flex', 'flex', 'none'],
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
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
      </Styled.div>
    </Styled.div>
  )
}
