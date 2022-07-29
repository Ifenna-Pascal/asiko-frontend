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
				className='overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full bg-theme-dark bg-opacity-70  md:inset-0 h-full md:h-full md:max-h-fit flex justify-center items-center'
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
						<Dialog.Panel className='relative transform bg-theme-card shadow-xl transition-all border-2 border-theme-main rounded-[10px] p-4'>
							{/* <div className='flex items-center justify-between p-1 md:p-2'>
								
								<div>
									{step !== 0 && (
										<button className='text-[20px] text-theme-main' onClick={prevStep}>
											<Icon icon={'ri-arrow-left-line'} />
										</button>
									)}
								</div>
								<div>
									<button
										className='text-[20px] text-white hover:text-theme-100'
										onClick={closeModal}
									>
										<Icon icon={'ri-close-fill'} />
									</button>
								</div>
							</div> */}
							{/* End of action button */}
							<div className='lg:p-2'>{children}</div>
						</Dialog.Panel>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition>
	);
}
