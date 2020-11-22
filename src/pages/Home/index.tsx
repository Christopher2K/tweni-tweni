import React, { FC } from 'react'
import styled from '@emotion/styled'
import { Article } from './Article'
import { desktopStyle } from 'styles/responsive'
import { useWebsiteData } from 'hooks/useWebsiteData'

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
  const { articles } = useWebsiteData()

  return (
    <Root>
      {articles?.map(a => (
        <Article key={a.title} data={a} />
      ))}
    </Root>
  )
}
