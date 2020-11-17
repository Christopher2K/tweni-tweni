import { css } from '@emotion/react'

import { theme } from './theme'
import { reset } from './reset'

export const global = css`
  ${reset}

  :root {
    font-size: ${theme.rootFontSize};
  }

  #root {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
  }
`
