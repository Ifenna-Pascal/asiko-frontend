import React from 'react'
import User from '../general/User'

function Sidebar() {
  return (
    <div className='md:fixed hidden md:flex flex-col w-[250px]   shadow-md  h-screen z-40 py-8'>
        <div className='flex items-center justify-center  mx-auto w-[80px] flex-col'>
            <img src="/imgs/logo.png" alt="logo" className='w-full object-center' />
        </div>
        <div className='mt-[120px]'>
            <User username="ana_ye" name='Anabel Okoye' img="/imgs/user.png" />
        </div>
        <div className='absolute bottom-8 flex w-full justify-center cursor-pointer items-center'>
            <div className='w-[25px] mr-3 flex items-center' >
                <img src="/imgs/logout.png" alt="logout_logo" className='w-full'  />
            </div>
            <span className='text-[#EB4335] text-lg font-Poppins text-center tracking-wider'>Log Out</span>
        </div>
    </div>
  )
}

export default Sidebar