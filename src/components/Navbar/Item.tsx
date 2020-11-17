import React, { FC } from 'react'
import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

const Root = styled.div<{ anchor: 'left' | 'right' }>`
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-size: ${props => props.theme.nav.itemSize};
  text-align: ${props => props.anchor};
  height: ${props => props.theme.nav.itemSize};
  flex: 1;
`

const StyledLink = styled(NavLink)`
  display: inline-block;
  font-size: 1em;
  font-weight: 400;
  color: ${props => props.theme.colors.black};
  text-decoration: none;
  height: ${props => props.theme.nav.itemSize};

  &.active {
    text-decoration: underline;
  }
`

type ItemProps = Readonly<{
  to: string
  name: string
  anchor: 'left' | 'right'
}>

export const Item: FC<ItemProps> = ({ to, name, anchor }) => {
  return (
    <Root anchor={anchor}>
      <StyledLink to={to} activeClassName="active">
        {name}
      </StyledLink>
    </Root>
  )
}
