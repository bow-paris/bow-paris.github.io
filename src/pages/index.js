import React from 'react'
import styled, { keyframes } from 'styled-components'

// TODO enable this with the nav menu
// import Waypoint from 'react-waypoint'

import Box from '../components/Box'
import Media from '../components/Media'
import CtaButton from '../components/CtaButton'
import ContentSection from '../components/ContentSection'

import Layout from '../components/layout'
import Header from '../components/Header'
import Footer from '../components/Footer'
// import Talks, { Trainings } from '../components/Talks'
// import Sponsors from '../components/Sponsors'

import {
  COLORS,
  GRADIENT,
  EVENT_LAMA_URL,
  EVENT_LAMA_CFP_URL,
  YOUTUBE_URL,
} from '../constants.js'
import { mobileOnlyStyles } from '../helpers.js'

import bowSprFile from '../assets/docs/BestofWeb2020-Sponsoring-FR.pdf'
import { meetups, partners } from '../data'

const slideInBottom = keyframes`
  0% {
    transform: translateY(200px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`

const HeroTitle = styled.h1`
  font-family: Roboto Mono;
  font-size: 5em;

  ${mobileOnlyStyles('font-size: 3em;')};

  margin: 48px 0 16px;

  color: ${COLORS.contrast};

  @supports (-webkit-background-clip: text) and
    (-webkit-text-fill-color: transparent) {
    background: ${GRADIENT};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

const HeroSubtitle = styled.h2`
  font-family: Roboto Mono;
  font-size: 1.5em;

  margin: 16px 0;
`

const HeroBox = styled(Box)`
  animation: ${slideInBottom} 0.5s ease-in-out none;

  ${mobileOnlyStyles(`
    flex: 0 1 70%;
  `)}
`

const Hero = () => (
  <HeroBox
    as="section"
    column
    alignItems="flex-start"
    justifyContent="flex-start"
    padding="0 0 0 10%"
    flex="0 1 55%"
  >
    <HeroTitle>Best of Web 2020</HeroTitle>
    <HeroSubtitle>4/5 Juin 2020 - Paris, France</HeroSubtitle>
    <CtaButton href={EVENT_LAMA_URL} target="_blank" rel="noopener noreferrer">
      ACHETER UN TICKET
    </CtaButton>
  </HeroBox>
)

const AboutSection = () => (
  <ContentSection title="A propos">
    <p
      css={`
        text-align: justify;
      `}
    >
      Best of Web, c'est un évènement sur deux jours. Une journée de workshops
      et une journée de conférence preparée par{' '}
      {(meetups || []).length || 'des'} meetups web parisiens. La journée
      conférence est composée à 50% du Best Of des talks meetups de l'année et
      50% d'inédits provenant d'un CFP. Les tickets sont spécifiques à chaque
      journée.
    </p>
    <p>
      Le programme de la conférence est en cours de préparation. Rendez vous sur{' '}
      <a href={YOUTUBE_URL}>notre chaine YouTube</a> pour voir les talks des
      éditions précédentes.
    </p>
  </ContentSection>
)

const TicketSection = () => (
  <ContentSection title="Tickets">
    <p>
      Les tickets pour la journée conférence arrivent en trois séries, Super
      Early Bird, Early Bird et Regular.
    </p>
    <p>Les tickets Super Early Bird sont disponibles&nbsp;!</p>
  </ContentSection>
)

const SponsorSection = () => (
  <ContentSection title="Sponsors">
    <p>Vous voulez faire partie de l'aventure Best Of Web 2020&nbsp;?</p>
    <CtaButton href={bowSprFile} download>
      TELECHARGER LE DOSSIER SPONSORING
    </CtaButton>
  </ContentSection>
)

const ProgramSection = () => (
  <ContentSection title="Programme">
    <p>Le Call For Paper est ouvert, n'hésitez pas à vous lancer&nbsp;!</p>
    <CtaButton href={EVENT_LAMA_CFP_URL}>PROPOSER UN TALK</CtaButton>
  </ContentSection>
)

const PartnerSection = () => (
  <ContentSection title="Partenaires">
    <p>Ils nous ont aidés à faire de Best of Web une réalité&nbsp;!</p>
    <Box
      css={`
        ${mobileOnlyStyles(`width: 100%;`)}
      `}
      wrap
      justifyContent="space-between"
      width="80%"
      margin="0 auto"
    >
      {partners.map(partner => (
        <Media {...partner} />
      ))}
    </Box>
    <p>
      Les meetups suivants participent à la conférence et à l'élaboration du
      programme.
    </p>
    <Box
      css={`
        ${mobileOnlyStyles(`width: 100%;`)}
      `}
      wrap
      justifyContent="space-between"
      width="80%"
      margin="0 auto"
    >
      {meetups.map(meetup => (
        <Media {...meetup} flex="1 1 25%" resizeByHeight showName />
      ))}
    </Box>
  </ContentSection>
)

// TODO Main styles should be merged into Hero component but Header component needs to be
// moved from child to sibling before doing this. Height should be reworked to adjust this change.
const Main = styled.main`
  height: 99vh;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Index = () => (
  <Layout>
    <Main>
      <Header />
      <Hero />
    </Main>

    <AboutSection />
    <SponsorSection />
    <ProgramSection />
    <TicketSection />
    <PartnerSection />

    <Footer />
  </Layout>
)

export default Index
