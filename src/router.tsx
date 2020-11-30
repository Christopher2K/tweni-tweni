import React, { FC } from 'react'
import { Switch, Route, BrowserRouter, useLocation } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { css, Global } from '@emotion/react'

import { Layout } from 'components/Layout'
import { Contact } from 'pages/Contact'
import { Genesis } from 'pages/Genesis'
import { Home } from 'pages/Home'
import { Inspirations } from 'pages/Inspirations'
import { LegalNotice } from 'pages/LegalNotice'
import { Mix } from 'pages/Mix'
import { NotFound } from 'pages/NotFound'
import { Article } from 'pages/Article'
import { WebsiteDataContextProvider } from 'hooks/useWebsiteData'

const pageTransitions = css`
  .page-enter {
    opacity: 0;
  }

  .page-enter-active {
    opacity: 1;
    transition: opacity 400ms;
  }

  .page-exit {
    opacity: 1;
  }

  .page-exit-active {
    opacity: 0;
    transition: opacity 400ms;
  }
`

export const Router: FC = () => (
  <BrowserRouter>
    <WebsiteDataContextProvider>
      <Layout>
        <Links />
      </Layout>
    </WebsiteDataContextProvider>
  </BrowserRouter>
)

const Links: FC = () => {
  const { key } = useLocation()
  return (
    <TransitionGroup>
      <Global styles={pageTransitions} />
      <CSSTransition key={key} classNames="page" timeout={1000}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/genese" exact component={Genesis} />
          <Route path="/inspirations" exact component={Inspirations} />
          <Route path="/mix" exact component={Mix} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/mentions-legales" exact component={LegalNotice} />
          <Route path="/article/:id" exact component={Article} />
          <Route component={NotFound} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  )
}
