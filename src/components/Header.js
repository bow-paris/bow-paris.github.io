import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Box from './Box'

import { COLORS, EVENT_LAMA_URL } from '../constants'

import logo from '../assets/images/logo_bow_100_cropped.png'

const BowLogo = styled.img`
  height: 64px;
  width: 64px;
  background-color: white;
  border-radius: 50%;
`

const MenuItem = styled.li`
  list-style-type: none;
  padding-right: 32px;
  font-size: 1.2em;
`

const NavLink = styled(Link).attrs({
  activeStyle: { color: COLORS.gradientStart },
})`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const TicketMenuCta = styled.a`
  color: ${COLORS.contrast};
  border: 2px solid ${COLORS.fade};
  padding: 16px;
  font-size: 1.2em;

  &:hover {
    color: ${COLORS.text};
  }
}
`

const Header = () => (
  <Box as="header" justifyContent="space-between">
    <Link to="/">
      <BowLogo src={logo} alt="Best of Web - Home" />
    </Link>
    <Box>
      <Box as="ul" justifyContent="space-between" desktopOnly>
        <MenuItem>
          <NavLink to="/">HOME</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/faq">FAQ</NavLink>
        </MenuItem>
      </Box>
      <TicketMenuCta
        target="_blank"
        rel="noopener noreferrer"
        href={EVENT_LAMA_URL}
      >
        TICKETS
      </TicketMenuCta>
    </Box>
  </Box>
)

export default Header
