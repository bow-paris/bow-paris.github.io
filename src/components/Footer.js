import React from 'react'

const Footer = props => (
  <footer id="footer">
    <ul
      className="actions"
      style={{
        width: '100%',
        margin: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
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
    </ul>
  </footer>
)

export default Footer
