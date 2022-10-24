import React from 'react'

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon: string
}

function AddPostButton({icon, ...rest}: IButton) {
  return (
    <button className='absolute lg:relative lg:right-auto lg:bottom-auto right-2 bottom-24 lg:flex items-center justify-center hover:cursor-pointer bg-AS-blue-100 my-4  hover:my-2 duration-500 w-[70px] h-[70px] rounded-[50%]' {...rest}>
        <i className={`ri-${icon} text-4xl font-semibold text-white`}/>
    </button>
  )
}

export default AddPostButton

 