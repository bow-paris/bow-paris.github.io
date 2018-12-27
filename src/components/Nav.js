import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = props => (
  <nav id="nav" className={props.sticky ? 'alt' : ''}>
    <Scrollspy
      items={['intro', 'tickets', 'programme', 'map', 'spr']}
      currentClassName="is-active"
      offset={-300}
    >
      <li>
        <Scroll type="id" element="intro">
          <a href="#intro">A propos</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="tickets">
          <a href="#tickets">Tickets</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="programme">
          <a href="#programme">Programme</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="map">
          <a href="#map">S'y rendre</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="spr">
          <a href="#spr">Sponsors</a>
        </Scroll>
      </li>
    </Scrollspy>
  </nav>
)

export default Nav
