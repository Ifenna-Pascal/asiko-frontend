import type { AppProps } from 'next/app'
import MainLayout from '../components/layout/MainLayout'

import '../styles/base.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <MainLayout>
    <Component {...pageProps} />
  </MainLayout>
}

export default MyApp