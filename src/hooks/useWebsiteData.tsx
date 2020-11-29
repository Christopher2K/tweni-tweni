import React, {
  FC,
  useState,
  useEffect,
  useContext,
  createContext,
} from 'react'
import Prismic from 'prismic-javascript'

import { usePrismic } from './usePrismic'
import {
  fromPrismicDataToArticleModel,
  fromPrismicDataToInxpirationModel,
  fromPrismicDataToMixModel,
} from 'utils/data'

interface WebsiteData {
  articles?: Model.Article[]
  mixs?: Model.Mix[]
  inspirations?: Model.Inspiration[]
}

const initialData: WebsiteData = {}

const WebsiteDataContext = createContext<WebsiteData>(initialData)

export function useWebsiteData(): WebsiteData {
  const data = useContext(WebsiteDataContext)
  return data
}

export const WebsiteDataContextProvider: FC = ({ children }) => {
  const prismic = usePrismic()
  const [articles, setArticles] = useState<Model.Article[]>()
  const [inspirations, setInspirations] = useState<Model.Inspiration[]>()
  const [mixs, setMixs] = useState<Model.Mix[]>()

  useEffect(() => {
    // fetch('/__mock__/fake_articles.json')
    //   .then(response => response.json() as Promise<Model.Article[]>)
    //   .then(setArticles)
    //   .catch(console.error)

    // fetch('/__mock__/fake_mixs.json')
    // .then(response => response.json() as Promise<Model.Mix[]>)
    // .then(setMixs)
    // .catch(console.error)

    prismic
      .query(Prismic.Predicates.at('document.type', 'article'), {
        orderings: '[my.article.date desc]',
        pageSize: 100,
      })
      .then(prismicDocument => {
        const articles: Model.Article[] = prismicDocument.results.map(
          fromPrismicDataToArticleModel,
        )
        setArticles(articles)
      })
      .catch(console.error)

    prismic
      .query(Prismic.Predicates.at('document.type', 'inspiration'), {
        orderings: '[my.inspirations.date]',
        pageSize: 100,
      })
      .then(prismicDocument => {
        const inspirations: Model.Inspiration[] = prismicDocument.results.map(
          fromPrismicDataToInxpirationModel,
        )
        setInspirations(inspirations)
      })
      .catch(console.error)

    prismic
      .query(Prismic.Predicates.at('document.type', 'mix'), {
        orderings: '[document.first_publication_date desc]',
        pageSize: 100,
      })
      .then(prismicDocument => {
        const mixs: Model.Mix[] = prismicDocument.results.map(
          fromPrismicDataToMixModel,
        )
        setMixs(mixs)
      })
      .catch(console.error)
  }, [])

  return (
    <WebsiteDataContext.Provider
      value={{
        articles,
        mixs,
        inspirations,
      }}
    >
      {children}
    </WebsiteDataContext.Provider>
  )
}
