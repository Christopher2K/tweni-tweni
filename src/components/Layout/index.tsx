import React, { FC } from 'react'
import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import { useLocation } from 'react-router'

import { Navbar } from 'components/Navbar'
import { desktopMediaQuery } from 'styles/responsive'
import { useWindowSize } from 'hooks/useWindowSize'
import { useMediaQuery } from 'hooks/useMediaQuery'
import { toPixels, getLogoHeightForGivenWidth } from 'utils/layout'
import { Footer } from 'components/Footer'

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  width: 100%;
  min-height: 100vh;
`

interface PageContainerProps {
  isHomepage: boolean
  marginTop: number
}
const PageContainer = styled.main<PageContainerProps>`
  width: 100%;
  flex: 1;
  margin-top: ${props => (props.isHomepage ? props.marginTop : 0)}px;
`

export const Layout: FC = ({ children }) => {
  // Hooks
  const theme = useTheme()
  const location = useLocation()
  const { width: windowWidth } = useWindowSize()
  const { match: desktopScreen } = useMediaQuery(`(${desktopMediaQuery})`)

  // Computed
  const currentContentWidth = windowWidth > 1920 ? 1920 : windowWidth
  const isHomepage = location.pathname === '/'
  const _navSidePaddingValue = toPixels(
    desktopScreen
      ? theme.nav.padding.sides.desktop
      : theme.nav.padding.sides.mobile,
  )
  const _currentLogoHeight = getLogoHeightForGivenWidth(
    currentContentWidth - _navSidePaddingValue * 2,
  )
  const homepageOffset = _currentLogoHeight + toPixels('2rem')

  return (
    <Root>
      <Navbar />
      <PageContainer isHomepage={isHomepage} marginTop={homepageOffset}>
        {children}
      </PageContainer>
      <Footer />
    </Root>
  )
}
