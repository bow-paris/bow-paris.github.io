import React from 'react'
import Helmet from 'react-helmet'
import styled, { createGlobalStyle } from 'styled-components'

import { COLORS } from '../constants'

const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    background-color: ${COLORS.bg};
  }

  h1, h2 {
    line-height: 1;
  }

  a {
    color: ${COLORS.text};
  }

  * {
    box-sizing: border-box;
  }
}
`

const Layout = styled.div`
  font-family: Roboto Mono, sans-serif;
  color: ${COLORS.text};
`

export default ({ children }) => (
  <Layout>
    <Helmet htmlAttributes={{ lang: 'fr' }} title="Best of Web 2020" />
    <GlobalStyles />
    {children}
  </Layout>
)
