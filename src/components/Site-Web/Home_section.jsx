import React from 'react'
import icon from '../Img/logo192.png'
import { IoLogoDiscord, IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io5'
import Img from '../Img/imags.jpg'
import Img2 from '../Img/img-2.png'
import { useNavigate } from 'react-router-dom'

export default function Home_section() {
    const nav = useNavigate()
    return (
        <>
            <section className="pt-40 w-full h-screen shadow-lg z-30  " id='Home'>
                <main className='p-20 flex justify-between items-center '>
                    <div className=''>
                        <h1 className='text-4xl font-extrabold  leading-none tracking-tight font-sans text-gray-900 md:text-5xl lg:text-7xl dark:border-2 dark:border-white dark:text-white flex border-2 border-purple-600 shadow-lg w-2/3 p-4 transition-colors flex-wrap rounded-lg' >Welcome to <div className='flex items-center '><img src={icon} alt="" className='h-20 ml-3' /><span className='ml-1 mt-2.5' style={{ fontFamily: 'Baloo' }}>askly .</span></div></h1>
                        <p className='mt-8 text-lg font-semibold text-gray-500 dark:text-gray-400  p-3 shadow-lg border-2 border-purple-600 dark:border-white w-2/3 rounded-lg'>
                            <span className='rounded-sm border-2 border-purple-600 p-0.5 bg-purple-600 font-semibold text-white text-xl mr-0.5' >T</span>askly is a simple and intuitive to-do list app that helps you organize tasks, set priorities, and stay productive. With an easy-to-use interface, you can add, edit, and complete tasks in just a few clicks. Whether for personal projects or daily chores, Taskly keeps you focused and on track to achieve your goals.
                        </p>
                        <div className='flex justify-around w-2/3 mt-10'>
                            <a href="#_" class="w-2/5 relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-600 rounded-full shadow-md group" onClick={() => nav('/Home')}>
                                <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-600 group-hover:translate-x-0 ease">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span class="absolute flex items-center justify-center w-full h-full text-purple-600 transition-colors duration-700 ease-in-out transform group-hover:translate-x-full "  >Get Start</span>
                                <span class="relative invisible">Get Start</span>
                            </a>
                            <a href="#_" class="w-2/5 relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-600 rounded-full shadow-md group" onClick={() => nav('/Home')}>
                                <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-600 group-hover:translate-x-0 ease">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span class="absolute flex items-center justify-center w-full h-full text-purple-600 transition-colors duration-700 ease-in-out transform group-hover:translate-x-full "  >Login</span>
                                <span class="relative invisible">Login</span>
                            </a>
                        </div>
                        <div>
                            <ul class="w-2/3 mt-10 flex justify-evenly flex-wrap">
                                <li>
                                    <a href="#" class="text-gray-500 hover:text-purple-600 dark:hover:text-white dark:text-gray-400 transition-colors duration-700 ease-in-out">
                                        <IoLogoInstagram className='w-7 h-7' />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="text-gray-500 hover:text-purple-600 dark:hover:text-white dark:text-gray-400 transition-colors duration-700 ease-in-out">
                                        <IoLogoLinkedin className='w-7 h-7' />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="text-gray-500 hover:text-purple-600 dark:hover:text-white dark:text-gray-400 transition-colors duration-700 ease-in-out">
                                        <IoLogoGithub className='w-7 h-7' />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="text-gray-500 hover:text-purple-600 dark:hover:text-white dark:text-gray-400 transition-colors duration-700 ease-in-out">
                                        <IoLogoDiscord className='w-7 h-7' />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className=''>
                        <div className='w-auto h-auto p-64 bg-purple-200 shadow-2xl rounded-2xl dark:border-2 dark:border-white dark:bg-transparent transition-colors duration-700'>
                            <img src={Img} alt="pictur1" className='max-w-md absolute right-12 top-32 shadow-lg rounded-2xl ' />
                            <img src={Img2} alt="pictur1" className='min-w-96 max-h-64 absolute right-80 bottom-16  shadow-lg rounded-2xl' />
                        </div>

                    </div>
                </main>
            </section>
        </>
    )
}
