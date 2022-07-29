import type { AppProps } from 'next/app'
import MainLayout from '../components/layout/MainLayout'
import { useRouter } from 'next/router'
import '../styles/base.css';
import { ModalContextProvider } from '../components/context/ModalContext';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
      <>
        {
          router.pathname === '/' ?   <Component {...pageProps} /> : <ModalContextProvider>
             <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
          </ModalContextProvider>
        }
      </> 
  )
}

export default MyApp