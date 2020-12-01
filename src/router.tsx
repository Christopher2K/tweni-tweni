import React, { FC } from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import { css, Global } from '@emotion/react'

import { Layout } from 'components/Layout'
import { Contact } from 'pages/Contact'
import { Genesis } from 'pages/Genesis'
import { Home } from 'pages/Home'
import { Inspirations } from 'pages/Inspirations'
import { LegalNotice } from 'pages/LegalNotice'
import { Mix } from 'pages/Mix'
import { Article } from 'pages/Article'
import { WebsiteDataContextProvider } from 'hooks/useWebsiteData'

const routes = [
  { exact: true, path: '/', name: 'Home', Component: Home },
  { exact: true, path: '/genese', name: 'Genesis', Component: Genesis },
  {
    exact: true,
    path: '/inspirations',
    name: 'Inspirations',
    Component: Inspirations,
  },
  { exact: true, path: '/mix', name: 'Mix', Component: Mix },
  { exact: true, path: '/contact', name: 'Contact', Component: Contact },
  {
    exact: true,
    path: '/mentions-legales',
    name: 'LegalNotice',
    Component: LegalNotice,
  },
  { exact: true, path: '/article/:id', name: 'Article', Component: Article },
]

const pageTransitions = css`
  .page-enter {
    opacity: 0;
    transform: scale(1.1);
  }

  .page-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: opacity 300ms, transform 300ms;
  }

  .page-exit {
    opacity: 1;
    transform: scale(1);
  }

  .page-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 300ms, transform 300ms;
  }
`

export const Router: FC = () => (
  <BrowserRouter>
    <WebsiteDataContextProvider>
      <Global styles={pageTransitions} />
      <Layout>
        <Links />
      </Layout>
    </WebsiteDataContextProvider>
  </BrowserRouter>
)

const Links: FC = () => {
  return (
    <>
      {routes.map(({ path, Component, exact }) => (
        <Route key={path} exact={exact} path={path}>
          {({ match }) => (
            <CSSTransition
              in={match != null}
              timeout={300}
              classNames="page"
              unmountOnExit
            >
              <Component />
            </CSSTransition>
          )}
        </Route>
      ))}
    </>
  )
}
