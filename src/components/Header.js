import React from 'react'
import styled from 'styled-components'

import logo from '../assets/images/logo_bow_300_cropped.png'

const SocialLinks = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;

  list-style-type: none;
`

const SocialLink = styled.li`
  margin: 5px;
`

const Header = props => (
  <header id="header" className="alt">
    <span className="logo">
      <img
        src={logo}
        alt=""
        style={{ backgroundColor: 'white', borderRadius: '50%' }}
      />
    </span>
    <h1>Best of Web</h1>
    <p>Paris - 4/5 Juin 2020</p>
    <SocialLinks>
      <SocialLink title="Compte Twitter">
        <a
          href="https://twitter.com/bestofwebconf"
          className="icon fa-twitter alt"
        >
          <span className="label">Twitter</span>
        </a>
      </SocialLink>
      <SocialLink title="Chaine YouTube">
        <a
          href="https://www.youtube.com/channel/UCqU8dtoFv2r0cA795pHvtOw/videos"
          className="icon fa-youtube alt"
        >
          <span className="label">Youtube</span>
        </a>
      </SocialLink>
      <SocialLink title="Event Meetup">
        <a
          href="https://www.meetup.com/fr-FR/Best-Of-Web/events/260340524/"
          className="icon fa-meetup alt"
        >
          <span className="label">Meetup</span>
        </a>
      </SocialLink>
    </SocialLinks>
  </header>
)

export default Header
