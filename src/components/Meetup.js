import React from 'react'

export default ({
  name,
  logo,
  backgroundColor = 'transparent',
  isPartner = false,
}) => (
  <li className={`meetup${isPartner ? ' partner' : ''}`}>
    <img
      src={logo}
      width="auto"
      alt=""
      height="100px"
      style={{ backgroundColor }}
    />
    <p>{name}</p>
  </li>
)
