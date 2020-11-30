import React, { FC, useEffect } from 'react'
import styled from '@emotion/styled'

import { PageRoot } from 'components/PageRoot'
import { useWebsiteData } from 'hooks/useWebsiteData'
import { desktopStyle } from 'styles/responsive'

const Root = styled(PageRoot)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  box-sizing: border-box;
  padding: 4rem ${props => props.theme.nav.padding.sides.mobile} 0;

  ${props => desktopStyle`
    flex-direction: row;
    padding: 0 ${props.theme.nav.padding.sides.desktop} 0;
  `}
`

const Left = styled.div`
  width: 100%;
  margin-bottom: 3rem;
  ${desktopStyle`
    width: 50%;
  `}

  p, a {
    font-family: ${props => props.theme.fonts.helvetica};
    font-size: 1rem;
    line-height: 14.5px;
    text-transform: uppercase;

    ${desktopStyle`
      line-height: 16.5px;
      font-size: 1.1rem;
    `}
  }
`

const Right = styled.div`
  width: 100%;
  ${desktopStyle`
    width: 50%;
    box-sizing: border-box;
    padding-right: 5%;
    flex-shrink: 1;
  `}
`

const Informations = styled.div`
  h2 {
    margin-top: 3rem;
    font-family: ${props => props.theme.fonts.helvetica};
    font-size: 1rem;
    line-height: 14.5px;
    text-transform: uppercase;
    margin-bottom: 0.5rem;

    ${desktopStyle`
      line-height: 16.5px;
      font-size: 1.1rem;
    `}
  }

  p {
    font-family: ${props => props.theme.fonts.sneak};
    font-size: 1.2rem;
    line-height: 16.5px;

    ${desktopStyle`
      line-height: 19.5px;
      font-size: 1.5rem;
    `}
  }
`

const MainText = styled.div`
  font-family: ${props => props.theme.fonts.sneak};
  font-size: 1.6rem;
  margin-bottom: 5rem;
  line-height: 20.8px;

  ${desktopStyle`
    line-height: 33.8px;
    font-size: 2.6rem;
  `}
`

export const Genesis: FC = () => {
  const { genesisData, getGenesisData } = useWebsiteData()

  useEffect(() => {
    getGenesisData().catch(console.error)
  }, [])

  return (
    <Root>
      {genesisData ? (
        <>
          <Left dangerouslySetInnerHTML={{ __html: genesisData.contact }} />
          <Right>
            <MainText
              dangerouslySetInnerHTML={{ __html: genesisData.mainText }}
            />
            <Informations>
              <h2>Notre équipe</h2>
              {genesisData.team.map(m => (
                <p key={m}>{m}</p>
              ))}
              <h2>Credits</h2>
              {genesisData.credits.map(c => (
                <p key={c}>{c}</p>
              ))}
            </Informations>
          </Right>
        </>
      ) : (
        <p>Chargement...</p>
      )}
    </Root>
  )
}
