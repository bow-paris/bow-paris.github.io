import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Link } from 'gatsby'

import Box from '../components/Box'
import Media from '../components/Media'
import CtaButton from '../components/CtaButton'
import ContentSection from '../components/ContentSection'

import Layout from '../components/layout'
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
import lafoule from '../assets/images/2020/IMGL0160.jpg'
import cosmonaute from '../assets/images/2020/cosmonaute.jpg'
import desgens from '../assets/images/2020/desgens.jpg'
import dessindeflorine from '../assets/images/2020/dessindeflorine.jpg'
import scene from '../assets/images/2020/scene.jpg'
import toutlemonde from '../assets/images/2020/toutlemonde.jpg'
import labouffe from '../assets/images/2020/labouffe.jpg'
import microbox from '../assets/images/2020/microbox.jpg'
import tshirt from '../assets/images/2020/tshirt.jpg'
import {desktopOnlyStyles} from "../helpers";

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
  z-index: 1;
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
  z-index: 1;
  margin: 16px 0;
`

const HeroBox = styled(Box)`
  height: 99vh;
  animation: ${slideInBottom} 0.5s ease-in-out none;
`

const HomeBackground = styled.img`
  position: absolute;
  top: 0;
  height: 99vh;
  max-height: 99vh;
  max-width: 80vw;
  z-index: 0;
  opacity: .3;
  object-fit: cover;
  ${mobileOnlyStyles('top: 11vh; height: auto; width: 80vw;')};
`
const Hero = () => (
  <HeroBox
    as="section"
    column
    alignItems="flex-start"
    padding="0 0 0 10%"
    flex="0 1 55%"
  >
    <HomeBackground src={lafoule} />
    <HeroTitle>Best of Web reviendra !</HeroTitle>
    <HeroSubtitle>Paris, France</HeroSubtitle>
    <br/>
    <span>Revivez 2019 <a target="_blank" rel="noopener noreferrer" href="https://photos.google.com/share/AF1QipNwQ9CXFeLplKXTiH1Onxxvad6YUgHj_rB0V5VnIKKfNgEVILHpUaXgX2jHCujRPQ?key=dEJzOVJFXzE1SHdoOHpoSnpVSUxVenVWVl94Wnln">en photos</a> et <a target="_blank" rel="noopener noreferrer" href="https://photos.google.com/share/AF1QipMA11SnkskhzVJi7a1x41j9VKo4GEDlDGRcRzy3RPmgvXj-620nkPg6scyf6WA8xg?key=d1RVVVZZQ2dxdFoyX3lXZkhNRXkxUG9uUzFoRGhB">en dessins</a></span>
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
    <p>
      Les tickets Super Early sont épuisés, mais les Early Bird sont
      disponibles&nbsp;!
    </p>
    <CtaButton href={EVENT_LAMA_URL} target="_blank" rel="noopener noreferrer">
      ACHETER UN TICKET
    </CtaButton>
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
    <p>
      Le Call For Paper est ouvert jusqu'au 29 Février 2020 à 23h59, n'hésitez
      pas à vous lancer&nbsp;! Si vous avez des questions,{' '}
      <Link to="/faq">consultez la FAQ</Link>.
    </p>
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

const Gallery = () => {
  const imgStyle = `object-fit: cover; max-width:100%; max-height: 360px; ${mobileOnlyStyles('max-height: 70px;')}`
  return <ContentSection title="C'est quoi l'ambiance ?">
    <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)"}}>
      <img css={imgStyle} src={cosmonaute} />
      <img css={imgStyle} src={desgens} />
      <img css={imgStyle} src={dessindeflorine} />
      <img css={imgStyle} src={labouffe} />
      <div css={`max-height: 360px; text-align: center; padding-top: 180px; ${mobileOnlyStyles('display: none;')}`}>Revivez 2019 <a target="_blank" rel="noopener noreferrer" href="https://photos.google.com/share/AF1QipNwQ9CXFeLplKXTiH1Onxxvad6YUgHj_rB0V5VnIKKfNgEVILHpUaXgX2jHCujRPQ?key=dEJzOVJFXzE1SHdoOHpoSnpVSUxVenVWVl94Wnln">en photos</a> et <a target="_blank" rel="noopener noreferrer" href="https://photos.google.com/share/AF1QipMA11SnkskhzVJi7a1x41j9VKo4GEDlDGRcRzy3RPmgvXj-620nkPg6scyf6WA8xg?key=d1RVVVZZQ2dxdFoyX3lXZkhNRXkxUG9uUzFoRGhB">en dessins</a> !</div>
      <div css={`max-height: 70px; padding-top: 30px; ${desktopOnlyStyles('display: none;')}`}>&nbsp;</div>
      <img css={imgStyle} src={scene} />
      <img css={imgStyle} src={toutlemonde} />
      <img css={imgStyle} src={microbox} />
      <img css={imgStyle} src={tshirt} />
    </div>
  </ContentSection>
}

const Index = () => (
  <Layout>
    <Hero />

    <AboutSection />
    <Gallery />
    {/*<SponsorSection />*/}
    {/*<ProgramSection />*/}
    {/*<TicketSection />*/}
    <PartnerSection />
  </Layout>
)

export default Index
