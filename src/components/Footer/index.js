import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { fromTheme } from 'theme/globalStyle'

const Wrapper = styled.footer`
  font-size: 11px;
  margin: 0 100px;
`

const P1 = styled.p`
  margin-bottom: 0.3em;
  text-align: center;
`

const P2 = styled.p`
  color: ${fromTheme('grey')};
  text-align: center;
`

const Footer = () => (
  <Wrapper>
    <P1>© 2018 Litecoin Foundation</P1>
    <a target="_blank" href="mailto:contact@litecoinfoundation.net">
      <P2>contact@litecoinfoundation.net</P2>
    </a>
    <a target="_blank" href="https://litecoin-foundation.org/privacy-policy/">
      <P2>Privacy Policy</P2>
    </a>
  </Wrapper>
)

export default Footer
