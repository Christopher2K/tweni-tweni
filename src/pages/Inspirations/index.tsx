import React, { FC } from 'react'

import { PageDescription } from 'components/PageDescription'
import { PageRoot } from 'components/PageRoot'
import { Calendar } from 'components/Calendar'
import { useWebsiteData } from 'hooks/useWebsiteData'

export const Inspirations: FC = () => {
  const { articles } = useWebsiteData()

  return (
    <PageRoot>
      <PageDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mattis
        lorem sit amet pharetra feugiat. Vestibulum consectetur tristique leo,
        eu ultricies leo pellentesque eu. Nam et nisi non enim sagittis
        tincidunt. Curabitur ac orci eget orci malesuada volutpat. Morbi
        ultrices lorem vel tempor vulputate. Sed lectus massa, convallis vitae
        fringilla vel, facilisis nec magna. Maecenas ut augue non augue pulvinar
        fringilla. Aliquam erat volutpat. Proin tristique id magna vel
        pellentesque. Etiam eget magna vestibulum, semper sapien non, faucibus
        ex. Pellentesque habitant morbi tristique senectus et netus
      </PageDescription>
      {articles !== undefined && <Calendar articles={articles} />}
    </PageRoot>
  )
}
