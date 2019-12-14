import styled from 'styled-components'

const Box = styled.div`
  display: flex;
  flex-direction: ${props => (props.column ? 'column' : 'row')};
  flex-wrap: ${props => (props.wrap ? 'wrap' : 'nowrap')};

  align-items: ${props => props.alignItems || 'center'};
  justify-content: ${props => props.justifyContent || 'center'};

  flex: ${props => props.flex || '0 1 auto'};
  width: ${props => props.width || 'auto'};
  margin: ${props => props.margin || '0'};
  padding: ${props => props.padding || '0'};

  ${props =>
    props.mobileOnly &&
    `
    @media (min-width: 768px) {
      display: none;
    }
  `}
  ${props =>
    props.desktopOnly &&
    `
    @media (max-width: 768px) {
      display: none;
    }
  `};
`

export default Box
