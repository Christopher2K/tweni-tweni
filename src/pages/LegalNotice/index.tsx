import React, { FC, useEffect } from 'react'
import styled from '@emotion/styled'

import { PageRoot } from 'components/PageRoot'
import { useWebsiteData } from 'hooks/useWebsiteData'
import { desktopStyle } from 'styles/responsive'

const Root = styled(PageRoot)`
  box-sizing: border-box;
  padding: 4rem ${props => props.theme.nav.padding.sides.mobile} 0;

  ${props => desktopStyle`
    padding: 0 ${props.theme.nav.padding.sides.desktop} 0;
  `}
`

const Wrapper = styled.div`
  ${desktopStyle`
    width: 100%;
  `}
`

const Content = styled.div`
  width: 100%;

  ${desktopStyle`
    width: 50%;
    margin-left: 50%;
  `}

  p {
    font-family: ${props => props.theme.fonts.sneak};
    font-size: 1.9rem;
    line-height: 24.7px;
    margin-bottom: 5rem;
  }

  h2 {
    font-family: ${props => props.theme.fonts.helvetica};
    font-weight: 400;
    font-size: 1.3rem;
    line-height: 16px;
    margin-bottom: 0;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
`

export const LegalNotice: FC = () => {
  const { legalNoticeData, getLegalNoticeData } = useWebsiteData()

  useEffect(() => {
    getLegalNoticeData().catch(console.error)
  }, [])

  return (
    <Root>
      <Wrapper>
        {legalNoticeData ? (
          <Content dangerouslySetInnerHTML={{ __html: legalNoticeData }} />
        ) : (
          <p>Chargement...</p>
        )}
      </Wrapper>
    </Root>
  )
}
