import React from 'react'
import logo from '../Img/logo-2.png'
function Learnmore() {
    return (
        <>
            <dialog id='Learn more' class="w-full max-w-md  bg-white mx-auto p-5 border-2 border-white rounded-lg">
                <div class="flex flex-col p-5 rounded-lg shadow bg-white">
                    <div class="flex">
                        <div>
                            <img src={logo} alt="Taskly" className='w-6 h-6 fill-current'/>
                        </div>

                        <div class="ml-3">
                            <h2 class="font-semibold text-gray-800">Alert Component</h2>
                            <p class="mt-2 text-sm text-gray-600 leading-relaxed">
                                At Taskly, our mission is to help you stay organized and productive, no matter how busy life gets. We believe that managing your tasks should be simple, intuitive, and stress-free. That’s why we’ve designed Taskly as an easy-to-use to-do list app, offering just the right tools to keep track of your daily tasks, goals, and priorities.

                                Whether you’re planning personal projects, managing work tasks, or organizing your day-to-day life, Taskly makes it effortless. With features like task categorization, priority settings, and an easy-to-navigate interface, Taskly helps you focus on what’s important and get more done.

                                We’re a small team passionate about productivity and simplicity, always working to make Taskly better for you. Our goal is to provide a minimal, yet powerful tool that helps you achieve your goals efficiently, without unnecessary distractions.

                                If you have any questions, feedback, or suggestions, we’d love to hear from you! Reach out to us at [your contact details].

                                Let’s get things done, one task at a time with Taskly!
                            </p>
                        </div>
                    </div>

                    <div class="flex justify-end items-center mt-3">
                        <button class="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md">
                            Cancel
                        </button>

                        <button class="px-4 py-2 ml-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-md">
                            Continue
                        </button>
                    </div>
                </div>
            </dialog>
        </>
    )
}

export default Learnmore