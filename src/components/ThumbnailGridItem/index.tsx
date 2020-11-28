import React, { FC } from 'react'
import styled from '@emotion/styled'

const Root = styled.div``

const MetaInfo = styled.p`
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

interface ThumbnailGridItemProps {
  metaInfo?: string
  image: string
  imageAlt: string
  title: string
  author: string
}

export const ThumbnailGridItem: FC<ThumbnailGridItemProps> = ({
  metaInfo,
  image,
  imageAlt,
  title,
  author,
}) => {
  return (
    <Root>
      {metaInfo && <MetaInfo>{metaInfo}</MetaInfo>}
      <Thumbnail src={image} alt={imageAlt} />
      <Title>{title}</Title>
      <AuthorName>{author}</AuthorName>
    </Root>
  )
}
