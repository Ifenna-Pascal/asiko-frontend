import React, {useContext} from 'react'
import User from '../general/User';
import { useSession, signOut } from 'next-auth/react';
import Icons from '../general/Icons';
import { sideIcons } from '../../utils/icons';
import Link from 'next/link';
import AddPostModal from '../modals/AddPostModal';
import AddPostButton from '../general/button/AddPostButton';
import { Modalcontext } from '../context/ModalContext';
import { Modal } from '../modals';
import FileInput from '../general/FileUpload';

function Sidebar() {
    const {data : user} = useSession();
    const {addPostModal, togglePostModal, closeModal} = useContext(Modalcontext);

  return (
    <div className='fixed bottom-0 lg:left-0 flex  flex-row lg:flex-col lg:w-[250px] w-full dark:bg-AS-dark-200 lg:dark:bg-transparent shadow-2xl lg:shadow-none bg-white lg:bg-transparent  lg:h-screen z-40 py-3 lg:py-6'>
       <div className='flex w-full lg:px-6 lg:py-4 flex-row lg:flex-col items-center  lg:items-end '>
        <div className='w-[80px] hidden lg:block pb-4' >
            <img src="/imgs/logo.png" alt="logo" className='w-full object-center' />
         </div>
           <div className='flex flex-row  justify-between w-full lg:w-[75px] px-7 lg:px-0 lg:flex-col'>
           {
                sideIcons.map(icon => (
                    <Link key={icon.id} href={icon.path}> 
                         <div className='py-4'>
                            <Icons icon={icon.name}/>
                        </div>
                    </Link>
                ))
           }
           </div>

           <AddPostButton icon={"add-line"} onClick={togglePostModal} />
           <Modal isOpen={addPostModal as boolean} closeModal={closeModal}>
            <FileInput modal={addPostModal as boolean} />
           </Modal>
       </div>
    </div>
  )
}

export default Sidebar

// <div className='flex items-center justify-center  mx-auto w-[80px] flex-col'>
// <img src="/imgs/logo.png" alt="logo" className='w-full object-center' />
// </div>
// <div className='mt-[120px]'>
// <User username={user?.user?.email} name={user?.user?.name} img={user?.user?.image} />
// </div>
// <div className='absolute bottom-8 flex w-full justify-center cursor-pointer items-center' onClick={() => signOut({callbackUrl: "http://localhost:3000/"})}>
// <div className='w-[25px] mr-3 flex items-center' >
//     <img src="/imgs/logout.png" alt="logout_logo" className='w-full'  />
// </div>
// <span className='text-[#EB4335] text-lg font-Poppins text-center tracking-wider'>Log Out</span>
// </div>