import React from 'react'
import styled from 'styled-components'

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
  padding-right: 24px;
  font-size: 1.2em;
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
    <BowLogo src={logo} alt="Best of Web - Home" />
    <Box>
      <Box as="ul" justifyContent="space-between" mobileOnly desktopOnly>
        <MenuItem>HOME</MenuItem>
        <MenuItem>ABOUT</MenuItem>
        <MenuItem>SPEAKERS</MenuItem>
        <MenuItem>LOCATION</MenuItem>
        <MenuItem>SPONSORS</MenuItem>
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
