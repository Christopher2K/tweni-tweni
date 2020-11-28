import React, { FC } from 'react'
import { format, parse } from 'date-fns'

import { ThumbnailGrid } from 'components/ThumbnailGrid'
import { useWebsiteData } from 'hooks/useWebsiteData'
import { ThumbnailGridItem } from 'components/ThumbnailGridItem'

export const Home: FC = () => {
  const { articles } = useWebsiteData()

  return (
    <ThumbnailGrid>
      {articles?.map(a => {
        const categoryText = a.categories.map(c => c.toUpperCase()).join(' | ')
        const formattedDate = format(
          parse(a.date, 'dd/MM/yyyy', new Date()),
          'dd.MM.yy',
        )
        return (
          <ThumbnailGridItem
            key={a.id}
            metaInfo={`${categoryText} | ${formattedDate}`}
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
