export type iTheme = {
  screens: {
    '--layout-sm': string
    '--layout-md': string
    '--layout-lg': string
    '--layout-xl': string
  }
}
const theme: iTheme = {
  screens: {
    '--layout-sm': '768px',
    '--layout-md': '1024px',
    '--layout-lg': '1280px',
    '--layout-xl': '1400px',
  },
}
export default theme
