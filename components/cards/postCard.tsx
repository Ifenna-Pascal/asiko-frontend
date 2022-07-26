import React from 'react';
import { IPost } from '../../interfaces';

function PostCard({ name, username, img, postImg, content}: IPost ) {
  return (
    <div className='grow max-h-[540px] relative my-3  md:m-3 flex flex-col bg-white rounded-tr-[25px] rounded-bl-[25px]   md:rounded-[20px]'>
        <div className='h-[15%] flex items-center px-6 py-8'>
            <div className='md:w-[50px] w-[40px] h-[40px] md:h-[50px] rounded-[50%] mr-2 md:mr-3'>
                <img src={img} alt="user Image" className="w-full h-full object-cover" />
            </div>
            <div className='flex flex-col '>
                <span className="text-[#2B2D2E] text-[0.75rem] leading-[1rem] md:text-base text-left font-semibold font-Poppins" >{name}</span>
                <span className="text-left text-gray-400 text-[0.66rem] md:text-sm font-Poppins">{username}</span>
            </div>
        </div>
        <div className='h-[70%]'>
          <img src={postImg} alt="post image" className="w-full h-full" />
        </div>
        <div className='avsolute h-[15%] flex justify-between items-center px-4 bottom-0'>
            <span className="text-base font-Poppins text-gray-600">{content}</span>
            <div className="flex items-center">
              <span className="text-[0.8rem] mr-[0.1rem] text-gray-500 font-Poppins">4</span>
            <i className="ri-heart-add-line text-2xl font-Poppins text-red-400 "></i>
            </div>
        </div>
    </div>
  )
}

export default PostCard