import { useRouter } from 'next/router'
import React from 'react'
import Avartar from '../general/Avartar';
import {useSession} from 'next-auth/react';

function Banner() {
    const router = useRouter();
    const {data: user} = useSession();
    console.log(user, 'user')
  return (
    <div className='w-full lg:max-w-[720px]  lg:shadow-md rounded-md'>
        <div className='min-h-[170px] relative h-full w-full bg-AS-grey-50 rounded-t-md'>
            <div className='flex w-[40px] h-[40px] items-center justify-center rounded-[50%] cursor-pointer hover:bg-gray-200 bg-white absolute top-4 left-4' onClick={() => router.back()}>
            <i className="ri-arrow-left-line text-2xl font-bold text-AS-blue-100"></i>
            </div>
        </div>
        <div className='min-h-[230px] px-4 lg:px-6 flex flex-col rounded-b-md h-full dark:bg-AS-dark-200 bg-white'>
        <div className='flex items-center justify-between'>
            <div className='flex lg:items-center lg:flex-row flex-col'>
                <Avartar className='lg:w-[120px] w-[80px] -mt-10 z-30 h-[80px] lg:h-[120px] rounded-[50%] border-white  lg:border-t-4' img={user?.user?.image as string} />
                <div className='lg:ml-4 lg:-mt-2 flex flex-col justify-center'>
                    <p className='text-gray-900  font-bold text-xl font-Poppins block leading-[30px] dark:text-white tracking-wide'>{user?.user?.name}</p>
                    <p className='text-gray-500  font-normal font-Poppins text-base dark:text-gray-200'>{user?.user?.email}</p>
                </div>
            </div>
            <button className='w-[120px] lg:w-[150px] h-[40px] py-2 rounded-[40px] border-none text-gray-900  font-semibold hover:bg-AS-grey-50 duration-300 mt-5 lg:mt-0 font-Poppins text-sm lg:text-base bg-AS-grey-100 shadow-inner '>Edit Profile</button>
        </div>
        <p className='text-gray-600 dark:text-gray-200 font-thin font-Poppins pt-4 text-base lg:text-lg lg:px-2 leading-[30px] tracking-wide'>Software Engineer | Technical Writer | Blockchain Engineer</p>
        <div  className='flex lg:flex-row flex-col  lg:items-center'>
            <div className='flex items-center lg:mr-6'>
                <i className="ri-map-pin-fill dark:text-gray-300 text-gray-500 text-xl lg:text-2xl"></i>
                <p className='text-gray-600  font-thin font-Poppins py-2 lg:py-4 text-base lg:text-lg px-2 leading-[30px] dark:text-gray-200 tracking-wide'>Enugu, Nigeria</p>
            </div>
            <div className='flex items-center'>
                <i className="ri-global-fill dark:text-gray-300  text-gray-500 text-2xl"></i>
                <p className='text-gray-600  font-thin font-Poppins py-2 lg:py-4 text-base lg:text-lg px-2 leading-[30px] tracking-wide'><a href="/" className='text-AS-blue-100 font-semibold'>ifenna.vercel.app</a></p>
            </div>
        </div>
        </div>
    </div> 
)}

export default Banner