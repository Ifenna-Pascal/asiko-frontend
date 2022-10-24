import React, {useState, createContext, ReactNode} from 'react'
import { IPostModal } from '../../interfaces';
const contextDefaultValue:IPostModal = {
    addPostModal: false,
   closeModal: () => {},   
 togglePostModal: () => {}
}

export const Modalcontext = createContext<IPostModal>(contextDefaultValue);

export const  ModalContextProvider:React.FC = ({children}) => {
  const [addPostModal, setAddPostModal] = useState<Boolean>(false);
  const togglePostModal = () => {
    setAddPostModal(!addPostModal);
  };
  const closeModal = () => {
    setAddPostModal(false);
  }
  console.log(addPostModal);
  return (
     <Modalcontext.Provider value={{addPostModal, togglePostModal, closeModal}}>
        {children}
     </Modalcontext.Provider>
  )
}
