import React from 'react';
import styled from 'styled-components';


const HeaderComponent = () => {
return(
    <HeaderDiv>Pokemon Api React Project</HeaderDiv>
)
}

const HeaderDiv = styled.h1`
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  font-weight: 700;
  text-align: center;
  font-size: 3rem;
  padding: 30px;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 700;
  color: #ffffff;
`


export default HeaderComponent