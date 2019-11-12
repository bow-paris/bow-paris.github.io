import React from 'react'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Scroll from '../components/Scroll'
import Meetup from '../components/Meetup'
import Talks, { Trainings } from '../components/Talks'
import Sponsors from '../components/Sponsors'

import map from '../assets/images/map.png'
import bowSprFile from '../assets/docs/BestofWeb2020-Sponsoring-FR.pdf'
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
        <Helmet title="Best of Web 2020" />

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
                  <h2>A propos de Best of Web 2020</h2>
                </header>
                <p>
                  Best of Web, c'est une journée de conférence le 5 juin,
                  préparée par des meetups web parisiens qui se réunissent pour
                  vous proposer un Best Of de leur talks de l'année, ainsi que
                  beaucoup d'inédits.
                  <br />
                  Pour ceux qui ont vraiment soif d'apprendre, nous proposons en
                  plus une journée de formation le 4 juin.
                </p>
                <p>
                  Le ticket conférence donne accès à la journée du 5 juin
                  uniquement.
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
              <h2>Tickets Conférence</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style5 fa-ticket" />
                <h3>Regular (5 juin)</h3>
                <p>Même a ce prix, ça reste cadeau&nbsp;!</p>
                <a
                  href="https://checkout.eventlama.com/#/events/best-of-web-2020/tickets"
                  className="button"
                >
                  Acheter
                </a>
              </li>
            </ul>

            <header className="major">
              <h2>Tickets Formation</h2>
            </header>
            <p>
              Le jeudi 4 juin, nous vous proposons des formations sur les
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
                  href="https://checkout.eventlama.com/#/events/best-of-web-2020/tickets"
                  className="button"
                >
                  Acheter
                </a>
              </li>
            </ul>
          </section>

          <section id="programme" className="main special">
            <header className="major">
              <h2>Programme de la journée conférence</h2>
            </header>
            <p>
                Le programme sera mis en ligne bientôt.
            </p>
            <header className="major" id="formations">
              <h2>Programme de la journée formation</h2>
            </header>
            <p>
              Les ateliers durent 3h. Pour assister à un atelier, vous devez
              acheter le ticket correspondant.
            </p>
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

              <p>Vous voulez faire partie de l'aventure Best of Web 2020 ?</p>
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
