import React from 'react'

import Layout from '../components/layout'
import Box from '../components/Box'
import CtaButton from '../components/CtaButton'

import { EVENT_LAMA_URL } from '../constants'

const NotFoundPage = () => (
  <Layout>
    <Box
      column
      css={`
        height: 80vh;
      `}
    >
      <h1>Vous êtes perdus&nbsp;?</h1>

      <p>Cliquez sur le bouton pour participer à Best of Web 2020&nbsp;!</p>
      <CtaButton
        href={EVENT_LAMA_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        ACHETER UN TICKET
      </CtaButton>
    </Box>
  </Layout>
)

export default NotFoundPage
