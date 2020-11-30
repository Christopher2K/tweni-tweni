import React, { FC, useEffect } from 'react'

import { PageDescription } from 'components/PageDescription'
import { PageRoot } from 'components/PageRoot'
import { Calendar } from 'components/Calendar'
import { useWebsiteData } from 'hooks/useWebsiteData'

export const Inspirations: FC = () => {
  const {
    inspirations,
    getHeaderText,
    inspirationHeaderText,
  } = useWebsiteData()

  useEffect(() => {
    getHeaderText('inspiration')
  }, [])

  return (
    <PageRoot>
      <PageDescription>{inspirationHeaderText}</PageDescription>
      {inspirations !== undefined && <Calendar inspirations={inspirations} />}
    </PageRoot>
  )
}
