import React, { ReactNode } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import "remixicon/fonts/remixicon.css";

interface IMainLayout {
    children: ReactNode
  }

function MainLayout({children} : IMainLayout ) {
  return (
    <div className="flex h-full w-full">
        <Sidebar />
        <div className="md:bg-[#E5E5E5] bg-[#f5f1f1] w-full md:ml-[250px] relative flex flex-col">
        <div className="bg-white block md:hidden shadow-xl py-6 sticky -top-1 z-50 w-full">
        <div className='flex items-center md:hidden   justify-center   mx-auto w-[90px] flex-col'>
            <img src="/imgs/logo.png" alt="logo" className='w-full object-center' />
        </div>
        </div>
            <Navbar />
            <main>
                {children}
            </main>
        </div>
    </div>
  )
}

export default MainLayout