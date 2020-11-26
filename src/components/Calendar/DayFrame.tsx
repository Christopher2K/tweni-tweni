import React, { FC } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { ReactComponent as DevelopIcon } from 'assets/icons/develop.svg'
import { desktopStyle } from 'styles/responsive'

interface StyleProps {
  isActiveDay?: boolean
  isInActiveRow: boolean
}

const Root = styled.div<StyleProps>`
  --border-def: 1px solid ${props => props.theme.colors.black};
  transition: 500ms width linear, 500ms height linear;
  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  width: 100%;
  padding: 2rem ${props => props.theme.nav.padding.sides.mobile} 5rem;
  height: 72rem;

  border-bottom: var(--border-def);

  ${props =>
    props.isActiveDay != null
      ? css`
          height: 100rem;
        `
      : null}

  ${props => desktopStyle`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 2.8rem 2.8rem 2rem 2.8rem;
    width: 25%;
    height: 22.5rem;

    border-right: var(--border-def);

    &:nth-of-type(4n) {
      border-right: none;
    }

    ${
      props.isInActiveRow &&
      css`
        height: 75rem;
      `
    }

    ${
      props.isInActiveRow &&
      !props.isActiveDay &&
      css`
        width: 5rem;
        padding: 2.5rem 0 0 1rem;
      `
    }

    ${
      props.isActiveDay &&
      css`
        width: calc(100% - (5rem * 3));
      `
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

const Day = styled.span<StyleProps>`
  font-size: 5rem;
  line-height: 5rem;
  letter-spacing: -1.5px;
  transition: 500ms font-size linear;

  ${props => desktopStyle`
    ${
      !props.isActiveDay &&
      props.isInActiveRow &&
      css`
        font-size: 2.5rem;
      `
    }
  `}
`

const ImageWrapper = styled.div<StyleProps>`
  width: 100%;
  margin-bottom: 1rem;
  ${desktopStyle`display: none;`}
`

const CurrentImage = styled.img`
  width: 100%;
  height: auto;
`

const Bottom = styled.div<StyleProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  ${props => desktopStyle`
    ${
      !props.isActiveDay &&
      props.isInActiveRow &&
      css`
        display: none;
      `
    }
  `}
`

const Metadata = styled.div`
  width: 60%;
  flex-shrink: 0;

  h1 {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.08rem;

    ${desktopStyle`
      line-height: 2.08rem;
      margin-bottom: 2rem;
    `}
  }

  p {
    text-transform: uppercase;
    font-size: 1rem;
    line-height: 2.08rem;

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
  activeDay,
  onDayClicked,
}) => {
  const dayNumberText =
    dayNumber.toString().length === 1
      ? `0${dayNumber.toString()}`
      : dayNumber.toString()

  const isActiveDay = dayNumber === activeDay
  const isLastColumn = dayNumber % 4 === 0
  const isInActiveRow = (() => {
    if (!activeDay) return false
    const activeDayIsLastColumn = activeDay % 4 === 0
    if (isLastColumn) {
      return (
        dayNumber / 4 - 1 ===
        (activeDayIsLastColumn ? activeDay / 4 - 1 : Math.trunc(activeDay / 4))
      )
    } else {
      return (
        Math.trunc(dayNumber / 4) ===
        (activeDayIsLastColumn ? activeDay / 4 - 1 : Math.trunc(activeDay / 4))
      )
    }
  })()

  const styleProps: StyleProps = {
    isInActiveRow,
    isActiveDay,
  }

  return (
    <Root onClick={() => onDayClicked(dayNumber)} {...styleProps}>
      <Top>
        <Day {...styleProps}>{dayNumberText}</Day>
        <CarouselDots>Carousel DOTS</CarouselDots>
      </Top>
      <ImageWrapper {...styleProps}>
        <CurrentImage src={article.thumbnailPhoto} alt={article.title} />
        <p>Caption</p>
      </ImageWrapper>
      <Bottom {...styleProps}>
        <Metadata>
          <h1>{article.title}</h1>
          <p>{article.categories.join(' | ')}</p>
        </Metadata>
        <Develop />
      </Bottom>
    </Root>
  )
}
