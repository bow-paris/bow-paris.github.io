import styled from 'styled-components'

import { COLORS, GRADIENT } from '../constants'

const CtaButton = styled.a`
  background-color: ${COLORS.fade};
  margin-top: 16px;
  padding: 24px;
  position: relative;
  z-index: 10;

  text-decoration: none;

  &:before {
    content: '';
    background: ${GRADIENT};
    position: absolute;
    width: 0%;
    top: 0;
    left: 0;
    height: 100%;
    transition: 0.3s linear;
    z-index: -1;
  }

  &:hover:before {
    width: 100%;
  }
`

export default CtaButton
