import React, { FC, useCallback, useState } from 'react'
import styled from '@emotion/styled'

import { Item } from './Item'
import { HomeLink } from './HomeLink'
import { MobileMenuButton } from './MobileMenuButton'
import { MobileItemList } from './MobileItemList'
import { Responsive } from 'components/Responsive'
import { desktopStyle } from 'styles/responsive'

const Root = styled.div`
  position: relative;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  box-sizing: border-box;

  width: 100%;
  padding: ${({ theme }) =>
    `${theme.nav.padding.top.mobile} ${theme.nav.padding.sides.mobile} ${theme.nav.padding.bottom.mobile} ${theme.nav.padding.sides.mobile}`};

  ${props => desktopStyle`
    padding: ${props.theme.nav.padding.top.desktop} ${props.theme.nav.padding.sides.desktop} ${props.theme.nav.padding.bottom.desktop} ${props.theme.nav.padding.sides.desktop}
  `}
`.withComponent('nav')

export const Navbar: FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMenu = useCallback(function toggleMenu() {
    setMobileMenuOpen(currentStatus => !currentStatus)
  }, [])

  return (
    <Root>
      <Responsive.Desktop>
        <Item name="Génèse" to="/genese" anchor="left" />
        <Item name="Nos Inspirations" to="/inspirations" anchor="left" />
        <HomeLink />
        <Item name="Nos mixs" to="/mixs" anchor="right" />
        <Item name="Contact" to="/contact" anchor="right" />
      </Responsive.Desktop>
      <Responsive.Mobile>
        <MobileMenuButton onClick={toggleMenu} menuIsOpen={mobileMenuOpen} />
        <HomeLink />
        <Item name="Contact" to="/contact" anchor="right" />
        {mobileMenuOpen && (
          <MobileItemList
            onMenuButtonClicked={toggleMenu}
            menuIsOpen={mobileMenuOpen}
          />
        )}
      </Responsive.Mobile>
    </Root>
  )
}
