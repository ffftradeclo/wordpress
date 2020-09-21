/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { FeatureComponent } from '../components/sections/Features/FeatureComponent'

export const FeatureLayout = props => {
  return (
    <Styled.div
      sx={{
        width: ['100%', '100%', props.width]
      }}
      {...props}
    >
      <FeatureComponent {...props} />
    </Styled.div>
  )
}
