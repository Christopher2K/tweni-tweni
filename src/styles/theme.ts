export const theme = {
  rootFontSize: '10px',
  colors: {
    black: '#000',
    violet: '#545BF1',
    white: '#FFFEF5',
  },
  nav: {
    animationDuration: '250ms',
    padding: {
      top: {
        desktop: '3.5rem',
        mobile: '6rem',
      },
      bottom: {
        desktop: '3.5rem',
        mobile: '4rem',
      },
      sides: {
        desktop: '3.5rem',
        mobile: '1.5rem',
      },
    },
    itemSize: {
      desktop: '3.1rem',
      mobile: '2rem',
    },
    logoInactiveWidth: {
      desktop: '16rem',
      mobile: '12rem',
    },
    logoActiveWidth: function () {
      return {
        desktop: `calc(100% - (${this.padding.sides.desktop}*2))`,
        mobile: `calc(100% - (${this.padding.sides.mobile}*2))`,
      }
    },
    navHeight: function () {
      return {
        desktop: `calc((${this.padding.top.desktop}+${this.padding.bottom.desktop})+${this.itemSize.desktop})`,
        mobile: `calc((${this.padding.top.mobile}+${this.padding.bottom.mobile})+${this.itemSize.mobile})`,
      }
    },
  },
}

export type Theme = typeof theme
