import React from 'react'
import { Link } from 'gatsby'

import Box from './Box'

import { mobileOnlyStyles } from '../helpers'

import { YOUTUBE_URL, TWITTER_URL, GOOGLE_MAPS_VENUE_URL } from '../constants'

const Footer = () => (
  <Box
    as="footer"
    css={`
      background: #333;

      ${mobileOnlyStyles(`flex-direction: column;`)}
    `}
    padding="16px 0"
    alignItems="flex-start"
    justifyContent="center"
  >
    <Box column alignItems="flex-start" margin="0 32px">
      <h3>INFOS</h3>
      <Link to="/faq">FAQ</Link>
      <a href="http://confcodeofconduct.com/">Code de conduite</a>
      <a href={GOOGLE_MAPS_VENUE_URL}>Lieu</a>
    </Box>
    <Box column alignItems="flex-start" margin="0 32px">
      <h3>LIENS</h3>
      <a href={YOUTUBE_URL}>YouTube</a>
      <a href={TWITTER_URL}>Twitter</a>
    </Box>
    <Box column alignItems="flex-start" margin="0 32px">
      <h3>EDITIONS PRECEDENTES</h3>
      <a href="/2019">2019</a>
      <a href="/2018">2018</a>
      <a href="/2017">2017</a>
      <a href="/2016">2016</a>
    </Box>
  </Box>
)

export default Footer
