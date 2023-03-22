import React from 'react'
import AppRoutes from './assets/routes/AppRoutes.js';
import {ThemeProvider} from './assets/context/ThemeContext.js';
import {createGlobalStyle} from 'styled-components'
import StyledFooter from './assets/footer/StyledFooter.js'

function App() {
  return (
   <>
    <ThemeProvider>
      <GlobalStyle />
      <AppRoutes />    
    </ThemeProvider>
    <StyledFooter />
   </>
  );
}

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
}
`

export default App;
