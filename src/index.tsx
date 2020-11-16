import React from 'react'
import { render } from 'react-dom'
import { Router } from './router'

render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root'),
)
