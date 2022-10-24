import { useSession } from 'next-auth/react';
import React, { useState } from 'react';
import { IModal } from '../../interfaces'
import Avartar from '../general/Avartar';
import SearchBar from '../general/SearchBar';
import { Modal } from '../modals'
import NavModal from '../modals/NavModal';


function Navbar(props : IModal) {
  const {data : user} = useSession();
  const [modal, setModal] = useState<boolean> (false);
  const toggleModal = () => {
    setModal(!modal);
  }
  const closeModal = () => {
    setModal(false);
  }
  return (
   <div className='sticky top-0 z-50 shadow-xl bg-white '>
     <nav className='sticky  top-0 flex px-6 lg:px-0  z-30 lg:bg-AS-grey-100  dark:bg-AS-dark-100 md:shadow-none justify-between   items-center  mx-auto md:pt-6 h-[90px] lg:pb-4 w-full'>
      <div className='flex items-center w-full justify-between'>
          <SearchBar />
         <div className='lg:mr-8'>
         <Avartar 
          className={'w-[40px] lg:w-[60px] h-[40px] lg:h-[60px]'} 
          img= {user?.user?.image as string}
          onClick={toggleModal}
        />
        </div>
        <div className='w-[80px] lg:hidden ' >
            <img src="/imgs/logo.png" alt="logo" className='w-full object-center' />
         </div>
        <div className='lg:hidden'>
        <i className="ri-search-2-line text-AS-grey-300 font-semibold text-2xl"></i>
        </div>
      </div>
        
    </nav>
       <div className={`${modal ? 'lg:translate-x-0' : 'lg:translate-x-[120%]'} absolute right-0 z-50 duration-500`}>
       <NavModal modal ={modal} closeModal={closeModal} />  
       </div>
   </div>
  )
}

export default Navbar

 {/* <div className="relative w-[30%] md:ml-8 grow  md:flex hidden  items-center">
            <input
              type="text"
              className="w-full pl-3  py-[.5rem] text-gray-700  bg-[#F0F0F0]   rounded-md dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 rounded-lg h-[45px]  dark:focus:border-blue-300 text-[14px] font-Poppins focus:outline-none"
              placeholder="search"
            />
              <span className="absolute inset-y-0 right-0 flex items-center pr-3">
              <svg
                className="w-6 h-6 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>
          </div>
          <div className="md:flex hidden grow justify-between  space-x-8 ">
          <div className="flex justify-between ml-12 grow  px-8 items-center">
              <i className="ri-user-line hidden md:block  text-2xl text-gray-500  cursor-pointer"></i>  
              <i className="ri-notification-4-line  text-2xl text-gray-500  cursor-pointer"></i>
              <i className="ri-chat-3-line  text-2xl text-gray-500 cursor-pointer"></i>
          </div>
          <div className='hidden  md:flex items-center  cursor-pointer'>
            <button className="px-10 font-semibold font-Poppins text-white flex items-center justify-center py-3 border-none rounded-3xl bg-[#006ECF]" onClick={() => props.setModal?.(!props.modal)}>Add Post <i className="ri-add-line ml-2" ></i></button>
          </div>
          </div>
          <div className='w-full md:hidden flex items-center shadow-xl  shadow-slate-50 rounded-t-[20px] mx-auto py-4 px-8 justify-between'>
                <div className='flex items-center flex-col justify-center'>
                    <i className="ri-home-4-line  text-2xl  text-gray-500 cursor-pointer"></i>
                    <span className="text-[14px] font-Poppins text-[#62666A]">Home </span>
                </div>
                <div className='flex items-center flex-col bg-[#62666A] w-[50px] shadow-lg h-[50px] rounded-[50%] justify-center'>
                    <i className="ri-add-line  text-xl font-Poppins font-semibold text-white "></i>
                </div>
                <div className='flex items-center flex-col justify-center'>
                <div className="flex items-center w-[30px] h-[30px]"><img alt='user_image' src={user?.user?.user?.user?.image as string} className="w-full h-full md:hidden rounded-[50%]" /></div>
                    <span className="text-[14px] font-Poppins text-[#62666A]"> Profile </span>
                </div>
          </div>
            <Modal isOpen={props.modal} closeModal={() => props.setModal(false)}>
            <AddPostModal modal={props.modal} />
            </Modal> */}