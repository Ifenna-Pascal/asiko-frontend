import React, { useState } from 'react'
import Avartar from '../general/Avartar'
function PostReply() {
    const [input, setInput] = useState('');
    const handleChange = (e:any) => {
        setInput(e.target.value);
    }
  return (
    <div className='lg:min-h-[40px] w-full  lg:px-6 px-2 border-b-2 border-gray-200 dark:border-gray-500 flex items-center pb-4 pt-6'>
          <Avartar className='w-[50px] h-[50px] mr-4 rounded-[50%]' img={'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80'} />
         <form className='relative w-full flex items-center'>
        <button><i className={`ri-send-plane-2-fill dark:text-white text-gray-700 absolute right-5 bottom-2 cursor-pointer text-2xl ${input ? 'block' : 'hidden'}`}></i></button>
         <input onChange={handleChange} type="text" className='w-[90%] text-gray-600  font-thin font-Poppins dark:text-gray-200 py-3 leading-[30px] tracking-wide border-0 bg-transparent  focus:outline-none border-b duration-none' placeholder='Write a reply...' />
         </form>
        
    </div>
  )
}

export default PostReply