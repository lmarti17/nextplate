import React from 'react'
import { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components'

import 'styles/reset.css'
import 'styles/fonts.css'

const GlobalStyle = createGlobalStyle/* scss */ `

:root {
  // @Colors
  --color-white-absolute: #fff;
  --color-black-absolute: #000;
  --color-red: #f00;
  --color-blue: #00f;

  // @Easing 
  //

  --easing-default: cubic-bezier(0.19, 1, 0.22, 1);
  --transition-default: all 1s $easing-default;

  // @Layout
  //
  
  --layout-sm: 768px;
  --layout-md: 1024px;
  --layout-lg: 1280px;
  --layout-xl: 1400px;


  // @Fonts -
  //
}

html,
body {
  min-height: 100vh;
}

html {
  cursor: default;
  overflow-wrap: anywhere;
  -webkit-tap-highlight-color: transparent;
}

body {
  color: var(--color-black-absolute);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overscroll-behavior-x: none;
  -webkit-overflow-scrolling: touch;
}

.js-focus-visible :focus:not(.focus-visible) {
  outline: 0 !important;
  box-shadow: none !important;
}

#__next {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
`

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
