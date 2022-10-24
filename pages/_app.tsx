import type { AppProps } from 'next/app'
import MainLayout from '../components/layout/MainLayout'
import { useRouter } from 'next/router'
import '../styles/base.css';
import { SessionProvider } from 'next-auth/react';
import { ModalContextProvider } from '../components/context/ModalContext';
import { ThemeProvider } from 'next-themes';
 

function MyApp({ Component, pageProps:{ session, ...pageProps } }: AppProps) {
  const router = useRouter();
  return (
      <ThemeProvider attribute='class'>
       <SessionProvider session={session} >
        {
          router.pathname === '/' ?   <Component {...pageProps} /> :  
           
          <ModalContextProvider>
            <MainLayout>
              <Component {...pageProps} />
            </MainLayout>
          </ModalContextProvider>
}
        </SessionProvider>
        
      </ThemeProvider> 
  )
}

export default MyApp