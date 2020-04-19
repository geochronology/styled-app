import React from 'react'
import ReactDom from 'react-dom'
import { ThemeProvider } from 'styled-components'

import App from './App'
import GlobalStyle from './theme/globalStyles'
import Theme from './theme/theme.js'

const root = document.getElementById('root');

ReactDom.render(
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>
  , root);