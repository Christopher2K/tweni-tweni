import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import styled from '@emotion/styled'

import { Item } from './Item'
import { ReactComponent as RawLogo } from 'assets/images/logo.svg'

const Root = styled.nav`
  position: relative;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  box-sizing: border-box;

  width: 100%;
  padding: ${props => props.theme.nav.padding};
`

const Logo = styled(RawLogo)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${props => props.theme.nav.desktopLogoInactiveWidth};
  height: auto;
  & > path {
    fill: ${props => props.theme.color.black};
  }
`

const HomeLink = styled(NavLink)`
  display: block;
  flex: 1;

  &.active {
    ${Logo} {
      transform: translate(0, 0);
      top: calc(
        ${({ theme }) => `(${theme.nav.padding} * 2) + ${theme.nav.itemSize}`}
      );
      left: ${props => props.theme.nav.padding};
      fill: auto;
      width: ${props => props.theme.nav.desktopLogoActiveWidth()};
    }
  }
`

export const Navbar: FC = () => {
  return (
    <Root>
      <Item name="Génèse" to="/genese" anchor="left" />
      <Item name="Nos Inspirations" to="/inspirations" anchor="left" />
      <HomeLink exact to="/" activeClassName="active">
        <Logo />
      </HomeLink>
      <Item name="Nos mixs" to="/mixs" anchor="right" />
      <Item name="Contact" to="/contact" anchor="right" />
    </Root>
  )
}
