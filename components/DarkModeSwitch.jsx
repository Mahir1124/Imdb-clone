'use client';
import React, { useEffect, useState } from 'react'
import { MdLightMode, MdDarkMode } from 'react-icons/md'
import { useTheme } from 'next-themes';
const DarkModeSwitch = () => {

    const { theme, setTheme, systemTheme } = useTheme();
    // console.log(theme);
    const [ mounted, setMounted ] = useState(false);
    const currentTheme = theme === 'system' ? systemTheme : theme;
    // let currentTheme ;
    // if (theme === systemTheme ) {
    //     currentTheme = systemTheme
    //     console.log('i am system')
    // }
    // else{
    //     currentTheme = theme
    //     console.log('i am else')
    // }
    // console.log(theme);


    useEffect(() => setMounted(true), []);
    return (
        <div>{mounted &&

            (currentTheme === 'dark' ? (
                <MdLightMode onClick={() => setTheme('light')} className='text-xl cursor-pointer hover:text-amber-500' />) : (
                <MdDarkMode onClick={() => setTheme('dark')} className='text-xl cursor-pointer hover:text-amber-500' />)
            )
        }


        </div>
    )
}

export default DarkModeSwitch