import React, { FC } from 'react'
import styled from '@emotion/styled'

import { Calendar } from 'components/Calendar'
import { desktopStyle } from 'styles/responsive'
import { useWebsiteData } from 'hooks/useWebsiteData'

const Root = styled.div`
  width: 100%;
  ${desktopStyle`
    margin-top: 6rem;
  `}
`

const Description = styled.p`
  padding: 0 ${props => props.theme.nav.padding.sides.mobile};
  font-family: ${props => props.theme.fonts.sneak};
  font-size: 1.9rem;
  line-height: 2.29rem;
  text-align: left;

  ${props => desktopStyle`
    font-size: 3.1rem;
    line-height: 4.03rem;
    width: 50%;
    padding: 0 ${props.theme.nav.padding.sides.desktop};
  `};
`

export const Inspirations: FC = () => {
  const { articles } = useWebsiteData()

  return (
    <Root>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mattis
        lorem sit amet pharetra feugiat. Vestibulum consectetur tristique leo,
        eu ultricies leo pellentesque eu. Nam et nisi non enim sagittis
        tincidunt. Curabitur ac orci eget orci malesuada volutpat. Morbi
        ultrices lorem vel tempor vulputate. Sed lectus massa, convallis vitae
        fringilla vel, facilisis nec magna. Maecenas ut augue non augue pulvinar
        fringilla. Aliquam erat volutpat. Proin tristique id magna vel
        pellentesque. Etiam eget magna vestibulum, semper sapien non, faucibus
        ex. Pellentesque habitant morbi tristique senectus et netus
      </Description>
      {articles !== undefined && <Calendar articles={articles} />}
    </Root>
  )
}
