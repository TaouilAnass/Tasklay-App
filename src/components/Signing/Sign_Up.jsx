import React, { useState } from 'react'
import Logo from '../Img/logo-2.png'
import { useNavigate } from 'react-router-dom';
import Terms from '../Elements/Terms';
import Button_Toggle from '../Elements/Butoon_Toggle';
import Privacy_Policy from '../Elements/Privacy_Policy';
import axios from 'axios';





export default function Sign_Up() {
    let nav = useNavigate()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [show, setShow] = useState(false)

    const handleSignup = async () => {
        try {
            const response = await axios.post('http://localhost:3000/api/signup', { username, password });
            setMessage(response.data.message);
            setShow(true)
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div class="min-h-screen bg-gray-50 text-gray-900 flex justify-center dark:bg-gray-900 ">
            <div class="max-w-screen-xl m-0 sm:m-10 bg-white shadow-xl sm:rounded-lg flex justify-center flex-1 dark:bg-gray-900 dark:border-2 dark:border-white">
                <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                    <div>
                        <img src={Logo}
                            class="w-32 mx-auto" />
                    </div>
                    <div class="mt-9 flex flex-col items-center">
                        <h1 class="text-2xl xl:text-3xl font-extrabold dark:text-white" style={{ fontFamily: 'Baloo', letterSpacing: '4px' }} >
                            Sign up
                        </h1>
                        <div class="w-full flex-1 mt-7">
                            <div class="flex flex-col items-center">
                                <button
                                    class="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                                    <div class="bg-white p-2 rounded-full">
                                        <svg class="w-4" viewBox="0 0 533.5 544.3">
                                            <path
                                                d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                                                fill="#4285f4" />
                                            <path
                                                d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                                                fill="#34a853" />
                                            <path
                                                d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                                                fill="#fbbc04" />
                                            <path
                                                d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                                                fill="#ea4335" />
                                        </svg>
                                    </div>
                                    <span class="ml-4" >
                                        Sign Up with Google
                                    </span>
                                </button>

                                <button
                                    class="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5">
                                    <div class="bg-white p-1 rounded-full">
                                        <svg class="w-6" viewBox="0 0 32 32">
                                            <path fill-rule="evenodd"
                                                d="M16 4C9.371 4 4 9.371 4 16c0 5.3 3.438 9.8 8.207 11.387.602.11.82-.258.82-.578 0-.286-.011-1.04-.015-2.04-3.34.723-4.043-1.609-4.043-1.609-.547-1.387-1.332-1.758-1.332-1.758-1.09-.742.082-.726.082-.726 1.203.086 1.836 1.234 1.836 1.234 1.07 1.836 2.808 1.305 3.492 1 .11-.777.422-1.305.762-1.605-2.664-.301-5.465-1.332-5.465-5.93 0-1.313.469-2.383 1.234-3.223-.121-.3-.535-1.523.117-3.175 0 0 1.008-.32 3.301 1.23A11.487 11.487 0 0116 9.805c1.02.004 2.047.136 3.004.402 2.293-1.55 3.297-1.23 3.297-1.23.656 1.652.246 2.875.12 3.175.77.84 1.231 1.91 1.231 3.223 0 4.61-2.804 5.621-5.476 5.922.43.367.812 1.101.812 2.219 0 1.605-.011 2.898-.011 3.293 0 .32.214.695.824.578C24.566 25.797 28 21.3 28 16c0-6.629-5.371-12-12-12z" />
                                        </svg>
                                    </div>
                                    <span class="ml-4">
                                        Sign Up with GitHub
                                    </span>
                                </button>
                            </div>

                            <div class="my-9 border-b text-center">
                                <div
                                    class="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                                    Or sign up with e-mail
                                </div>
                            </div>

                            <div class="mx-auto max-w-xs">
                                {show ?
                                    <div class="bg-green-200 px-6 py-4 my-2 rounded-md text-lg flex items-center mx-auto max-w-lg">
                                        <svg viewBox="0 0 24 24" class="text-green-600 w-5 h-5 sm:w-5 sm:h-5 mr-3">
                                            <path fill="currentColor"
                                                d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
                                            </path>
                                        </svg>
                                        <span class="text-green-800">{message}</span>
                                    </div> : ''
                                }
                                {/* Form inputs */}
                                <div className='flex justify-between w-full '>
                                    <input class="w-2/4 px-4 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white" type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                                    <select className="w-2/5 px-4 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 text-sm focus:outline-none focus:border-gray-400 focus:bg-white">
                                        <option className='text-gray-500' disabled selected>Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Feamle">Feamle</option>
                                    </select>
                                </div>

                                <input class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5" type="email" placeholder="Email" />
                                <input class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                                <button
                                    onClick={handleSignup}
                                    class="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                    <svg class="w-6 h-6 -ml-2" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                        <circle cx="8.5" cy="7" r="4" />
                                        <path d="M20 8v6M23 11h-6" />
                                    </svg>
                                    <span class="ml-3">
                                        Sign Up
                                    </span>
                                </button>
                                <h3 class="mt-4 text-sm text-gray-600 text-center dark:text-gray-300 ">
                                    Do you have an account?
                                    <button class="ml-2 group text-blue-400 transition-all duration-100 ease-in-out text-sm outline-none" >
                                        <span class="bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out" onClick={() => nav('/Login')}>
                                            Login
                                        </span>
                                    </button>
                                </h3>

                                <div class="text-gray-500 flex text-center flex-col mt-3 items-center text-sm"  >
                                    <p class="cursor-default">
                                        <span>By Login, you agree to our </span>
                                        <button class="group text-blue-400 transition-all duration-100 ease-in-out outline-none" onClick={() => document.getElementById('Terms').showModal()}>
                                            <span class="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out" >
                                                Terms
                                            </span>
                                        </button>
                                        <span > and </span>
                                        <button class="group text-blue-400 transition-all duration-100 ease-in-out outline-none" onClick={() => document.getElementById('Privacy Policy').showModal()}>
                                            <span class="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out" >
                                                Privacy Policy
                                            </span>
                                        </button>
                                    </p>
                                </div>
                                <Terms />
                                <Privacy_Policy />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex-1 bg-indigo-100 text-center hidden lg:flex">
                    <div class="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                        style={{ backgroundImage: "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')" }}>
                        <div className='w-full flex justify-end '><Button_Toggle /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
