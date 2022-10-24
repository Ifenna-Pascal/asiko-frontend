import React, { ReactNode, useContext, useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import "remixicon/fonts/remixicon.css";
import { Modalcontext } from '../context/ModalContext';
import AddPostModal from '../modals/AddPostModal';
import Trending from '../cards/Trending';

interface IMainLayout {
    children: ReactNode
  }

function MainLayout({children} : IMainLayout ) {
  const [modal, setModal] = useState<boolean>(false);
  return (
    <div className="flex bg-white lg:bg-AS-grey-100 dark:bg-AS-dark-100 h-full w-full">
        <Sidebar />
        <div className="w-full min-h-screen md:px-6 md:ml-[250px] relative flex flex-col">
            <Navbar modal={modal} setModal={setModal} />
           <div className='lg:grid grid-cols-5'>
           <main className='w-full lg:col-span-3  h-full relative flex flex-col'>
                {children}
            </main>
            <div className='lg:col-span-2 w-full'>
          <Trending />
          </div>
           </div>
        </div>
    </div>
  )
}

export default MainLayout