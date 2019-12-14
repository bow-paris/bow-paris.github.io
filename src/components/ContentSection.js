import React from 'react'
import styled from 'styled-components'

import Box from './Box'
import { COLORS, GRADIENT } from '../constants'
import { desktopOnlyStyles } from '../helpers'

const SectionTitle = styled.h2`
  font-family: Roboto Mono;
  font-weight: 400;
  font-size: 2.5em;

  color: ${COLORS.text};
  position: relative;
  padding-bottom: 32px;

  &:after {
    content: '';
    left: 0%;
    bottom: 0;
    position: absolute;
    width: 100px;
    height: 2px;
    background: ${GRADIENT};
  }

  ${desktopOnlyStyles(`
    &:after {
      left: -32px;
    }
  `)}
`

const ContentSection = ({ title, children }) => (
  <Box
    as="section"
    column
    alignItems="flex-start"
    margin="0 auto 48px"
    width="80%"
  >
    <SectionTitle>{title}</SectionTitle>
    {children}
  </Box>
)

export default ContentSection
