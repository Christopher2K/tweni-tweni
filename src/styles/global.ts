import { css } from '@emotion/react'

import { theme } from './theme'
import { reset } from './reset'

export const global = css`
  ${reset}

  :root {
    font-size: ${theme.rootFontSize};
    background-color: ${theme.colors.white};
    min-height: 100%;
  }

  #root {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
  }
`
