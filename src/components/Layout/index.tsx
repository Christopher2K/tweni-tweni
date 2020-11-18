import React, { FC } from 'react'
import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import { useLocation } from 'react-router'

import { Navbar } from 'components/Navbar'
import { desktopMediaQuery } from 'styles/responsive'
import { useWindowSize } from 'hooks/useWindowSize'
import { useMediaQuery } from 'hooks/useMediaQuery'
import { toPixels, getLogoHeightForGivenWidth } from 'utils/layout'

const Root = styled.div`
  width: 100%;
`

interface PageContainerProps {
  isHomepage: boolean
  marginTop: number
}
const PageContainer = styled.main<PageContainerProps>`
  display: 100%;
  margin-top: ${props => (props.isHomepage ? props.marginTop : 0)}px;
`

export const Layout: FC = ({ children }) => {
  // Hooks
  const theme = useTheme()
  const location = useLocation()
  const { width: windowWidth } = useWindowSize()
  const { match: desktopScreen } = useMediaQuery(`(${desktopMediaQuery})`)

  // Computed
  const isHomepage = location.pathname === '/'
  const _navSidePaddingValue = toPixels(
    desktopScreen
      ? theme.nav.padding.sides.desktop
      : theme.nav.padding.sides.mobile,
  )
  const _currentLogoHeight = getLogoHeightForGivenWidth(
    windowWidth - _navSidePaddingValue * 2,
  )
  const homepageOffset = _currentLogoHeight

  return (
    <Root>
      <Navbar />
      <PageContainer isHomepage={isHomepage} marginTop={homepageOffset}>
        {children}
      </PageContainer>
    </Root>
  )
}
