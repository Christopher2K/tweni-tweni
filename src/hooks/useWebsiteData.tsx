import React, {
  FC,
  useState,
  useEffect,
  useContext,
  createContext,
  useCallback,
} from 'react'
import Prismic from 'prismic-javascript'
import PrismicDOM, { RichText } from 'prismic-dom'

import { usePrismic } from './usePrismic'
import {
  fromPrismicDataToArticleModel,
  fromPrismicDataToInxpirationModel,
  fromPrismicDataToMixModel,
} from 'utils/data'

interface WebsiteData {
  articles?: Model.Article[]
  mix?: Model.Mix[]
  inspirations?: Model.Inspiration[]
  legalNoticeData?: string
  genesisData?: Model.Genesis
  inspirationHeaderText?: string
  mixHeaderText?: string

  getArticleBySlug: (id: string) => Promise<Model.Article>
  getLegalNoticeData: () => Promise<void>
  getGenesisData: () => Promise<void>
  getHeaderText: (text: 'inspiration' | 'mix') => void
}

const WebsiteDataContext = createContext<WebsiteData | undefined>(undefined)

export function useWebsiteData(): WebsiteData {
  const data = useContext(WebsiteDataContext)
  if (data === undefined) {
    throw new Error('Must be used inside WebsiteDataContext')
  }

  return data
}

export const WebsiteDataContextProvider: FC = ({ children }) => {
  const prismic = usePrismic()
  const [articles, setArticles] = useState<Model.Article[]>()
  const [inspirations, setInspirations] = useState<Model.Inspiration[]>()
  const [mix, setMix] = useState<Model.Mix[]>()
  const [legalNoticeData, setLegalNoticeData] = useState<string>()
  const [genesisData, setGenesisData] = useState<Model.Genesis>()
  const [mixHeaderText, setMixHeaderText] = useState<string>()
  const [inspirationHeaderText, setInspirationHeaderText] = useState<string>()

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
        orderings: '[my.inspiration.date]',
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
        const mix: Model.Mix[] = prismicDocument.results.map(
          fromPrismicDataToMixModel,
        )
        setMix(mix)
      })
      .catch(console.error)
  }, [])

  const getArticleBySlug = useCallback(
    function getArticleBySlug(slug: string) {
      return prismic
        .queryFirst([
          Prismic.Predicates.at('document.type', 'article'),
          Prismic.Predicates.at('my.article.uid', slug),
        ])
        .then(fromPrismicDataToArticleModel)
    },
    [prismic],
  )

  const getLegalNoticeData = useCallback(
    function getLegalNoticeData() {
      return prismic
        .queryFirst(Prismic.Predicates.at('document.type', 'legal_notice'))
        .then(doc => {
          setLegalNoticeData(PrismicDOM.RichText.asHtml(doc.data.legal_notice))
        })
        .catch(console.error)
    },
    [prismic],
  )

  const getGenesisData = useCallback(
    function getGenesisData() {
      return prismic
        .queryFirst(Prismic.Predicates.at('document.type', 'genesis'))
        .then(doc => {
          setGenesisData({
            contact: PrismicDOM.RichText.asHtml(doc.data.contact),
            team: (doc.data.team as any[]).map(t => t.member),
            mainText: PrismicDOM.RichText.asHtml(doc.data.main_text),
            credits: (doc.data.credits as any[]).map(c => c.credit),
          })
        })
        .catch(console.error)
    },
    [prismic],
  )

  const getHeaderText = useCallback(function getHeaderText(
    page: 'inspiration' | 'mix',
  ) {
    prismic
      .queryFirst(Prismic.Predicates.at('document.type', `${page}_page`))
      .then(doc => {
        const text = RichText.asText(doc.data.text)
        if (page === 'inspiration') {
          setInspirationHeaderText(text)
        } else {
          setMixHeaderText(text)
        }
      })
      .catch(console.error)
  },
  [])

  return (
    <WebsiteDataContext.Provider
      value={{
        articles,
        mix,
        inspirations,
        legalNoticeData,
        genesisData,
        inspirationHeaderText,
        mixHeaderText,
        getArticleBySlug,
        getHeaderText,
        getLegalNoticeData,
        getGenesisData,
      }}
    >
      {children}
    </WebsiteDataContext.Provider>
  )
}
