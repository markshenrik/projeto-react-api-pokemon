import React from 'react'
import styled from 'styled-components'

const StyledFooter = () => {
    return(
    <Footer>
      <RefLinks href="https://www.flaticon.com/free-icons/pokemon" title="pokemon icons">Pokemon icons created by Freepik - Flaticon</RefLinks>
    </Footer>
    )
}

const RefLinks = styled.a`
  text-decoration: none;
  display: block;
  text-align: center;
  margin: 5px;
  font-family: 'Ubuntu', sans-serif;
  &:visited{
    color: white;
  }
`

const Footer = styled.footer`
  background-color: black;
  padding: 5px;
`

export default StyledFooter