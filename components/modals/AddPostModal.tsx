import React, { useContext } from 'react'
import { Modalcontext } from '../context/ModalContext';
import { IModal } from '../../interfaces';

function AddPostModal({modal}: IModal) {
  return (
   <>   
        {/* <div className="fixed w-screen h-screen"></div> */}
      <div className={`min-w-[500px] overlay-x-10 absolute ${modal ? "block translate-y-[50%] opacity-100" : "hidden opacity-0  translate-y-0"} z-50 min-h-[300px] duration-300 top-0  -translate-x-[50%] left-[50%] mx-auto bg-white  rounded-2xl shadow-xl p-6`}>
        <h1>Upload pictures to share momments </h1>
    </div>
   </>
  )
}

export default AddPostModal