import React, { FC } from 'react'

import { PageDescription } from 'components/PageDescription'
import { PageRoot } from 'components/PageRoot'
import { ThumbnailGrid } from 'components/ThumbnailGrid'
import { useWebsiteData } from 'hooks/useWebsiteData'
import { ThumbnailGridItem } from 'components/ThumbnailGridItem'

export const Mixs: FC = () => {
  const { mixs } = useWebsiteData()

  return (
    <PageRoot>
      <PageDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mattis
        lorem sit amet pharetra feugiat. Vestibulum consectetur tristique leo,
        eu ultricies leo pellentesque eu. Nam et nisi non enim sagittis
        tincidunt. Curabitur ac orci eget orci malesuada volutpat. Morbi
        ultrices lorem vel tempor vulputate. Sed lectus massa, convallis vitae
        fringilla vel, facilisis nec magna. Maecenas ut augue non augue pulvinar
        fringilla.
      </PageDescription>
      {mixs !== undefined && (
        <ThumbnailGrid>
          {mixs.map(m => (
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
