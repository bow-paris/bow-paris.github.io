import React, { Fragment } from 'react'

const gold = [
  { path: 'images/sponsors2019/eleven-labs.png', name: 'Eleven Labs', link: 'https://eleven-labs.com/' },
  { path: 'images/sponsors2019/microsoft.png', name: 'Microsoft', link: 'http://www.microsoft.com/' }
];
const silver = [
  { path: 'images/sponsors2019/sfeir.png', name: 'SFEIR', link: 'http://www.sfeir.com/' },
  { path: 'images/sponsors2019/viseo.jpg', name: 'Viséo', link: 'https://www.viseo.com/fr' },
  { path: 'images/sponsors2019/webnet.jpg', name: 'Webnet', link: 'http://www.webnet.fr ' },
  { path: 'images/sponsors2019/xebia.png', name: 'Xébia', link: 'https://xebia.fr/' },
  { path: 'images/sponsors2019/abbeal.jpg', name: 'Abbeal', link: 'http://www.abbeal.com/' },
  { path: 'images/sponsors2019/toucan-toco.png', name: 'Toucan Toco', link: 'https://toucantoco.com/fr/' },
  { path: 'images/sponsors2019/matters.png', name: 'Matters', link: 'https://matters.tech' },
  { path: 'images/sponsors2019/hiway.png', name: 'Hiway', link: 'https://www.hiway.org/' },
];



const Silver = ({ path, name, link }) => (
  <div>

  <a href={link} target="_blank">
      <img src={path}
        className="logo"
        alt={name}
        title={name}
      /><br/>
    </a>
  </div>
);

const Gold = ({ path, name, link }) => (
    <div>

    <a href={link} target="_blank">
        <img src={path}
          className="logo"
          alt={name}
          title={name}

        /><br/>
      </a>
    </div>
);

export default () => (
  <div class="container">
    <h3 class="thin title">Gold</h3>
    <section class="gold">

      {gold.map(({ path, name, link }) => (

        <Gold path={path} name={name} link={link} />
    ))}

    </section>
  <h3 class="thin title">Silver</h3>
  <section class="silver">

    { silver.map( ( { path, name, link } ) => (
    <Silver path={path} name={name} link={link} />
  ))}
  </section>
  </div>
)
