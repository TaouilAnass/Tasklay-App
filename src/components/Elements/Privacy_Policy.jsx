import React from 'react'
import Logo from '../Img/logo-2.png'
export default function Privacy_Policy() {
  return (
    <dialog id="Privacy Policy" className="modal modal-box w-1/4 rounded-lg ">
            <div class="flex flex-col p-5 rounded-lg shadow bg-white dark:bg-gray-800 dark:text-white">
                <div class="flex">
                    <div>
                        <svg class="mt-0.5 w-6 h-6 fill-current text-purple-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></svg>
                    </div>

                    <div class="ml-3">
                        <h2 class="font-semibold text-gray-800 flex items-center dark:text-white"><img src={Logo} alt='Logo' className='w-24' /> - Privacy Policy</h2>
                        <ul className='scrolling overflow-auto h-56 p-8'>
                            <div className='mb-6'>
                                <h4 className=' font-semibold text-xl'>1. Information We Collect</h4>
                                <ul className='ml-5'>
                                    <li className='ml-8 mt-1 text-gray-500 text-xs list-disc'><span className='text-sm font-semibold text-gray-800 dark:text-white'>Personal Information :</span> If you create an account, we may collect personal information such as your name and email address.</li>
                                    <li className='ml-8 mt-1 text-gray-500 text-xs list-disc'><span className='text-sm font-semibold text-gray-800 dark:text-white '>Usage Data :</span> We may collect non-personal information such as how you use Taskly, your device type, and performance metrics to improve the service.</li>
                                    <li className='ml-8 mt-1 text-gray-500 text-xs list-disc'><span className='text-sm font-semibold text-gray-800 dark:text-white'>Cookies :</span> We may use cookies to enhance your user experience, such as remembering your login details.</li>
                                </ul>
                            </div>
                            <div className='mb-6'>
                                <h4 className=' font-semibold text-xl'>2. How We Use Your Information</h4>
                                <p class="ml-8 mt-1 text-gray-500 text-xs">We use the information we collect to:</p>
                                <ul className='ml-5'>
                                    <li className='ml-8 mt-1 text-gray-500 text-xs list-disc'>Provide and improve Taskly.</li>
                                    <li className='ml-8 mt-1 text-gray-500 text-xs list-disc'>Personalize your experience based on your preferences.</li>
                                    <li className='ml-8 mt-1 text-gray-500 text-xs list-disc'>Respond to user support requests.</li>
                                    <li className='ml-8 mt-1 text-gray-500 text-xs list-disc'>Analyze app performance and usage.</li>
                                </ul>
                                <p class="ml-8 mt-1 text-gray-500 text-xs">We will not sell or share your personal information with third parties without your consent, except as required by law.</p>
                            </div>
                            <div className='mb-6'>
                                <h4 className=' font-semibold text-xl'>3. Data Security</h4>
                                <p class="ml-8 mt-1 text-gray-500 text-xs">We take data security seriously and use industry-standard measures to protect your information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
                            </div>
                            <div className='mb-6'>
                                <h4 className=' font-semibold text-xl'>4. Third-Party Services</h4>
                                <p class="ml-8 mt-1 text-gray-500 text-xs">Taskly may integrate with third-party services (e.g., authentication services or analytics tools). These services have their own privacy policies, and we are not responsible for how they handle your data.</p>
                            </div>
                            <div className='mb-6'>
                                <h4 className='font-semibold text-xl'>5. User Data and Retention</h4>
                                <p class="ml-8 mt-1 text-gray-500 text-xs">If you create an account, your data (tasks, profile information) will be stored securely. You can request to delete your account and all associated data at any time by contacting us.</p>
                            </div>
                            <div className='mb-6'>
                                <h4 className='font-semibold text-xl'>6. Children’s Privacy</h4>
                                <p class="ml-8 mt-1 text-gray-500 text-xs">askly is not intended for children under the age of 13. We do not knowingly collect personal information from children. If we discover that we have collected information from a child, we will delete it immediately.</p>
                            </div>
                            <div className='mb-6'>
                                <h4 className='font-semibold text-xl'>7. Changes to this Privacy Policy</h4>
                                <p class="ml-8 mt-1 text-gray-500 text-xs">We may update this Privacy Policy from time to time. Any changes will be posted on this page, and by continuing to use Taskly, you agree to the updated policy.</p>
                            </div>
                            <div className='mb-6'>
                                <h4 className='font-semibold text-xl'>8. Contact</h4>
                                <p class="ml-8 mt-1 text-gray-500 text-xs">For questions or concerns regarding this Privacy Policy, please contact us at [your email/contact details].</p>
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
