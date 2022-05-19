import type { AppProps } from 'next/app'
import React from 'react'
import 'remixicon/fonts/remixicon.css'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global'
import { theme } from '../styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
