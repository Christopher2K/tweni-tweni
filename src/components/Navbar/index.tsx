import React, { FC } from 'react'
import styled from '@emotion/styled'

import { Item } from './Item'
import { DesktopHomeLink } from './DesktopHomeLink'
import { Responsive } from 'components/Responsive'

const Root = styled.div`
  position: relative;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  box-sizing: border-box;

  width: 100%;
  padding: ${props => props.theme.nav.padding};
`.withComponent('nav')

export const Navbar: FC = () => {
  return (
    <Root>
      <Responsive.Desktop>
        <Item name="Génèse" to="/genese" anchor="left" />
        <Item name="Nos Inspirations" to="/inspirations" anchor="left" />
        <DesktopHomeLink />
        <Item name="Nos mixs" to="/mixs" anchor="right" />
        <Item name="Contact" to="/contact" anchor="right" />
      </Responsive.Desktop>
    </Root>
  )
}
