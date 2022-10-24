import { useRouter } from 'next/router'
import React from 'react'
import Comments from '../../components/cards/Comments'
import PostReply from '../../components/cards/PostReply'
import Avartar from '../../components/general/Avartar'

function Post() {
    const router = useRouter()
  return (
    <div className='max-w-[720px] mb-4 bg-white dark:bg-AS-dark-200 rounded-md lg:py-6 pb-0 w-full'>
        <div className='lg:flex w-full min-h-[50px] hidden border-b-2 border-gray-200 dark:border-gray-500  items-start'>
        <div className='flex w-[40px] h-[40px] ml-6 -mt-2 items-center justify-center rounded-[50%] cursor-pointer dark:bg-slate-700 hover:bg-gray-200 bg-gray-200' onClick={() => router.back()}>
            <i className="ri-arrow-left-line text-2xl font-bold dark:text-white  text-AS-blue-100"></i>
            </div>
        </div>
    <div className='w-full lg:p-6 p-4  flex flex-col'>
        <div className='flex items-center'>
        <div className='flex items-center'>
        <Avartar className='w-[50px] mr-4 h-[50px] rounded-[50%]' img={'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80'} />
      </div>
      <div className='flex -mt-4 flex-col'>
              <p className='font-Poppins text-AS-grey-400 font-semibold text-base dark:text-white'>{'Ifenna Monanu'}</p>
              <p className='text-gray-600  font-thin font-Poppins text-sm  dark:text-gray-300'>{`@${'ife_money'}`}</p>
          </div>
        </div>
      <div className='flex items-start  flex-col'>

          <p className='text-gray-600  font-thin font-Poppins dark:text-gray-200 pb-3 leading-[30px] tracking-wide'>{
            `JUST ENACTED!
            Please help us fill up our map of states shipped to, by ordering from Pride Supplies LLC. Use promo: HISTORYMONTH for free shipping the rest of October. Also, please re-stim this `
          }</p>
          {
             <div className='w-full py-4 h-[270px] lg:h-[400px]'>
            <img className='rounded-[12px] w-full h-full' src={'https://plus.unsplash.com/premium_photo-1663047201632-4045f1e2d8b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'} />
         </div>
          }

          <div className='flex  border-y-2 border-gray-200 dark:border-gray-500 px-8 py-4 justify-between  w-full items-center'>
                {/* <div className='max-w-[200px] w-full flex items-center justify-between'> */}
                <div className='flex  items-center'>
            <i className="ri-chat-3-line mr-1 text-gray-500 dark:text-gray-200 text-xl"></i>
            <p className='text-gray-400 text-base mt-2 dark:text-gray-300 font-Poppins'>1</p>
            </div>
            <div className='flex items-center'>
            <i className="ri-heart-2-line mr-1 text-gray-500 dark:text-gray-200 text-xl"></i>
            <p className='text-gray-400 text-base mt-2 font-Poppins dark:text-gray-300'>1</p>
            </div>
                {/* </div> */}
          </div>
          <PostReply />
          <div className='flex flex-col'>
            <Comments /> 
            <Comments />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Post