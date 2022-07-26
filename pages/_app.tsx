import type { AppProps } from 'next/app'
import MainLayout from '../components/layout/MainLayout'
import { useRouter } from 'next/router'
import '../styles/base.css'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
      <>
        {
          router.pathname === '/' ?   <Component {...pageProps} /> :  <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
        }
      </> 
  )
}

export default MyApp