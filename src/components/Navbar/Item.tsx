import React, { FC } from 'react'
import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

const Root = styled.div<{ anchor: 'left' | 'right' }>`
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-size: ${props => props.theme.nav.itemFontSize};
  text-align: ${props => props.anchor};
`

const StyledLink = styled(NavLink)`
  font-size: 1em;
  font-weight: 400;
  color: ${props => props.theme.color.black};
  text-decoration: none;

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
