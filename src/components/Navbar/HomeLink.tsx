import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import styled from '@emotion/styled'
import { useTheme } from '@emotion/react'

import { ReactComponent as RawLogo } from 'assets/images/logo.svg'
import { desktopStyle, desktopMediaQuery } from 'styles/responsive'
import { useWindowSize } from 'hooks/useWindowSize'
import { useMediaQuery } from 'hooks/useMediaQuery'
import { toPixels } from 'utils/layout'

const Logo = styled(RawLogo)`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  transform-origin: top center;

  top: calc(
    ${props =>
      `${props.theme.nav.padding.top.mobile} + (${props.theme.nav.itemSize.mobile}/ 2)`}
  );
  width: ${props => props.theme.nav.logoWidth.mobile};
  ${props => desktopStyle`
    top: 50%;
    width: ${props.theme.nav.logoWidth.desktop};
  `}

  height: auto;
  & > path {
    fill: ${props => props.theme.colors.black};
  }
`

const Root = styled(NavLink)<{ activeScaleFactor: number }>`
  --animation-length: ${props => props.theme.nav.animationDuration};

  display: block;
  flex: 1;

  ${Logo} {
    transition: top ease-in var(--animation-length),
      transform ease-in var(--animation-length);

    & > path {
      transition: fill ease-in var(--animation-length);
    }
  }

  &.active {
    ${Logo} {
      top: calc(
        ${({ theme }) =>
          `(${theme.nav.padding.top.mobile} + ${theme.nav.padding.bottom.mobile}) + ${theme.nav.itemSize.mobile}`}
      );
      transform: translate(-50%, -50%)
        scale(${props => props.activeScaleFactor});

      transition: top ease-out var(--animation-length),
        transform ease-out var(--animation-length);

      ${props => desktopStyle`
        top: calc(${`(${props.theme.nav.padding.top.desktop} + ${props.theme.nav.padding.bottom.desktop}) + ${props.theme.nav.itemSize.desktop}`})
      `}

      & > path {
        transition: fill ease-out var(--animation-length);
        fill: ${props => props.theme.colors.violet};
      }
    }
  }
`

export const HomeLink: FC = () => {
  const theme = useTheme()
  const { width: windowWidth } = useWindowSize()
  const { match: desktopScreen } = useMediaQuery(`(${desktopMediaQuery})`)

  const _navSidePaddingValue = toPixels(
    desktopScreen
      ? theme.nav.padding.sides.desktop
      : theme.nav.padding.sides.mobile,
  )

  const currentLogoWidth = toPixels(
    desktopScreen ? theme.nav.logoWidth.desktop : theme.nav.logoWidth.mobile,
  )
  const maxLogoWidth =
    (windowWidth > 1440 ? 1440 : windowWidth) - _navSidePaddingValue * 2
  const activeScaleFactor = maxLogoWidth / currentLogoWidth

  return (
    <Root
      exact
      to="/"
      activeClassName="active"
      activeScaleFactor={activeScaleFactor}
    >
      <Logo />
    </Root>
  )
}
