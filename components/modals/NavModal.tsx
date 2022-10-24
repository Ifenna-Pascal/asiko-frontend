import React from 'react'
import Avartar from '../general/Avartar';
import ThemeButton from '../layout/ThemeLayout'
import {useSession, signOut} from 'next-auth/react';

function NavModal({modal, closeModal}: {modal:boolean, closeModal: () => void}) {
    const {data: user} = useSession();
  return (
    <div className={`flex-col py-6 px-6 bg-white rounded-md min-w-[300px]  dark:bg-AS-dark-200  w-full right-0 z-[100] shadow-2xl duration-500 ${modal ? 'flex' : 'hidden' }`}>
        <div className='flex items-center'>
            <Avartar className='w-[60px] h-[60px] rounded-[50%]' img={user?.user?.image as string} />
            <div className='ml-2 -mt-2 flex flex-col justify-center'>
                <p className='text-gray-900 dark:text-white font-bold text-lg font-Poppins block leading-[30px] tracking-wide'>{user?.user?.name}</p>
                <p className='text-gray-500  dark:text-gray-200 font-normal font-Poppins text-base'>{user?.user?.email}</p>
            </div>
        </div>
        <div className='py-2 flex-col px-2 flex'>
           <ThemeButton />
            <div className='py-4 flex cursor-pointer items-center dark:hover:bg-slate-700 rounded-md hover:px-4 duration-300 mb-2 hover:bg-AS-grey-100'>
            <i className={`ri-logout-circle-r-line text-3xl mr-4 dark:text-white text-AS-grey-300`}/>
                <button onClick={() => signOut({callbackUrl: 'https://asiko.vercel.app/'})} className='w-full flex'> <p className='text-gray-700  font-semibold font-Poppins dark:text-gray-200 text-lg'>Logout</p></button>
            </div>
        </div>
    </div>
  )
}

export default NavModal