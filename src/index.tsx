import React, { FC } from 'react'
import { render } from 'react-dom'
import { Global, ThemeProvider } from '@emotion/react'

import { global } from 'styles/global'
import { theme } from 'styles/theme'
import { Router } from 'router'

const App: FC = () => {
  return (
    <React.Fragment>
      <Global styles={global} />
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </React.Fragment>
  )
}

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)
