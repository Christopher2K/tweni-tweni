import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { desktopStyle } from 'styles/responsive'

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  box-sizing: border-box;
  width: 100%;
  padding: 0 ${props => props.theme.nav.padding.sides.mobile} 0;
  font-size: 1.4rem;

  ${props => desktopStyle`
    flex-direction: row;
    justify-content: space-between;
    font-size: 3rem;
    padding: 0 ${props.theme.nav.padding.sides.desktop} 0;
  `}
`

const commonTextStyle = css`
  display: inline-block;
  font-size: inherit;
`

const LegalNoticeLink = styled(NavLink)`
  ${commonTextStyle}
  color: ${props => props.theme.colors.black};
`

const Copyright = styled.span`
  ${commonTextStyle}
  margin-top: 0.5rem;
`

export const Footer: FC = () => {
  return (
    <Root>
      <LegalNoticeLink to="/mentions-legales">Mentions légales</LegalNoticeLink>
      <Copyright>All rights reserved© 2020</Copyright>
    </Root>
  )
}
