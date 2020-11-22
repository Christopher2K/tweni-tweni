import React, { FC } from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import { Layout } from 'components/Layout'
import { Contact } from 'pages/Contact'
import { Genesis } from 'pages/Genesis'
import { Home } from 'pages/Home'
import { Inspirations } from 'pages/Inspirations'
import { LegalNotice } from 'pages/LegalNotice'
import { Mixs } from 'pages/Mixs'
import { NotFound } from 'pages/NotFound'
import { Project } from 'pages/Project'
import { WebsiteDataContextProvider } from 'hooks/useWebsiteData'

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
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/genese" exact component={Genesis} />
      <Route path="/inspirations" exact component={Inspirations} />
      <Route path="/mixs" exact component={Mixs} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/mentions-legales" exact component={LegalNotice} />
      <Route path="/project/:id" exact component={Project} />
      <Route component={NotFound} />
    </Switch>
  )
}
