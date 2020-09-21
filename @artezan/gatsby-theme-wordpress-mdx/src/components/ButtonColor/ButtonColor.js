/** @jsx jsx */
import * as React from 'react'
import { useColorMode, jsx, useThemeUI } from 'theme-ui'

export const ButtonColor = ({ style, themes, children }) => {
  const [colorMode, setColorMode] = useColorMode()
  const context = useThemeUI()

  const [nameTheme, setNameTheme] = React.useState('')

  // get themes
  const getThemes = ['dark', ...Object.keys(context.theme.colors.modes)]

  const themesToShow = themes && themes !== '' ? themes : getThemes

  React.useEffect(() => {
    setNameTheme(colorMode)
  }, [colorMode])

  const cycleMode = mode => {
    const i = themesToShow.indexOf(mode)
    const next = themesToShow[(i + 1) % themesToShow.length]
    return next
  }

  const handleKeyPress = e => {
    const name = cycleMode(colorMode)
    setNameTheme(name)
    setColorMode(name)
  }

  return (
    <button
      onClick={e => handleKeyPress(e)}
      sx={{
        appearance: 'none',
        display: 'inline-block',
        textAlign: 'center',
        lineHeight: 'inherit',
        textDecoration: 'none',
        fontSize: 'inherit',
        fontWeight: 'bold',
        m: 0,
        px: 1,
        py: 1,
        border: 0,
        borderRadius: 4,
        // pass variant prop to sx
        variant: 'buttons.primary',
        bg: 'primary',
        color: 'background',
        ml: 3,
        ...style
      }}
    >
      {children ? children : nameTheme}
    </button>
  )
}
