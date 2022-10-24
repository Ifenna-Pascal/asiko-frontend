import React, { useContext } from 'react'
import { Modalcontext } from '../context/ModalContext';
import { IModal } from '../../interfaces';

function AddPostModal({modal}: IModal) {
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
  }
  return (
   <>   
      <div className={`min-w-[500px] overlay-x-10 absolute dark:bg-AS-dark-200 ${modal ? "block translate-y-[50%] opacity-100" : "hidden opacity-0  translate-y-0"} z-50 min-h-[300px] duration-300 top-0  -translate-x-[50%] left-[50%] mx-auto bg-white  rounded-md shadow-xl p-6`}>
      <p className='font-Poppins text-AS-grey-400 dark:text-white font-semibold text-xl mb-5'>Share Monents With Asiko</p>
      <form onSubmit={handleSubmit}>


      </form>
    </div>
   </>
  )
}

export default AddPostModal