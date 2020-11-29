import React, { FC } from 'react'

import { ThumbnailGrid } from 'components/ThumbnailGrid'
import { useWebsiteData } from 'hooks/useWebsiteData'
import { ThumbnailGridItem } from 'components/ThumbnailGridItem'

export const Home: FC = () => {
  const { articles } = useWebsiteData()

  return (
    <ThumbnailGrid>
      {articles?.map(a => {
        const categoryText = a.categories.map(c => c.toUpperCase()).join(' | ')
        return (
          <ThumbnailGridItem
            key={a.uid}
            metaInfo={`${categoryText} | ${a.date}`}
            image={a.thumbnailPhoto}
            imageAlt={a.title}
            author={a.author}
            title={a.title}
          />
        )
      })}
    </ThumbnailGrid>
  )
}
