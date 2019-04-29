import React from 'react'
import styled from 'styled-components'
import { sponsors } from '../data'

const WIDTH_BY_TYPE = {
  gold: '300px',
  silver: '200px',
  bronzePlus: '175px',
}

const FlexGrid = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;

  a {
    border: none;
  }

  img {
    width: ${props =>
      props.resizeByHeight ? 'auto' : WIDTH_BY_TYPE[props.type]};
    height: ${props => (props.resizeByHeight ? '100px' : 'auto')};
  }
`

const Wrapper = styled.div`
  flex: 1 1 auto;
  margin: 1em;
`
const Silver = ({ path, name, link, resizeByHeight = false }) => (
  <Wrapper>
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img
        src={path}
        className="logo"
        alt={name}
        title={name}
        style={resizeByHeight ? { height: '100px', width: 'auto' } : {}}
      />
      <br />
    </a>
  </Wrapper>
)

const Gold = ({ path, name, link }) => (
  <Wrapper>
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={path} className="logo" alt={name} title={name} />
      <br />
    </a>
  </Wrapper>
)

const BronzePlus = ({ path, name, link, resizeByHeight = false }) => (
  <Wrapper>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ border: 'none' }}
    >
      <img
        src={path}
        className="logo"
        alt={name}
        title={name}
        style={{ height: 'auto', width: '175px' }}
      />
      <br />
    </a>
  </Wrapper>
)

export default () => (
  <div className="container">
    <h3>Gold</h3>
    <FlexGrid type="gold">
      {sponsors.gold.map(({ path, name, link }) => (
        <Gold key={name} path={path} name={name} link={link} />
      ))}
    </FlexGrid>
    <h3>Silver</h3>
    <FlexGrid type="silver">
      {sponsors.silver.map(({ path, name, link, resizeByHeight }) => (
        <Silver
          key={name}
          path={path}
          name={name}
          link={link}
          resizeByHeight={resizeByHeight}
        />
      ))}
    </FlexGrid>
    <h3>Bronze +</h3>
    <FlexGrid type="bronzePlus">
      {sponsors.bronzePlus.map(({ path, name, link }) => (
        <BronzePlus path={path} name={name} link={link} />
      ))}
    </FlexGrid>
  </div>
)
