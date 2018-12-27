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
  </header>
)

export default Header
