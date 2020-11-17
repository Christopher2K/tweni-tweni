import React, { FC } from 'react'
import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

import { ReactComponent as RawLogo } from 'assets/images/logo.svg'

const Logo = styled(RawLogo)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${props => props.theme.nav.desktopLogoInactiveWidth};

  height: auto;
  & > path {
    fill: ${props => props.theme.colors.black};
  }
`

const Root = styled(NavLink)`
  --animation-length: ${props => props.theme.nav.animationDuration};

  display: block;
  flex: 1;

  ${Logo} {
    transition: top ease-in var(--animation-length),
      left ease-in var(--animation-length),
      transform ease-in var(--animation-length),
      width ease-in var(--animation-length);

    & > path {
      transition: fill ease-in var(--animation-length);
    }
  }

  &.active {
    ${Logo} {
      top: calc(
        ${({ theme }) => `(${theme.nav.padding} * 2) + ${theme.nav.itemSize}`}
      );
      transform: translate(-50%, 0%);
      width: ${props => props.theme.nav.desktopLogoActiveWidth()};

      transition: top ease-out var(--animation-length),
        left ease-out var(--animation-length),
        transform ease-out var(--animation-length),
        width ease-out var(--animation-length);

      & > path {
        transition: fill ease-out var(--animation-length);
        fill: ${props => props.theme.colors.violet};
      }
    }
  }
`

export const DesktopHomeLink: FC = () => {
  return (
    <Root exact to="/" activeClassName="active">
      <Logo />
    </Root>
  )
}
