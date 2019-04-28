import React from 'react'

const gold = [
  {
    path: 'images/sponsors2019/eleven-labs.png',
    name: 'Eleven Labs',
    link: 'https://eleven-labs.com/',
  },
  {
    path: 'images/sponsors2019/microsoft.png',
    name: 'Microsoft',
    link: 'http://www.microsoft.com/',
  },
]
const silver = [
  {
    path: 'images/sponsors2019/sfeir.png',
    name: 'SFEIR',
    link: 'http://www.sfeir.com/',
  },
  {
    path: 'images/sponsors2019/viseo.jpg',
    name: 'Viséo',
    link: 'https://www.viseo.com/fr',
  },
  {
    path: 'images/sponsors2019/webnet.jpg',
    name: 'Webnet',
    link: 'http://www.webnet.fr ',
  },
  {
    path: 'images/sponsors2019/xebia.png',
    name: 'Xébia',
    link: 'https://xebia.fr/',
  },
  {
    path: 'images/sponsors2019/abbeal.jpg',
    name: 'Abbeal',
    link: 'http://www.abbeal.com/',
  },
  {
    path: 'images/sponsors2019/toucan-toco.png',
    name: 'Toucan Toco',
    link: 'https://toucantoco.com/fr/',
  },
  {
    path: 'images/sponsors2019/matters.png',
    name: 'Matters',
    link: 'https://matters.tech',
  },
  {
    path: 'images/sponsors2019/hiway.png',
    name: 'Hiway',
    link: 'https://www.hiway.org/',
  },
  {
    path: 'images/sponsors2019/contentsquare.png',
    name: 'ContentSquare',
    link: 'https://contentsquare.com/',
    resizeByHeight: true,
  },
]

const Silver = ({ path, name, link, resizeByHeight = false }) => (
  <div style={{ flex: '1 1 auto', margin: '15px 0' }}>
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
  </div>
)

const Gold = ({ path, name, link }) => (
  <div>
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={path} className="logo" alt={name} title={name} />
      <br />
    </a>
  </div>
)

export default () => (
  <div className="container">
    <h3 className="thin title">Gold</h3>
    <section className="gold">
      {gold.map(({ path, name, link }) => (
        <Gold key={name} path={path} name={name} link={link} />
      ))}
    </section>
    <h3 className="thin title">Silver</h3>
    <section className="silver">
      {silver.map(({ path, name, link, resizeByHeight }) => (
        <Silver
          key={name}
          path={path}
          name={name}
          link={link}
          resizeByHeight={resizeByHeight}
        />
      ))}
    </section>
  </div>
)
