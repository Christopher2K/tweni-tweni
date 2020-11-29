import React, { FC, useEffect, useState } from 'react'
import styled from '@emotion/styled'

import { useWebsiteData } from 'hooks/useWebsiteData'
import { useParams } from 'react-router'
import { desktopStyle } from 'styles/responsive'

const Root = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0 ${props => props.theme.nav.padding.sides.mobile};

  ${props => desktopStyle`
    padding: 0;
  `}
`

const CoverPhoto = styled.img`
  box-sizing: border-box;
  width: 100%;
  height: auto;
  margin-bottom: 2rem;

  ${props => desktopStyle`
    padding: 0 ${props.theme.nav.padding.sides.desktop};
  `}
`

const Title = styled.h1`
  box-sizing: border-box;
  font-size: 2.5rem;
  line-height: 33px;
  text-transform: uppercase;
  margin-bottom: 2rem;

  ${desktopStyle`
    padding: 0 8.3%;
    font-size: 5rem;
    line-height: 61px;
  `}
`

const Metadata = styled.p`
  box-sizing: border-box;
  font-size: 1rem;
  line-height: 15px;
  text-transform: uppercase;
  margin-bottom: 5rem;

  ${desktopStyle`
    padding: 0 8.3%;
    font-size: 1.1rem;
    line-height: 17px;
  `}
`

const Content = styled.div`
  box-sizing: border-box;
  width: 100%;
  font-family: ${props => props.theme.fonts.rubik};
  margin-bottom: 1.5rem;

  h2 {
    font-size: 1.6rem;
    line-height: 25.6px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.6rem;
    line-height: 25.6px;
    font-weight: 400;
    margin-bottom: 7rem;
  }

  p.block-img {
    width: 100%;
    margin-bottom: 0;

    img {
      width: 100%;
      height: auto;
    }
  }

  p.block-img + p {
    font-size: 1.1rem;
    line-height: 11.25px;
  }

  ${desktopStyle`
    padding: 0 8.3%;

    h2, p {
      margin-left: 50%;
      width: 50%;
    }

    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1.9rem;
      line-height: 30px;
    }

    p.image-left,
    p.image-right {
      margin-left: 0;
      width: 50%;
      height: auto;
    }

    p.image-right {
      margin-left: 50%;
    }

    p.image-left + p {
      margin: 0;
    }
  `}
`

const Footer = styled.div`
  padding-top: 20px;
  width: 100%;
  border-top: 1px solid ${props => props.theme.colors.black};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  ${desktopStyle`
    width: 50%;
    margin-left: 50%;
  `};
`

const SocialContainer = styled.div`
  width: 50%;
`

const Credits = styled.div`
  width: 50%;
`

const Socials = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;

  a {
    padding: 1.5rem;
    &:first-of-type {
      margin: 15px;
    }
  }
`

export const Article: FC = () => {
  const { id } = useParams<{ id: string }>()
  const { getArticleBySlug } = useWebsiteData()
  const [article, setArticle] = useState<Model.Article>()

  console.log(article?.content)

  useEffect(() => {
    getArticleBySlug(id).then(setArticle).catch(console.error)
  }, [])

  return (
    <Root>
      {article && (
        <>
          <CoverPhoto src={article.coverPhoto} alt={article.title} />
          <Title>{article.title}</Title>
          <Metadata>
            {article.author} | {article.categories.join(' | ')} | {article.date}
          </Metadata>
          <Content dangerouslySetInnerHTML={{ __html: article?.content }} />
          <Footer>
            <Credits>
              <Metadata>{article.author}</Metadata>
            </Credits>
            <SocialContainer>
              <Metadata>partager</Metadata>
              <Socials></Socials>
            </SocialContainer>
          </Footer>
        </>
      )}
    </Root>
  )
}
