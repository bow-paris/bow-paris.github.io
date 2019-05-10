import React from 'react'
import styled from 'styled-components'

const FooterLinks = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0;

  list-style-type: none;
`

const Footer = props => (
  <footer id="footer">
    <FooterLinks>
      <li>
        <a href="http://confcodeofconduct.com/">
          <span className="label">Code de conduite</span>
        </a>
      </li>
      <li>
        <a href="/2018">
          <span className="label">2018</span>
        </a>
      </li>
      <li>
        <a href="/2017">
          <span className="label">2017</span>
        </a>
      </li>
      <li>
        <a href="/2016">
          <span className="label">2016</span>
        </a>
      </li>
    </FooterLinks>
  </footer>
)

export default Footer
