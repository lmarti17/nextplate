import React from 'react'
import { AppProps } from 'next/app'

import 'styles/reset.scss'
import 'styles/global.scss'
import 'styles/fonts.scss'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default MyApp
