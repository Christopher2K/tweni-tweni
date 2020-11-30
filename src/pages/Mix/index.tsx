import React, { FC, useEffect } from 'react'

import { PageDescription } from 'components/PageDescription'
import { PageRoot } from 'components/PageRoot'
import { ThumbnailGrid } from 'components/ThumbnailGrid'
import { useWebsiteData } from 'hooks/useWebsiteData'
import { ThumbnailGridItem } from 'components/ThumbnailGridItem'

export const Mix: FC = () => {
  const { mix, mixHeaderText, getHeaderText } = useWebsiteData()

  useEffect(() => {
    getHeaderText('mix')
  }, [])

  return (
    <PageRoot>
      <PageDescription>{mixHeaderText}</PageDescription>
      {mix !== undefined && (
        <ThumbnailGrid>
          {mix.map(m => (
            <ThumbnailGridItem
              url={m.url}
              key={m.id}
              title={m.title}
              image={m.thumbnailPhoto}
              imageAlt={m.title}
              author={m.author}
            />
          ))}
        </ThumbnailGrid>
      )}
    </PageRoot>
  )
}
