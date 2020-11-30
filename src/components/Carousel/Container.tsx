import React, { FC } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import type { SwipeableHandlers } from 'react-swipeable'

import nextCursor from 'assets/icons/next.png'
import prevCursor from 'assets/icons/prev.png'
import { desktopMediaQuery, desktopStyle } from 'styles/responsive'
import { useMediaQuery } from 'hooks/useMediaQuery'

const Carousel = styled.div`
  position: relative;
  overflow: hidden;

  width: 100%;
  margin-bottom: 1rem;

  ${desktopStyle`
    margin: auto;
    width: 80%;
    height: 100%;
  `}
`

const CarouselRow = styled.div<{ activeImageIndex: number }>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  width: 100%;
  transition: 100ms transform linear;
  ${props => css`
    transform: translateX(
      calc(
        -${props.activeImageIndex} * (100% +
              ${props.theme.nav.padding.sides.mobile})
      )
    );
  `}

  ${desktopStyle`
    height: 100%;
  `}
`

const CurrentImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 0.5rem;

  ${desktopStyle`
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    flex-shrink: 1;
  `}
`

const CarouselPhoto = styled.div`
  flex-shrink: 0;
  flex-basis: 100%;
  width: 100%;
  font-size: 0.75rem;
  margin-right: ${props => props.theme.nav.padding.sides.mobile};

  ${desktopStyle`
    box-sizing: border-box;
    padding: 3.6rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  `}
`

const Caption = styled.p`
  font-family: ${props => props.theme.fonts.sneak};
  font-size: 1.2rem;
  line-height: 14px;
  width: 80%;

  ${desktopStyle`
    flex-shrink: 0;
    width: 100%;
  `}
`

const CarouselButton = styled.button<{ side: 'left' | 'right' }>`
  position: absolute;
  top: 0;
  ${props => props.side}: 0;
  background-color: transparent;
  border: none;
  outline: none;
  height: 100%;
  width: 50%;
  cursor: url(${props => (props.side === 'left' ? prevCursor : nextCursor)}),
    auto;
`

interface ContainerProps {
  images: Model.PhotoWithCaption[]
  activeImageIndex: number
  onNextClicked: () => void
  onPrevClicked: () => void
  swipeHandlers?: SwipeableHandlers
}

export const Container: FC<ContainerProps> = ({
  images,
  activeImageIndex,
  onNextClicked,
  onPrevClicked,
  swipeHandlers,
}) => {
  const { match: desktopScreen } = useMediaQuery(`(${desktopMediaQuery})`)

  return (
    <Carousel>
      <CarouselRow activeImageIndex={activeImageIndex} {...swipeHandlers}>
        <CarouselButton side="left" onClick={onPrevClicked} />
        {images.map((cp, index) => (
          <CarouselPhoto key={index}>
            <CurrentImage src={cp.url} alt={cp.caption} />
            <Caption>{cp.caption}</Caption>
          </CarouselPhoto>
        ))}
      </CarouselRow>
      {desktopScreen && (
        <>
          <CarouselButton side="left" onClick={onPrevClicked} />
          <CarouselButton side="right" onClick={onNextClicked} />
        </>
      )}
    </Carousel>
  )
}
