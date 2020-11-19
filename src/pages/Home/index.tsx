import React, { FC } from 'react'
import styled from '@emotion/styled'
import { Article } from './Article'
import { desktopStyle } from 'styles/responsive'

const Root = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr; /* one full width colum */
  grid-template-rows: auto;
  grid-gap: 3rem;

  ${props => desktopStyle`
    grid-template-columns: 1fr 1fr 1fr 1fr;
  `}
`

export const Home: FC = () => (
  <Root>
    <Article></Article>
    <Article></Article>
    <Article></Article>
    <Article></Article>
    <Article></Article>
    <Article></Article>
    <Article></Article>
    <Article></Article>
    <Article></Article>
    <Article></Article>
    <Article></Article>
    <Article></Article>
    <Article></Article>
  </Root>
)
