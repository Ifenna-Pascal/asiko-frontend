import React, { useEffect } from 'react';
import { signIn, useSession } from "next-auth/react"
import { useRouter } from 'next/router';

function Index() {
  const router = useRouter();
  const {status} = useSession();
  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/dashboard');
    } 
  }, [status])
  return (
    <div className='background justify-center relative flex items-center  bg-center bg-cover w-screen h-screen'>
        <div className="max-w-[600px] h-full absolute bottom-0 md:bottom-auto w-full  shadow-xl opacity-70 rounded-t-[40px] max-h-[320px] md:max-h-[400px] bg-white md:rounded-[20px] flex flex-col items-center justify-center">
        <div className='flex items-center justify-center  mx-auto w-[120px]  flex-col'>
            <img src="/imgs/logo.png" alt="logo" className='w-full object-center' />
        </div>
        <span className="font-Poppins my-2 text-lg">Helping you share the moment...</span>
        <div className='my-2 flex items-center max-w-[250px] w-full cursor-pointer'>
            <button className="w-full font-semibold font-Poppins text-gray-600  flex items-center justify-center bg-white border border-[#D1D1D1] py-3  rounded-3xl" onClick={() => signIn("google", { callbackUrl: 'http://localhost:3000/dashboard'})}><img src="/imgs/google.png" /><span className="ml-3">Signin with Google</span></button>
          </div>
        </div>
    </div>
  )
}

export default Index