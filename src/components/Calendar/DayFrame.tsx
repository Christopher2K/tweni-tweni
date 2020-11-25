import React, { FC } from 'react'
import styled from '@emotion/styled'

import { ReactComponent as DevelopIcon } from 'assets/icons/develop.svg'
import { desktopStyle } from 'styles/responsive'

const Root = styled.div`
  --border-def: 1px solid ${props => props.theme.colors.black};
  box-sizing: border-box;
  width: 100%;
  padding: 2rem ${props => props.theme.nav.padding.sides.mobile} 5rem;

  border-bottom: var(--border-def);

  ${props => desktopStyle`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 2.8rem 2.8rem 2rem 2.8rem;
    height: 22.5rem;

    border-right: var(--border-def);

    &:nth-of-type(4n) {
      border-right: none;
    }
  `}
`

const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  margin-bottom: 2.5rem;
`

const Day = styled.span`
  font-size: 5rem;
  line-height: 5rem;
  letter-spacing: -1.5px;
`

const ImageWrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  ${desktopStyle`display: none;`}
`

const CurrentImage = styled.img`
  width: 100%;
  height: auto;
`

const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`

const Metadata = styled.div`
  width: 60%;
  flex-shrink: 0;

  h1 {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.7rem;

    ${desktopStyle`
      line-height: 2.08rem;
      margin-bottom: 2rem;
    `}
  }

  p {
    text-transform: uppercase;
    font-size: 1rem;
    line-height: 1.7rem;

    ${desktopStyle`
      line-height: 1.65rem;
    `}
  }
`

const CarouselDots = styled.div`
  ${desktopStyle`display: none;`}
`

const Develop = styled(DevelopIcon)`
  ${desktopStyle`display: none;`}
`

interface DayFrameProps {
  article: Model.Article
  dayNumber: number
  activeDay?: number
  onDayClicked: (dayNumber: number) => any
}

export const DayFrame: FC<DayFrameProps> = ({
  dayNumber,
  article,
  // activeDay,
  onDayClicked,
}) => {
  const dayNumberText =
    dayNumber.toString().length === 1
      ? `0${dayNumber.toString()}`
      : dayNumber.toString()

  // const isActiveDay = dayNumber === activeDay

  return (
    <Root onClick={() => onDayClicked(dayNumber)}>
      <Top>
        <Day>{dayNumberText}</Day>
        <CarouselDots>Carousel DOTS</CarouselDots>
      </Top>
      <ImageWrapper>
        <CurrentImage src={article.thumbnailPhoto} alt={article.title} />
        <p>Caption</p>
      </ImageWrapper>
      <Bottom>
        <Metadata>
          <h1>{article.title}</h1>
          <p>{article.categories.join(' | ')}</p>
        </Metadata>
        <Develop />
      </Bottom>
    </Root>
  )
}
