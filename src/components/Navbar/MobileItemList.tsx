import React, { FC } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { NavLink } from 'react-router-dom'

import { MobileMenuButton } from './MobileMenuButton'
import { ReactComponent as Logo } from 'assets/images/logo.svg'

const containerStyle = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

const Root = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 ${({ theme }) => theme.nav.padding.sides.mobile};
  color: ${props => props.theme.colors.white};
  fill: ${props => props.theme.colors.white};
  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  justify-content: 'flex-start';
  align-items: 'flex-start';

  background-color: ${props => props.theme.colors.violet};
`

const Header = styled.header`
  ${containerStyle}
  padding-top: ${props => props.theme.nav.padding.top.mobile};
  margin-bottom: 9rem;
`

const Items = styled.div`
  ${containerStyle}
  margin-bottom: 6rem;
`

const Socials = styled.footer`
  ${containerStyle}
`

const StyledMobileMenuButton = styled(MobileMenuButton)`
  margin-bottom: ${props => props.theme.nav.padding.bottom.mobile};
`

const LogoLink = styled(NavLink)`
  display: block;
`

const StyledLogo = styled(Logo)`
  width: 100%;
  height: auto;
  & > path {
    fill: ${props => props.theme.colors.white};
  }
`

const Item = styled(NavLink)`
  line-height: 4.4rem;
  font-size: 3.1rem;
  color: inherit;
  font-weight: 400;

  &.active {
    text-decoration: underline;
  }
`

const SocialLink = styled.a`
  font-size: 1.3rem;
  line-height: 1.82rem;
  color: inherit;

  &:hover {
    text-decoration: underline;
  }
`

interface MobileItemListProps {
  menuIsOpen: boolean
  onMenuButtonClicked: () => void
}
export const MobileItemList: FC<MobileItemListProps> = ({
  menuIsOpen,
  onMenuButtonClicked,
}) => {
  return (
    <Root>
      <Header>
        <StyledMobileMenuButton
          menuIsOpen={menuIsOpen}
          onClick={onMenuButtonClicked}
        />
        <LogoLink to="/" exact onClick={onMenuButtonClicked}>
          <StyledLogo />
        </LogoLink>
      </Header>
      <Items>
        <Item
          to="/"
          activeClassName="active"
          onClick={onMenuButtonClicked}
          exact
        >
          Articles
        </Item>
        <Item
          to="/inspirations"
          activeClassName="active"
          onClick={onMenuButtonClicked}
        >
          Nos Inspirations
        </Item>
        <Item to="/mixs" activeClassName="active" onClick={onMenuButtonClicked}>
          Nos Mixs
        </Item>
        <Item
          to="/genese"
          activeClassName="active"
          onClick={onMenuButtonClicked}
        >
          Genèse
        </Item>
      </Items>
      <Socials>
        <SocialLink href="mailto:hello@twenitweni.fr">
          hello@twenitweni.fr
        </SocialLink>
        <SocialLink href="">Instagram</SocialLink>
        <SocialLink href="">Twitter</SocialLink>
      </Socials>
    </Root>
  )
}
