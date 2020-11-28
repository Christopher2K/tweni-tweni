import React, {
  FC,
  useState,
  useEffect,
  useContext,
  createContext,
} from 'react'

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
  const [articles, setArticles] = useState<Model.Article[]>()
  const [mixs, setMixs] = useState<Model.Mix[]>()

  useEffect(() => {
    fetch('/__mock__/fake_articles.json')
      .then(response => response.json() as Promise<Model.Article[]>)
      .then(setArticles)
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
