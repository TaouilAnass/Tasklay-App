import React, { useState } from 'react'
import About_img from '../Img/about-img.jpg'

export default function About() {
  let [more, setMore] = useState(false)
  return (
    <>
      <section id='About' className='w-full h-auto p-5'>
        <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div class="max-w-lg">
              <h2 class="text-4xl font-extrabold text-gray-900 sm:text-4xl" style={{ fontFamily: 'baloo' }}><span className='rounded-lg border-2 border-purple-600 p-0.5 bg-purple-600 font-semibold text-white text-4xl'>A</span>bout Us</h2>
              {
                more ? <>
                  <p class="mt-6 w-full text-lg font-semibold text-gray-500 dark:text-gray-400  p-3 shadow-lg border-2 border-purple-600 dark:border-white rounded-lg">
                    At Taskly, our mission is to help you stay organized and productive,
                    no matter how busy life gets. We believe that managing your tasks should be simple,
                    intuitive, and stress-free. That’s why we’ve designed Taskly as an easy-to-use to-do list app,
                    offering just the right tools to keep track of your daily tasks, goals, and priorities.
                  </p>
                  <p class="mt-6 w-full text-lg font-semibold text-gray-500 dark:text-gray-400  p-3 shadow-lg border-2 border-purple-600 dark:border-white rounded-lg">
                  Whether you’re planning personal projects, managing work tasks, or organizing your day-to-day life, Taskly makes it effortless. 
                  With features like task categorization, priority settings, and an easy-to-navigate interface, Taskly helps you focus on what’s important and get more done.
                  </p>
                  <p class="mt-6 w-full text-lg font-semibold text-gray-500 dark:text-gray-400  p-3 shadow-lg border-2 border-purple-600 dark:border-white rounded-lg">
                  We’re a small team passionate about productivity and simplicity, always working to make Taskly better for you. Our goal is to provide a minimal, 
                  yet powerful tool that helps you achieve your goals efficiently, without unnecessary distractions.
                  </p>
                  <p class="mt-6 w-full text-lg font-semibold text-gray-500 dark:text-gray-400  p-3 shadow-lg border-2 border-purple-600 dark:border-white rounded-lg">
                  If you have any questions, feedback, or suggestions, we’d love to hear from you! Reach out to us at <button class="group text-blue-400 transition-all duration-100 ease-in-out outline-none">
                                            <span class="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out mr-1" >
                                                taskly@gmail.com
                                            </span>
                                        </button>
                  Let’s get things done, one task at a time with Taskly!
                  </p>
                  <div class="mt-8">
                    <button class="text-blue-500 hover:text-blue-600 font-medium" onClick={() => setMore(false)}>Hide
                      <span class="ml-2" >&#8594;</span></button>
                  </div>  </> : <>
                  <p class="mt-6 w-full text-lg font-semibold text-gray-500 dark:text-gray-400  p-3 shadow-lg border-2 border-purple-600 dark:border-white rounded-lg">
                    At Taskly, our mission is to help you stay organized and productive,
                    no matter how busy life gets. We believe that managing your tasks should be simple,
                    intuitive, and stress-free. That’s why we’ve designed Taskly as an easy-to-use to-do list app,
                    offering just the right tools to keep track of your daily tasks, goals, and priorities.
                  </p>
                  <div class="mt-8">
                    <button class="text-blue-500 hover:text-blue-600 font-medium" onClick={() => setMore(true)}>Learn more about us
                      <span class="ml-2">&#8594;</span></button>
                  </div>
                </>

              }
            </div>
            <div class="mt-12 md:mt-0">
              <img src={About_img} alt="About Us Image" class="object-cover rounded-lg shadow-md" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
