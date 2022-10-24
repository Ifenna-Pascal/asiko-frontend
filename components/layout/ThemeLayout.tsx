import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
// import Icon from 'components/shared/Icons';

function ThemeButton() {
	const { systemTheme, theme, setTheme } = useTheme();
	const currentTheme = theme === 'system' ? systemTheme : theme;
	const [mount, setMount] = useState(false);
    console.log(currentTheme, "theme")
	useEffect(() => {
		setMount(true);
	}, []);
	if (!mount) return null;
	if (currentTheme === 'dark') {
		return (
            <div className='py-3 mb-2 cursor-pointer flex items-center dark:hover:bg-slate-700 rounded-md hover:px-4 duration-300  hover:bg-AS-grey-100' onClick={() => setTheme('light')}>
                <i className={`ri-sun-line text-3xl mr-4 dark:text-white text-AS-grey-300`}/>
                <button className='w-full flex'> <p className='text-gray-700 dark:text-gray-200 font-semibold font-Poppins text-lg'>Display</p></button>
            </div>
		);
	} else {
		return (
            <div className='py-3 mb-2 cursor-pointer flex items-center dark:hover:bg-slate-700 hover:px-4 duration-300  hover:bg-AS-grey-100' onClick={() => setTheme('dark')}>
                <i className={`ri-moon-line text-3xl mr-4 dark:text-white  text-AS-grey-300`}/>
                <button className='w-full flex'> <p className='text-gray-700 dark:text-gray-200 font-semibold font-Poppins text-lg'>Display</p></button>
            </div>
		);
	}
}

export default ThemeButton;