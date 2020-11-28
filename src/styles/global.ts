import { css } from '@emotion/react'

import { theme } from './theme'
import { reset } from './reset'
import { fonts } from './fonts'

export const global = css`
  ${fonts}
  ${reset}

  :root {
    font-family: ${theme.fonts.helvetica};
    font-size: ${theme.rootFontSize};
    color: ${theme.colors.black};
    background-color: ${theme.colors.white};
    min-height: 100%;
    transition: background-color 500ms linear;
  }

  #root {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
  }

  #root,
  body {
    min-height: 100vh;
  }
`
