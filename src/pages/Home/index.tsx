import React, { useState, FC, useEffect } from 'react'
import styled from '@emotion/styled'
import { Article } from './Article'
import { desktopStyle } from 'styles/responsive'

const Root = styled.div`
  width: 100%;
  box-sizing: border-box;

  display: grid;
  grid-template-columns: 1fr; /* one full width colum */
  grid-template-rows: auto;
  grid-gap: 8rem;

  padding: 0 ${props => props.theme.nav.padding.sides.mobile} 5rem;

  ${props => desktopStyle`
    grid-template-columns: 1fr 1fr 1fr;
    padding: 5rem ${props.theme.nav.padding.sides.desktop} 7rem;
  `}
`

export const Home: FC = () => {
  const [articles, setArticles] = useState<Model.Article[]>([])

  useEffect(() => {
    fetch('/__mock__/fake_articles.json')
      .then(response => response.json() as Promise<Model.Article[]>)
      .then(setArticles)
      .catch(console.error)
  }, [])

  return (
    <Root>
      {articles.map(a => (
        <Article key={a.title} data={a} />
      ))}
    </Root>
  )
}
