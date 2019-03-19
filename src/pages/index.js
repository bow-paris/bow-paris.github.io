import React from 'react'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Scroll from '../components/Scroll'
import Meetup from '../components/Meetup'
import Tickets from '../components/Tickets'
import VideoTalks from '../components/VideoTalks'

import map from '../assets/images/map.png'
import bowSprFile from '../assets/docs/BestofWeb2019-Sponsoring-FR.pdf'
import { meetups, partners } from '../data'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="Best of Web 2019" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        />
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>A propos de Best of Web 2019</h2>
                </header>
                <p>
                  Quand des meetups web parisiens se réunissent pour vous
                  proposer un Best Of de leur talks de l'année, ainsi que
                  beaucoup d'inédits et une journée de formation.
                </p>
                <ul className="actions">
                  <Scroll type="id" element="tickets">
                    <li>
                      <a href="#tickets" className="button special">
                        <i className="icon fa-ticket" /> Achetez un Ticket
                        conférence
                      </a>
                    </li>
                  </Scroll>
                </ul>
                <ul
                  className="actions"
                  style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    flexWrap: 'wrap',
                  }}
                >
                  {meetups.map(({ name, logo }) => (
                    <Meetup key={name} name={name} logo={logo} />
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section id="tickets" className="main special">
            <header className="major">
              <h2>Tickets Formation</h2>
            </header>
            <p>
              Le jeudi 6 juin, nous vous proposons des formations sur les
              dernières technos.
              <br />
              Pour venir, il faut vous un inscrire à un atelier (places
              limitées).
            </p>
            <ul className="features">
              <li>
                <span className="icon major style1 fa-ticket" />
                <h3>Formation</h3>
                <p>Inscription à un atelier</p>
                <a
                  href="https://checkout.eventlama.com/#/events/best-of-web-2019/tickets"
                  className="button disabled"
                >
                  Bientôt
                </a>
              </li>
            </ul>
            <header className="major">
              <h2>Tickets Conférence</h2>
            </header>
            <Tickets />
          </section>

          <section id="programme" className="main special">
            <section>
              <p>Besoin d'inspiration&nbsp;? Voici quelques talks de 2018:</p>
              <VideoTalks />
              <ul className="actions">
                <li>
                  <a
                    href="https://www.youtube.com/channel/UCqU8dtoFv2r0cA795pHvtOw/videos"
                    className="button special"
                  >
                    <span className="icon fa-video-camera" />
                    &nbsp; Revoir tous les talks précedents
                  </a>
                </li>
              </ul>
            </section>
            <p>Best of Web en 2018 en quelques chiffres&nbsp;:</p>
            <ul className="statistics">
              <li className="style1">
                <span className="icon fa-graduation-cap" />
                <strong>4</strong> Ateliers de formation
              </li>
              <li className="style2">
                <span className="icon fa-code-fork" />
                <strong>20</strong> Talks en conférence
              </li>
              <li className="style3">
                <span className="icon fa-id-badge" />
                <strong>600</strong> Participants
              </li>
            </ul>
          </section>

          <section id="map" className="main special">
            <header className="major">
              <h2>S'y rendre</h2>
            </header>
            <img src={map} width="100%" alt="Plan pour la Grande Grypte" />
          </section>

          <section id="spr" className="main special">
            <header className="major">
              <h2>Sponsors</h2>
              <p>Vous voulez faire partie de l'aventure Best of Web 2019 ?</p>
            </header>
            <footer className="major">
              <a href={bowSprFile} className="button special">
                <i className="icon fa-download" /> Téléchargez notre dossier
                sponsoring
              </a>
            </footer>
          </section>

          <section id="partners" className="main special">
            <header className="major">
              <h2>Partenaires</h2>
              <p>Ils nous ont aidés...</p>
            </header>
            <ul
              className="actions"
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                flexWrap: 'wrap',
              }}
            >
              {partners.map(({ name, logo, backgroundColor }) => (
                <Meetup
                  isPartner
                  key={name}
                  name={name}
                  logo={logo}
                  backgroundColor={backgroundColor}
                />
              ))}
            </ul>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
