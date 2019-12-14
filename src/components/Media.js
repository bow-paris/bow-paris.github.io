import React from 'react'
import styled from 'styled-components'

import Box from './Box'
import { mobileOnlyStyles } from '../helpers'

const Img = styled.img`
  width: ${props => (props.resizeByHeight ? 'auto' : '200px')};
  height: ${props => (props.resizeByHeight ? '72px' : 'auto')};

  ${props =>
    props.resizeByHeight &&
    mobileOnlyStyles(`
    height: 50px;
  `)}
`

const Media = ({ logo, name, link, resizeByHeight, showName, ...props }) => (
  <Box
    css={`
      ${mobileOnlyStyles('flex: 1 1 80%;')}
    `}
    column
    margin="32px 0"
    {...props}
  >
    <Img src={logo} alt={name} title={name} resizeByHeight={resizeByHeight} />
    {showName && name}
  </Box>
)

export default Media
