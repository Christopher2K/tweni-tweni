import React, {
  FC,
  useState,
  useEffect,
  useContext,
  createContext,
} from 'react'

interface WebsiteData {
  articles?: Model.Article[]
}

const initialData: WebsiteData = {}

const WebsiteDataContext = createContext<WebsiteData>(initialData)

interface UseArticlesData {
  articles?: Model.Article[]
}
export function useWebsiteData(): UseArticlesData {
  const { articles } = useContext(WebsiteDataContext)

  return {
    articles,
  }
}

export const WebsiteDataContextProvider: FC = ({ children }) => {
  const [articles, setArticles] = useState<Model.Article[]>()

  useEffect(() => {
    fetch('/__mock__/fake_articles.json')
      .then(response => response.json() as Promise<Model.Article[]>)
      .then(setArticles)
      .catch(console.error)
  }, [])

  return (
    <WebsiteDataContext.Provider
      value={{
        articles: articles,
      }}
    >
      {children}
    </WebsiteDataContext.Provider>
  )
}
