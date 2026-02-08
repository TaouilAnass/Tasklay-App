import React from 'react'
import Button_Toggle from '../Elements/Butoon_Toggle'
import Logo from '../Img/logo-2.png'
import { BiSolidUserCircle } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
import { RiAccountCircleFill } from 'react-icons/ri'
import { IoLogOut, IoSettings } from 'react-icons/io5'

function Navigation() {
    let nav = useNavigate()
    return (
        <header className=''>
            <nav className='z-50 h-24 p-12 flex justify-between items-center  fixed w-screen shadow-xl bg-white '>
                <div id='logo'>
                    <img src={Logo} alt="taskly logo" className='h-16 cursor-pointer' />
                </div>
                <div className='w-2/5'>
                    <ul className='flex justify-evenly items-center'>
                        <a href='#Home'  className="group font-medium text-base text-gray-900 transition-all duration-100 ease-in-out outline-none "> 
                        <span className='cursor-pointer bg-left-bottom bg-gradient-to-r from-purple-600 to-purple-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out hover:text-gray-500 ' style={{fontFamily:'baloo' , letterSpacing: '1px'}}>
                        Home</span></a>
                        <a href='#About' className="group font-medium text-base text-gray-900 transition-all duration-100 ease-in-out outline-none">
                        <span className='cursor-pointer bg-left-bottom bg-gradient-to-r from-purple-600 to-purple-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out hover:text-gray-500 ' style={{fontFamily:'baloo' , letterSpacing: '1px'}}>
                        About</span></a>
                        <a href='#Blogs' className="group font-medium text-base text-gray-900 transition-all duration-100 ease-in-out outline-none">
                        <span className='cursor-pointer bg-left-bottom bg-gradient-to-r from-purple-600 to-purple-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out hover:text-gray-500 ' style={{fontFamily:'baloo' , letterSpacing: '1px'}}>
                        Blogs</span></a>
                    </ul>
                </div>
                <div className='w-1/4 flex justify-around items-center'>
                  <div className='mr-5'><Button_Toggle /></div> 
                  <a href="#_" class="w-3/4 relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-600 rounded-full shadow-md group" onClick={() => nav('/Signing')}>
                                <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-600 group-hover:translate-x-0 ease">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span class="absolute flex items-center justify-center w-full h-full text-purple-600 transition-colors duration-700 ease-in-out transform group-hover:translate-x-full "  >Get Started</span>
                                <span class="relative invisible">Get Started</span>
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Navigation





















{/* <button class="relative group transition-all duration-200 focus:overflow-visible w-max h-max p-2 overflow-hidden flex items-center text-sm pe-1 font-medium text-gray-900 rounded-full  dark:hover:text-blue-500 md:me-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-900">
<BiSolidUserCircle class="w-8 h-8 me-2 rounded-full dark:text-gray-900"/>
<div className='hover:text-purple-600 flex justify-between items-center'>
<span style={{fontFamily: 'baloo'}}>
    Anass Taouil
</span>
<svg class="rotate-90 group-focus:rotate-180 " xmlns="http://www.w3.org/2000/svg" width="22" height="22"
    viewBox="0 0 24 24">
    <path fill="currentColor"
    d="m12 10.8l-3.9 3.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.6-4.6q.3-.3.7-.3t.7.3l4.6 4.6q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275z" />
</svg>
</div>
<div
    class="absolute shadow-lg -bottom-40 left-0 w-full h-max p-2 bg-white border border-zinc-200 rounded-lg flex flex-col gap-2 ">
    <span class="flex flex-row gap-2 items-center hover:bg-zinc-100 p-2 rounded-lg">
        <RiAccountCircleFill className='text-purple-600'/>
        <p>Account</p>
    </span>
    <span class="flex flex-row gap-2 items-center hover:bg-zinc-100 p-2 rounded-lg">
        <IoSettings className='text-purple-600'/>
        <p>Settings</p>
    </span>
    <span class="flex flex-row gap-2 items-center hover:bg-zinc-100 p-2 rounded-lg">
        <IoLogOut className='text-purple-600'/>
        <p>Sign out</p>
    </span>
</div>
</button> */}