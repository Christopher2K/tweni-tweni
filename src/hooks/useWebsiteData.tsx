import React, {
  FC,
  useState,
  useEffect,
  useContext,
  createContext,
} from 'react'
import { format, parse } from 'date-fns'
import Prismic from 'prismic-javascript'
import PrismicDOM from 'prismic-dom'

import { usePrismic } from './usePrismic'

interface WebsiteData {
  articles?: Model.Article[]
  mixs?: Model.Mix[]
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
  const [mixs, setMixs] = useState<Model.Mix[]>()

  useEffect(() => {
    // fetch('/__mock__/fake_articles.json')
    //   .then(response => response.json() as Promise<Model.Article[]>)
    //   .then(setArticles)
    //   .catch(console.error)

    prismic
      .query(Prismic.Predicates.at('document.type', 'article'), {
        orderings: '[my.article.date]',
        pageSize: 100,
      })
      .then(prismicDocument => {
        const articles: Model.Article[] = prismicDocument.results.map(
          ({ uid, data }) => ({
            uid: uid as string,
            title: data.title[0].text,
            date: format(
              parse(data.date, 'yyyy-MM-dd', new Date()),
              'dd.MM.yy',
            ),
            subject: data.subject,
            author: data.author,
            color: data.color,
            thumbnailPhoto: data.thumbnail_photo.url,
            description: PrismicDOM.RichText.asHtml(data.description),
            categories: (data.categories as any[]).map(c => c.category),
            carousel: (data.carousel as any[]).map(item => ({
              url: item.photo.url,
              caption: item.caption,
            })),
          }),
        )
        setArticles(articles)
      })
      .catch(console.error)

    fetch('/__mock__/fake_mixs.json')
      .then(response => response.json() as Promise<Model.Mix[]>)
      .then(setMixs)
      .catch(console.error)
  }, [])

  return (
    <WebsiteDataContext.Provider
      value={{
        articles,
        mixs,
      }}
    >
      {children}
    </WebsiteDataContext.Provider>
  )
}
