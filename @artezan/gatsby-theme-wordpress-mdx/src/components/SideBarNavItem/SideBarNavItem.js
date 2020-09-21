/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'

export const SideBarNavItem = ({ icon, title, isActive }) => (
  <Styled.div
    sx={{
      variant: isActive ? 'navItemMdxWp.active' : 'navItemMdxWp.normal'
    }}
  >
    {/* {icon && <Icon iconPath={icon} />} */}
    {title}
  </Styled.div>
)
