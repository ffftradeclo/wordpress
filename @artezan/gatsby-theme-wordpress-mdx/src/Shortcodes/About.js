/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { AboutSection } from '../components/sections/About/AboutSection'

export const AboutLayout = props => (
  <Styled.div {...props}>
    <AboutSection {...props} />
  </Styled.div>
)
