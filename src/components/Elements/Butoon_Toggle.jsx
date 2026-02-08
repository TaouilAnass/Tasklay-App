import React, { useState } from 'react'
import {  IoMoon, IoSunny } from 'react-icons/io5';



function Button_Toggle() {
    const [dark, setDark] = useState(false);

    const toggleDarkMode = () => {
        setDark(!dark);
        document.body.classList.toggle('dark');
    };

    return (

        
            <button onClick={toggleDarkMode} className='text-xl h-8 w-8 border-2 border-purple-600 flex justify-center items-center text-purple-600 rounded-3xl hover:bg-purple-600 hover:border-transparent hover:text-white transition-colors duration-700 ease-in-out dark:bg-purple-600 dark:text-white'>
                {dark ? <IoSunny /> : <IoMoon />}
            </button>

    );
}


export default Button_Toggle ; 