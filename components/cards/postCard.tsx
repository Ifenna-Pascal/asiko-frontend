import Link from 'next/link';
import React from 'react';
import { IPost } from '../../interfaces';
import Avartar from '../general/Avartar';

function PostCard({ name, username, img, postImg, time, content}: IPost ) {
  return (
    <div className='mb-4 w-full cursor-pointer   bg-white dark:bg-AS-dark-200 rounded-md pl-4 py-4 pr-0 pb-0 flex'>
      <div className='flex items-start justify-start'>
        <Avartar className='lg:w-[50px] w-[30px] h-[30px] lg:h-[50px] rounded-[50%]' img={img} />
      </div>
    <Link href='/post/1'>
    <div className='flex lg:items-start p-1 pl-3 lg:px-5 flex-col'>
          <div className='flex items-center'>
              <p className='font-Poppins text-AS-grey-400 font-semibold text-lg dark:text-white'>{name}</p>
              <p className='text-gray-600  font-thin font-Poppins ml-2 dark:text-gray-300'>{`@${username}`}</p>
              <p className='bg-gray-600 min-h-[5px] dark:bg-gray-300   rounded-[50%] ml-3 min-w-[5px] '></p>
              <p className='text-gray-600  font-thin dark:text-gray-300 font-Poppins ml-1'>{time}</p>
          </div>
          <p className='text-gray-600  font-thin font-Poppins dark:text-gray-200 py-1 lg:py-3 leading-[30px] tracking-wide'>{content}</p>
          {
            postImg && <div className='w-full pr-3 py-4 h-[250px] lg:h-[400px]'>
            <img className='rounded-[12px]  w-full h-full' src={postImg} />
         </div>
          }

          <div className='flex pl-4 pr-6 lg:px-0 lg:max-w-[200px] pb-4 justify-between w-full items-center'>
            <div className='flex items-center'>
            <i className="ri-chat-3-line mr-1 text-gray-500 dark:text-gray-200 text-xl"></i>
            <p className='text-gray-400 text-base mt-2 dark:text-gray-300 font-Poppins'>1</p>
            </div>
            <div className='flex items-center'>
            <i className="ri-heart-2-line mr-1 text-gray-500 dark:text-gray-200 text-xl"></i>
            <p className='text-gray-400 text-base mt-2 font-Poppins dark:text-gray-300'>1</p>
            </div>
          </div>
      </div>
    </Link>
    </div>
  )
}

export default PostCard