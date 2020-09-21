/** @jsx jsx */
import { jsx, Styled, Container } from 'theme-ui'

export const Content = ({ children, config = {}, bg }) => {
  return (
    <Styled.div
      sx={{
        zIndex: '2',
        position: 'relative',
        overflow: 'hidden',
        transition: theme => theme.sideBarTranstion
      }}
    >
      <Container
        sx={{
          /* maxWidth: ['540px', '540px', '540px', '1024px'] */
          mt: 1
        }}
        p={4}
      >
        {children}
      </Container>
    </Styled.div>
  )
}
