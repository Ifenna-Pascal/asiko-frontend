import React from 'react'
import Avartar from '../general/Avartar'

function Trending() {
  return (
    <div className='my-4  w-full bg-white rounded-md dark:bg-AS-dark-200 p-6 hidden lg:flex flex-col'>
       <p className='font-Poppins text-AS-grey-400 dark:text-white font-semibold text-xl mb-5'>Trendings</p>
      <Trend 
        trend='Would you visit a Mule Sauce res...'
        time="2 days 4 hrs"
        img="https://lh3.googleusercontent.com/a/ALm5wu2vZ_7qfpjupoUOaBBizz6pJzvbKKqO6a3jY8uMDA=s96-c"
       />
       <Trend 
        trend='Would you visit a Mule Sauce res...'
        time="2 days 4 hrs"
        img=" https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"
       />
       <Trend 
        trend='ASUU strike called off res...'
        time="2 days 4 hrs"
        img="https://lh3.googleusercontent.com/a/ALm5wu2vZ_7qfpjupoUOaBBizz6pJzvbKKqO6a3jY8uMDA=s96-c"
       />
       <Trend 
        trend='Would you visit a Mule Sauce res...'
        time="2 days 4 hrs"
        img=" https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"
       />
    </div>
  )
}

export default Trending


const Trend = ({img, trend, time}: {img: string, trend:string, time:string}) => (
  <div className='flex items-center mb-4'>
     <Avartar className='w-[50px] h-[50px] rounded-[50%]' img={img} />
     <div className='ml-3 -mt-2 flex flex-col justify-center'>
     <p className='text-gray-600  font-[500] dark:text-gray-200 text-lg font-Poppins block leading-[30px] tracking-wide'>{trend}</p>
     <p className='text-gray-400  dark:text-gray-200 font-thin font-Poppins text-sm'>Ends in {time}</p>
     </div>
  </div>
)