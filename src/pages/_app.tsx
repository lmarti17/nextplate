import React from 'react'
import { AppProps } from 'next/app'

import 'styles/reset.scss'
import 'styles/fonts.scss'
import 'styles/baseStyle.scss'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
