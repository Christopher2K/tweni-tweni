import React, { FC } from 'react'
import styled from '@emotion/styled'

import { Item } from './Item'
import { Logo } from './Logo'

const Root = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  box-sizing: border-box;

  width: 100%;
  padding: ${props => props.theme.nav.padding};

  & > * {
    flex: 1;
  }
`

export const Navbar: FC = () => {
  return (
    <Root>
      <Item name="Génèse" to="/genese" anchor="left" />
      <Item name="Nos Inspirations" to="/inspirations" anchor="left" />
      <Logo />
      <Item name="Nos mixs" to="/mixs" anchor="right" />
      <Item name="Contact" to="/contact" anchor="right" />
    </Root>
  )
}
