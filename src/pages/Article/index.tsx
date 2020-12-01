import React, { FC, useCallback, useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Helmet } from 'react-helmet'

import { useWebsiteData } from 'hooks/useWebsiteData'
import { useParams } from 'react-router'
import { desktopStyle } from 'styles/responsive'
import linkedInIcon from 'assets/icons/linkedin.png'
import mailIcon from 'assets/icons/mail.png'
import facebookIcon from 'assets/icons/facebook.png'
import twitterIcon from 'assets/icons/twitter.png'

const littleSectionStyle = css`
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
  font-weight: 400;

  ${desktopStyle`
    padding: 0 8.3%;
    font-size: 5rem;
    line-height: 61px;
  `}
`

const Metadata = styled.p`
  ${littleSectionStyle};
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

  a {
    text-decoration: underline;
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

    p.block-img {
      margin: 0;
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

    p.image-left + p,
    p.block-img + p {
      margin-left: 0;
    }

    p.image-right + p {
      margin-left: 50%;
    }
  `}
`

const Footer = styled.div`
  width: 100%;
  padding-top: 2rem;
  border-top: 1px solid ${props => props.theme.colors.black};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  ${props => desktopStyle`
    width: calc(50% - ${props.theme.nav.padding.sides.desktop});
    margin-left: 50%;
    margin-bottom: 18rem;
  `};
`

const FooterHeading = styled.p`
  ${littleSectionStyle}
  margin-bottom: 1rem;
  padding: 0;
  ${desktopStyle`padding: 0;`}
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
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: 0.5rem;

  a {
    padding-right: 1.5rem;
    padding-bottom: 1.5rem;
  }
`

export const Article: FC = () => {
  const { id } = useParams<{ id: string }>()
  const { getArticleBySlug } = useWebsiteData()
  const [article, setArticle] = useState<Model.Article>()

  useEffect(() => {
    getArticleBySlug(id).then(setArticle).catch(console.error)
  }, [])

  const clearSharingUrl = 'https://twenitweni.fr' + window.location.pathname
  const sharingUrl = encodeURI(clearSharingUrl)
  const clearSharingText = article
    ? `${article?.title} par ${article?.author}`
    : 'Article sur Tweni Tweni'
  const sharingText = encodeURI(clearSharingText)

  const shareToTwitter = useCallback(function shareToTwitter(
    event: React.MouseEvent<HTMLAnchorElement>,
  ) {
    event.preventDefault()
    const elm = event.currentTarget as HTMLAnchorElement
    window.open(
      elm.href,
      'Partager depuis Tweni Tweni',
      'left=20,top=20,width=600,height=300,toolbar=0,resizable=1',
    )
    return false
  },
  [])

  const shareToLinkedIn = useCallback(function shareToTwitter(
    event: React.MouseEvent<HTMLAnchorElement>,
  ) {
    event.preventDefault()
    const elm = event.currentTarget as HTMLAnchorElement
    window.open(
      elm.href,
      'Partager depuis Tweni Tweni',
      'left=20,top=20,width=600,height=700,toolbar=0,resizable=1',
    )
    return false
  },
  [])

  const shareToFacebook = useCallback(function shareToFacebook(
    event: React.MouseEvent<HTMLAnchorElement>,
  ) {
    event.preventDefault()
    const elm = event.currentTarget as HTMLAnchorElement
    window.open(
      elm.href,
      'Partager depuis Tweni Tweni',
      'left=20,top=20,width=600,height=700,toolbar=0,resizable=1',
    )
  },
  [])

  return (
    <Root>
      <Helmet>
        <title>{clearSharingText}</title>
      </Helmet>
      {article && (
        <>
          <Helmet>
            <meta property="og:url" content={clearSharingUrl} />
            <meta property="og:title" content={article.title} />
            <meta property="og:image" content={article.coverPhoto} />
            <meta
              property="og:description"
              content={`Article par ${article.author}`}
            />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={article.title} />
            <meta
              name="twitter:description"
              content={`Article par ${article.author}`}
            />
            <meta name="twitter:image" content={article.coverPhoto} />
          </Helmet>
          <CoverPhoto src={article.coverPhoto} alt={article.title} />
          <Title>{article.title}</Title>
          <Metadata>
            {article.author} | {article.categories.join(' | ')} | {article.date}
          </Metadata>
          <Content dangerouslySetInnerHTML={{ __html: article?.content }} />
          <Footer>
            <Credits>
              <FooterHeading>{article.author}</FooterHeading>
            </Credits>
            <SocialContainer>
              <FooterHeading>partager</FooterHeading>
              <Socials>
                <a
                  href={`http://www.facebook.com/sharer.php?s=100&amp;p[title]=${sharingText}&amp;p[url]=${sharingUrl}&amp;p[images[0]=${article.thumbnailPhoto}`}
                  onClick={shareToFacebook}
                >
                  <img src={facebookIcon} alt="Facebook" />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${sharingUrl}&text=${sharingText}`}
                  onClick={shareToTwitter}
                >
                  <img src={twitterIcon} alt="Twitter" />
                </a>
                <a
                  href={`mailto:?body=${clearSharingUrl}&subject=${clearSharingText}`}
                >
                  <img src={mailIcon} alt="Mail" />
                </a>
                <a
                  href={`http://www.linkedin.com/shareArticle?url=${sharingUrl}&title=${sharingText}`}
                  onClick={shareToLinkedIn}
                >
                  <img src={linkedInIcon} alt="LinkedIn" />
                </a>
              </Socials>
            </SocialContainer>
          </Footer>
        </>
      )}
    </Root>
  )
}
