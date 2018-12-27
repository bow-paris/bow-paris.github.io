import React from 'react'

const Footer = props => (
  <footer id="footer">
    <ul className="actions">
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
    <ul className="actions">
      <li>
        <a
          href="https://twitter.com/bestofwebconf"
          className="icon fa-twitter alt"
        >
          <span className="label">Twitter</span>
        </a>
      </li>
      <li>
        <a
          href="https://www.youtube.com/channel/UCqU8dtoFv2r0cA795pHvtOw/videos"
          className="icon fa-youtube alt"
        >
          <span className="label">Youtube</span>
        </a>
      </li>
      <li>
        <a href="https://github.com/bow-paris" className="icon fa-github alt">
          <span className="label">GitHub</span>
        </a>
      </li>

      <li>
        Design:<a href="https://html5up.net"> HTML5 UP</a>
      </li>
    </ul>
  </footer>
)

export default Footer
