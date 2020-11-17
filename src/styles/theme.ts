export const theme = {
  rootFontSize: '10px',
  colors: {
    black: '#000',
    violet: '#545BF1',
  },
  nav: {
    animationDuration: '250ms',
    padding: '3.5rem',
    itemSize: '3.1rem',
    desktopLogoInactiveWidth: '16rem',
    desktopLogoActiveWidth: function () {
      return `calc(100% - (${this.padding}*2))`
    },
    desktopNavHeight: function () {
      return `calc((${this.padding}*2)+${this.itemSize})`
    },
  },
}

export type Theme = typeof theme
