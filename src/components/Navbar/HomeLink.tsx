import React, { FC } from 'react'
import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

import { ReactComponent as RawLogo } from 'assets/images/logo.svg'
import { desktopStyle } from 'styles/responsive'

const Logo = styled(RawLogo)`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);

  top: calc(
    ${props =>
      `${props.theme.nav.padding.top.mobile} + (${props.theme.nav.itemSize.mobile}/ 2)`}
  );
  width: ${props => props.theme.nav.logoInactiveWidth.mobile};
  ${props => desktopStyle`
    top: 50%;
    width: ${props.theme.nav.logoInactiveWidth.desktop};
  `}

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
      transform: translate(-50%, 0%);

      transition: top ease-out var(--animation-length),
        left ease-out var(--animation-length),
        transform ease-out var(--animation-length),
        width ease-out var(--animation-length);

      top: calc(
        ${({ theme }) =>
          `(${theme.nav.padding.top.mobile} + ${theme.nav.padding.bottom.mobile}) + ${theme.nav.itemSize.mobile}`}
      );
      width: ${props => props.theme.nav.logoActiveWidth().mobile};

      ${props => desktopStyle`
        width: ${props.theme.nav.logoActiveWidth().desktop};
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
  return (
    <Root exact to="/" activeClassName="active">
      <Logo />
    </Root>
  )
}
