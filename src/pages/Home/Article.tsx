import React, { FC } from 'react'
import styled from '@emotion/styled'
import { format, parse } from 'date-fns'

const Root = styled.div``

const ArticleMetaInfo = styled.p`
  color: ${props => props.theme.colors.violet};
  font-size: 1.1rem;
  margin-bottom: 1rem;
`

const Title = styled.h1`
  text-transform: uppercase;
  color: ${props => props.theme.colors.black};
  font-size: 2rem;
  line-height: 2.7rem;
  letter-spacing: 0.4px; /* Relatif à la taille de ma typo jugée à 20px sur les maquettes */
  font-weight: 400;

  width: 100%;
`

const AuthorName = styled.p`
  text-transform: uppercase;
  font-size: 1.1rem;
  line-height: 2.35rem;
  color: ${props => props.theme.colors.grey};
`

const Thumbnail = styled.img`
  width: 100%;
  height: auto;
  border-bottom: 3px solid ${props => props.theme.colors.black};
  margin-bottom: 2rem;
`

interface ArticleProps {
  data: Model.Article
}

export const Article: FC<ArticleProps> = ({ data }) => {
  const categoryText = data.categories.map(c => c.toUpperCase()).join(' | ')
  const formattedDate = format(
    parse(data.date, 'dd/MM/yyyy', new Date()),
    'dd.MM.yy',
  )

  return (
    <Root>
      <ArticleMetaInfo>
        {categoryText} | {formattedDate}
      </ArticleMetaInfo>
      <Thumbnail src={data.thumbnailPhoto} alt={data.title} />
      <Title>{data.title}</Title>
      <AuthorName>{data.author}</AuthorName>
    </Root>
  )
}
