import React from 'react'
import styled from 'styled-components'

import Box from './Box'

import { mobileOnlyStyles } from '../helpers'

import { YOUTUBE_URL, TWITTER_URL } from '../constants'

const Footer = () => (
  <Box
    as="footer"
    css={`
      background: #F8F8F8;

      ${mobileOnlyStyles(`flex-direction: column;`)}
    `}
    padding="16px 0"
    alignItems="flex-start"
    justifyContent="center"
  >
    <Box column alignItems="flex-start" margin="0 32px">
      <h3>INFOS</h3>
      <a href="http://confcodeofconduct.com/">Code de conduite</a>
      <a href="https://goo.gl/maps/sRuBkehVX6h83xm99">Lieu</a>
    </Box>
    <Box column alignItems="flex-start" margin="0 32px">
      <h3>LIENS</h3>
      <a href={YOUTUBE_URL}>YouTube</a>
      <a href={TWITTER_URL}>Twitter</a>
    </Box>
    <Box column alignItems="flex-start" margin="0 32px">
      <h3>EDITIONS PRECEDENTES</h3>
      <a href="/2018">2018</a>
      <a href="/2017">2017</a>
      <a href="/2016">2016</a>
    </Box>
  </Box>
)

export default Footer
