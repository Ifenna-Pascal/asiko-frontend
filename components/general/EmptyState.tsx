import React from 'react'

function EmptyState() {
  return (
    <div className='w-full h-full  items-center text-center justify-center flex-col'>
        <div className='w-[200px] md:w-[300px] h-[200px] md:h-[300px] flex justify-center  mx-auto items-center mb-6'>
            <img src="/imgs/rafiki.svg" alt="empty state" className="w-full h-full object-cover overflow-hidden" />
        </div>
        <h1 className="text-xl md:text-2xl font-Poppins text-gray-800">Oops... Nothing to see here</h1>
        <span className="text-sm text-center text-gray-500" >You are yet to upload any images. Your uploaded images will show here</span>
        <div className='flex mt-4 items-center justify-center  cursor-pointer'>
            <button className="w-full max-w-[250px] mx-auto font-semibold font-Poppins text-white text-center flex items-center justify-center py-3 border-none rounded-3xl bg-[#006ECF]">Add Post</button>
        </div>
    </div>
  )
}

export default EmptyState;