/** @jsx jsx */
import { jsx } from 'theme-ui'

import { Content } from './Content'
import { useSiteMetadata } from '../../Hooks'

export const ContentContainer = ({ children }) => {
  const { config } = useSiteMetadata()
  return <Content config={config}>{children}</Content>
}
