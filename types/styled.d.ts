import 'styled-components'

declare module 'styled-components' {
  type Screen = 'sm' | 'md' | 'lg' | 'xl'

  // TODO: find a way to synch the theme interface with the TW config object.
  export interface DefaultTheme {
    screens: Record<Screen, string>
  }
}
