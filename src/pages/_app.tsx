import React from 'react'
import { AppProps } from 'next/app'
import { GlobalContext } from 'ctx/index'

import 'styles/reset.scss'
import 'styles/fonts.scss'
import 'styles/baseStyle.scss'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalContext initialValue={{}}>
        <Component {...pageProps} />
      </GlobalContext>
    </>
  )
}

export default MyApp
