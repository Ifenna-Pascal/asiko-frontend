import React from 'react'
import { IUser } from '../../interfaces'

function User({img, username, name} : IUser) {
  return (
    <div className='flex flex-col items-center justify-center'>
        <div className='w-[80px] h-[80px] mb-3 rounded-[50%] flex items-center'>
            <img alt='user_image' src={img} />
        </div>
        <h4 className='font-Poppins text-[#202223] text-center text-[20px] leading-[28px]'>{name}</h4>
        <p className='text-center text-[#6D7175]'>{username}</p>
    </div>
  )
}

export default User