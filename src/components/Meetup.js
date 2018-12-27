import React from 'react'

export default ({ name, logo, backgroundColor = 'transparent' }) => (
  <li className="meetup">
    <img src={logo} width="auto" height="100px" style={{ backgroundColor }} />
    <p>{name}</p>
  </li>
)
