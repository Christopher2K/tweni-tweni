import styled from '@emotion/styled'

import { desktopStyle } from 'styles/responsive'

export const PageDescription = styled.p`
  padding: 0 ${props => props.theme.nav.padding.sides.mobile};
  font-family: ${props => props.theme.fonts.sneak};
  font-size: 1.9rem;
  line-height: 2.29rem;
  text-align: left;

  ${props => desktopStyle`
    font-size: 3.1rem;
    line-height: 4.03rem;
    width: 50%;
    padding: 0 ${props.theme.nav.padding.sides.desktop};
  `};
`
