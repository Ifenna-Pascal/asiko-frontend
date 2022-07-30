import type { AppProps } from 'next/app'
import MainLayout from '../components/layout/MainLayout'
import { useRouter } from 'next/router'
import '../styles/base.css';
import { SessionProvider } from 'next-auth/react';
 

function MyApp({ Component, pageProps:{ session, ...pageProps } }: AppProps) {
  const router = useRouter();
  return (
      <>
       <SessionProvider session={session} >
        {
          router.pathname === '/' ?   <Component {...pageProps} /> :  
           
             <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
}
        </SessionProvider>
        
      </> 
  )
}

export default MyApp