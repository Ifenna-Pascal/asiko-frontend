import React from 'react'
import Avartar from '../general/Avartar'

function Comments() {
  return (
    <div className='w-full lg:px-6 pl-1 lg:pt-6 pt-4  flex'>
    <div className='flex items-start justify-start'>
      <Avartar className='w-[50px] h-[50px] rounded-[50%]' img={'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80'} />
    </div>
    <div className='flex items-start mb-4 lg:mb-4 p-1 px-3 lg:px-5 flex-col'>
        <div className='flex items-center'>
            <p className='font-Poppins text-AS-grey-400 font-semibold text-base lg:text-lg dark:text-white'>{'Ifenna Monanu'}</p>
            <p className='text-gray-600 hidden lg:block  font-thin font-Poppins ml-2 dark:text-gray-300'>{`@${'ife_money'}`}</p>
            <p className='bg-gray-600 min-h-[5px] dark:bg-gray-300   rounded-[50%] ml-4 lg:ml-3 min-w-[5px] '></p>
            <p className='text-gray-600  font-thin dark:text-gray-300 font-Poppins ml-1 lg:ml-1'>{'15hrs 24mins'}</p>
        </div>
        <p className='text-gray-600  font-thin font-Poppins dark:text-gray-200 py-1 leading-[30px] tracking-wide'>{
          `JUST ENACTED!for free shipping the rest of October. Also, please re-stim this `
        }</p>
    </div>
    </div>
  )
}

export default Comments