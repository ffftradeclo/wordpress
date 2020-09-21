/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import { Icon } from '../Icon'

export const ButtonIconSimple = ({ iconPath, ...rest }) => {
  return (
    <button {...rest} sx={{ variant: 'buttonSimpleMdxWp' }}>
      <Icon iconPath={iconPath} />
    </button>
  )
}
