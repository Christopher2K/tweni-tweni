import React, { FC } from 'react'
import styled from '@emotion/styled'
import { desktopStyle } from 'styles/responsive'

const Root = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: calc(100% - ${props => props.theme.nav.padding.sides.mobile});
  transform: translateY(-50%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${props => desktopStyle`
    width: calc(100% - ${props.theme.nav.padding.sides.desktop});
  `}

  p {
    font-family: ${props => props.theme.fonts.sneak};
    font-weight: 800;
    font-size: 13rem;
    line-height: 182px;
    letter-spacing: -5px;

    ${desktopStyle`
      font-size: 38.8rem;
      line-height: 500px;
    `}
  }

  a {
    font-size: 1.4rem;
    text-transform: uppercase;
    line-height: 21px;

    ${desktopStyle`
      font-size: 1.9rem;
      line-height: 28.6px;
    `}
  }
`

export const Contact: FC = () => (
  <Root>
    <p>Hello !</p>
    <a href="mailto:hello@twenitweni.fr">hello@twenitweni.fr</a>
    <a
      target="_blank"
      href="https://www.instagram.com/tweni.tweni/"
      rel="noreferrer"
    >
      instagram
    </a>
  </Root>
)
