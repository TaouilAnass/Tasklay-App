import React from 'react'
import logo from '../Img/logo-2.png'

function ForgetPass() {
    return (
        <dialog id='Forget_Pass' class="w-full max-w-md  bg-white mx-auto p-5 border-2 border-white rounded-lg">
            <form method='dialog' className='flex justify-between items-center'>
                <img src={logo} alt="Taskly" className='w-28'/>
                <button class="bg-white rounded-md p-2 inline-flex items-center justify-center text-red-400 hover:text-red-500 hover:bg-gray-100 focus:outline-none  focus:ring-indigo-300">
                    <span class="sr-only">Close</span>
                    <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </form>

            <div class="bg-white mt-4 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 border-2 border-indigo-200">
                <div class="p-4 sm:p-7">
                    <div class="text-center">
                        <h1 class="block text-2xl font-bold text-gray-800 dark:text-white" style={{ fontFamily: 'baloo' }}>Forgot password?</h1>
                        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                            <span>Remember your password? </span>
                            <a class="text-blue-600 decoration-2 hover:underline font-medium" href='Login'>
                                Login here
                            </a>
                        </p>
                    </div>

                    <div class="mt-5">
                        <form>
                            <div class="grid gap-y-4">
                                <div>
                                    <label for="email" class="block text-sm font-bold ml-1 mb-2 dark:text-white">Email address</label>
                                    <div class="relative">
                                        <input type="email" id="email" name="email" class="py-3 px-4 block w-full border-2 placeholder:text-gray-500 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm" required aria-describedby="email-error" placeholder='Email'/>
                                    </div>
                                    <p class="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
                                </div>
                                <button type="submit" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">Reset password</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <p class="mt-3 flex justify-center items-center text-center divide-x divide-gray-300 dark:divide-gray-700">
                <a class="pr-3.5 inline-flex items-center gap-x-2 text-sm text-gray-600 decoration-2 hover:underline hover:text-blue-600 dark:text-gray-500 dark:hover:text-gray-200" href="#" target="_blank">
                    <svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                    View Github
                </a>
                <a class="pl-3 inline-flex items-center gap-x-2 text-sm text-gray-600 decoration-2 hover:underline hover:text-blue-600 dark:text-gray-500 dark:hover:text-gray-200" href="!#">
                    Contact us!
                </a>
            </p>
        </dialog>
    )
}

export default ForgetPass