/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import { Icon } from '../Icon'

export const ButtonIcon = ({ iconPath, ...rest }) => {
  return (
    <button {...rest} sx={{ variant: 'buttonIconMdxWp' }}>
      <Icon iconPath={iconPath} />
    </button>
  )
}
