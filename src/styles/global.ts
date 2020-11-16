import { css } from '@emotion/react'

import { reset } from './reset'

export const global = css`
  ${reset}

  :root {
    font-size: 10px;
  }

  #root {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
  }
`
