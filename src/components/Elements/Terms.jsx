import React from 'react'
import Logo from '../Img/logo-2.png'

export default function Terms() {
    return (
        <dialog id="Terms" className="modal modal-box w-1/4 rounded-lg ">
            <div class="flex flex-col p-5 rounded-lg shadow bg-white">
                <div class="flex">
                    <div>
                        <svg class="mt-0.5 w-6 h-6 fill-current text-purple-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></svg>
                    </div>

                    <div class="ml-3">
                        <h2 class="font-semibold text-gray-800 flex items-center "><img src={Logo} alt='Logo' className='w-24' /> - Terms of Service</h2>
                        <ul className='scrolling overflow-auto h-56 p-8'>
                            <div className='mb-6'>
                                <h4 className=' font-semibold text-xl'>1. Acceptance of Terms</h4>
                                <p class="mt-1 ml-8 text-gray-500 text-xs">By accessing or using Taskly, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use Taskly. We reserve the right to modify these Terms at any time, and your continued use of Taskly constitutes acceptance of any updates or changes.</p>
                            </div>
                            <div className='mb-6'>
                                <h4 className=' font-semibold text-xl'>2. Use of Taskly</h4>
                                <p class="ml-8 mt-1 text-gray-500 text-xs">Taskly is a to-do list application that allows users to create and manage tasks. You agree to use Taskly in accordance with applicable laws and regulations. You are solely responsible for the content you create and store on Taskly.</p>
                            </div>
                            <div className='mb-6'>
                                <h4 className=' font-semibold text-xl'>3. User Accounts (Optional)</h4>
                                <p class="ml-8 mt-1 text-gray-500 text-xs">To use certain features of Taskly, you may need to create an account. You are responsible for maintaining the confidentiality of your account and password. Taskly is not liable for any loss or damage from unauthorized use of your account.</p>
                            </div>
                            <div className='mb-6'>
                                <h4 className=' font-semibold text-xl'>4. Prohibited Activities</h4>
                                <p class="ml-8 mt-1 text-gray-500 text-xs">You agree not to:</p>
                                <ul className='ml-5'>
                                    <li className='ml-8 mt-1 text-gray-500 text-xs list-disc'>Use Taskly for any unlawful or harmful activities.</li>
                                    <li className='ml-8 mt-1 text-gray-500 text-xs list-disc'>Attempt to hack, exploit, or disrupt the service.</li>
                                    <li className='ml-8 mt-1 text-gray-500 text-xs list-disc'>Upload any malicious content, including viruses or harmful code.</li>
                                </ul>
                            </div>
                            <div className='mb-6'>
                                <h4 className='font-semibold text-xl'>5. Modifications to the Service</h4>
                                <p class="ml-8 mt-1 text-gray-500 text-xs">We reserve the right to modify, suspend, or discontinue Taskly at any time without notice. We are not liable for any such modifications or discontinuations.</p>
                            </div>
                            <div className='mb-6'>
                                <h4 className='font-semibold text-xl'>6. Termination</h4>
                                <p class="ml-8 mt-1 text-gray-500 text-xs">We may suspend or terminate your access to Taskly if you violate these Terms or if we decide to discontinue the app. Upon termination, you will no longer have access to your account or data stored on Taskly.</p>
                            </div>
                            <div className='mb-6'>
                                <h4 className='font-semibold text-xl'>7. Limitation of Liability</h4>
                                <p class="ml-8 mt-1 text-gray-500 text-xs">Taskly is provided on an "as is" and "as available" basis. We do not guarantee that the app will be error-free, secure, or uninterrupted. Taskly will not be liable for any direct, indirect, or incidental damages arising from the use of the app.</p>
                            </div>
                            <div className='mb-6'>
                                <h4 className='font-semibold text-xl'>8. Governing Law</h4>
                                <p class="ml-8 mt-1 text-gray-500 text-xs">These Terms are governed by the laws of [Your Country or State]. Any disputes will be resolved in accordance with these laws.</p>
                            </div>
                            <div className='mb-6'>
                                <h4 className='font-semibold text-xl'>9. Contact</h4>
                                <p class="ml-8 mt-1 text-gray-500 text-xs">For questions or concerns regarding these Terms, please contact us at [your email/contact details].</p>
                            </div>

                        </ul>
                    </div>
                </div>

                <div class="flex justify-end items-center mt-8">
                    <form method='dialog'>
                        <button class="btn px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md ">
                            Cancel
                        </button>

                        <button class="btn px-4 py-2 ml-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-md">
                            I agree
                        </button>
                    </form>
                </div>
            </div>
        </dialog>
    )
}
