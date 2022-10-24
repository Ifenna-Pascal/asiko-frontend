import React from 'react'

function Icons({icon}: {icon:string} ) {
  return (
    <div className='flex items-center  justify-center hover:cursor-pointer lg:hover:bg-gray-200 lg:dark:hover:bg-AS-dark-200  lg:w-[80px] lg:h-[80px] rounded-[50%]'>
        <i className={`ri-${icon} dark:text-gray-200  text-3xl text-AS-grey-300`}/>
    </div>
  )
}

export default Icons