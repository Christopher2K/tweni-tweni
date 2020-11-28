import React, { FC } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

const Carousel = styled.div`
  position: relative;
  overflow: hidden;

  width: 100%;
  margin-bottom: 1rem;
`

const CarouselRow = styled.div<{ activeImageIndex: number }>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  width: 100%;
  ${props => css`
    transform: translateX(
      calc(
        -${props.activeImageIndex} * (100% +
              ${props.theme.nav.padding.sides.mobile})
      )
    );
  `}
`

const CurrentImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 0.5rem;
`

const CarouselPhoto = styled.div`
  flex-shrink: 0;
  flex-basis: 100%;
  width: 100%;
  font-size: 0.75rem;
  margin-right: ${props => props.theme.nav.padding.sides.mobile};
`

const Caption = styled.p`
  font-family: ${props => props.theme.fonts.sneak};
  font-size: 0.75rem;
  line-height: 1.125rem;
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
`

interface ContainerProps {
  images: Model.PhotoWithCaption[]
  activeImageIndex: number
  onNextClicked: () => void
  onPrevClicked: () => void
}

export const Container: FC<ContainerProps> = ({
  images,
  activeImageIndex,
  onNextClicked,
  onPrevClicked,
}) => {
  return (
    <Carousel>
      <CarouselButton side="left" onClick={onPrevClicked} />
      <CarouselRow activeImageIndex={activeImageIndex}>
        {images.map((cp, index) => (
          <CarouselPhoto key={index}>
            <CurrentImage src={cp.url} alt={cp.caption} />
            <Caption>{cp.caption}</Caption>
          </CarouselPhoto>
        ))}
      </CarouselRow>
      <CarouselButton side="right" onClick={onNextClicked} />
    </Carousel>
  )
}
