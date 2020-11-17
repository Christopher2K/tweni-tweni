export const theme = {
  rootFontSize: '10px',
  nav: {
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

  color: {
    black: '#000',
  },
}

export type Theme = typeof theme
