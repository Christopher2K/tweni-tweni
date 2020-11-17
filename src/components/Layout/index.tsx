import React, { FC } from 'react'
import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import { useLocation } from 'react-router'

import { Navbar } from 'components/Navbar'
import { useWindowSize } from 'hooks/useWindowSize'
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

  // Computed
  const isHomepage = location.pathname === '/'
  const _navPaddingValue = toPixels(theme.nav.padding)
  const _currentLogoHeight = getLogoHeightForGivenWidth(
    windowWidth - _navPaddingValue * 2,
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
