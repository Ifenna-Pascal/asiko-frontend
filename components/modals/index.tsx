import { Dialog, Transition } from '@headlessui/react';
// import Icon from 'components/general/Icons';
import React, {Fragment} from 'react';

interface IModal {
    isOpen: boolean | undefined;
    children: React.ReactNode;
    closeModal?: any
}

export  const Modal = ({ isOpen, closeModal, children }:IModal) => {
	return (
		<Transition appear show={isOpen} as={Fragment}>
			<Dialog
				as='div'
				className='overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full bg-gray-900 bg-opacity-70  md:inset-0 h-full md:h-full md:max-h-fit flex justify-center items-center'
				onClose={closeModal}
			>
				<div className='relative p-4 w-full max-w-xl h-full'>
					<Transition.Child
						as={Fragment}
						enter='ease-out duration-300'
						enterFrom='opacity-0 scale-95'
						enterTo='opacity-100 scale-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100 scale-100'
						leaveTo='opacity-0 scale-95'
					>
						<Dialog.Panel className='relative transform b shadow-xl transition-all'>
						 
							{/* End of action button */}
							<div className='lg:p-2'>{children}</div>
						</Dialog.Panel>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition>
	);
}
