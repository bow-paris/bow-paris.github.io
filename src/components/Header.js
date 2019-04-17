import React from 'react'

import logo from '../assets/images/logo_bow_300_cropped.png'

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
    <p>Paris - 6/7 Juin 2019</p>
    <ul className="actions" style={{ margin: 0 }}>
      <li title="Compte Twitter">
        <a
          href="https://twitter.com/bestofwebconf"
          className="icon fa-twitter alt"
        >
          <span className="label">Twitter</span>
        </a>
      </li>
      <li title="Chaine YouTube">
        <a
          href="https://www.youtube.com/channel/UCqU8dtoFv2r0cA795pHvtOw/videos"
          className="icon fa-youtube alt"
        >
          <span className="label">Youtube</span>
        </a>
      </li>
      <li title="Event Meetup">
        <a
          href="https://www.meetup.com/fr-FR/Best-Of-Web/events/260340524/"
          className="icon fa-meetup alt"
        >
          <span className="label">Meetup</span>
        </a>
      </li>
    </ul>
  </header>
)

export default Header
