import React from 'react';
import './Projects.css'
import { Fade } from "react-awesome-reveal";

const Projects = () => {
    return (
        <Fade>
        <div className='p-5 Bg py-45'>
            <div>
                <h1 className='font-bold text-8xl'>
                    Projects
                </h1>
            </div>
            <div className='flex flex-col-reverse lg:flex-row gap-10 lg:items-center mt-10'>
                <div className='w-full'>

                    {/* project 1 */}
                    <div className='flex flex-col lg:flex-row p-4 rounded-2xl border-2 border-dashed border-indigo-950 gap-5 items-center backdrop-blur-2xl backdrop-brightness-50 '>
                        <div className='w-full lg:w-1/2'>
                            <img src='https://media.licdn.com/dms/image/v2/D5622AQE9ONqU6yC1sg/feedshare-shrink_2048_1536/B56ZedZQYqHoAo-/0/1750692336464?e=1753920000&v=beta&t=vR66C545Yx_FaowQ6VoHmuDNbFN0UxS4FZy_vYtGC6A' alt="banner" className='rounded-2xl' />
                        </div>
                        <div className='w-full lg:w-1/2'>
                            <h1 className='mb-3 text-3xl font-bold'>Online Study Room</h1>
                            <h2 className=''>Online Study Room, a collaborative web application built to enhance online group study experiences. Every registered user becomes a friend, allowing open collaboration, assignment sharing, and peer grading.</h2>

                            <div className='mt-4 '>
                                <h3 className='text-xl'>Features:</h3>
                                <ul className='text-sm '>
                                    <li>- Create and share assignments with friends</li>
                                    <li>- Review and grade each other’s submissions</li>
                                    <li>- Track Your Submissions</li>
                                </ul>
                            </div>

                            <div className='mt-3 flex flex-wrap gap-4'>
                                <button className='border-1 border-primary px-4 rounded-full text-xs'>React JS</button> <button className='border-1 border-primary px-4 rounded-full text-xs'>Node JS</button> <button className='border-1 border-primary px-4 rounded-full text-xs'>Express JS</button> <button className='border-1 border-primary px-4 rounded-full text-xs'>Firebase</button>
                            </div>


                            <div className='mt-8 flex gap-6'>
                                <a href="https://github.com/Masumiub/OnlineStudyRoom-Client" target='_blank' class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                                    <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                                    <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                        <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </span>
                                    <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                        <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </span>
                                    <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Github Client</span>
                                </a>

                                <a href="https://onlinestudyroom-all.web.app/" target='_blank' class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-white transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-indigo-600 group">
                                    <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                                    <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                        <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </span>
                                    <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                        <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </span>
                                    <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Live Link</span>
                                </a>

                                <a href="https://github.com/Masumiub/OnlineStudyRoom-Server" target='_blank' class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                                    <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                                    <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                        <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </span>
                                    <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                        <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </span>
                                    <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Github Server</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* project 2 */}
                    <div className='flex flex-col lg:flex-row p-4 rounded-2xl border-2 border-dashed border-indigo-950 gap-5 items-center backdrop-blur-2xl backdrop-brightness-50 mt-25'>
                        <div className='w-full lg:w-1/2'>
                            <img src='https://media.licdn.com/dms/image/v2/D5622AQFwRFcRQ_YeCg/feedshare-shrink_2048_1536/B56ZedQxu8HoAw-/0/1750690112441?e=1753920000&v=beta&t=VQyhuzuIFUtlX_bvg0q4ihh60q7TmszbT57VYUPrpYk' alt="banner" className='rounded-2xl' />
                        </div>
                        <div className='w-full lg:w-1/2'>
                            <h1 className='mb-3 text-3xl font-bold'>FavFreelancer</h1>
                            <h2 className=''>FavFreelancer, a full-stack web application that connects freelancers with tasks, allowing users to add, manage, and bid on freelance projects in real-time.</h2>

                            <div className='mt-4 '>
                                <h3 className='text-xl'>Features:</h3>
                                <ul className='text-sm'>
                                    <li>- Add / Edit / Delete Tasks – Logged-in users can manage freelance tasks</li>
                                    <li>- Real-Time Bidding System – Tracks bids per task dynamically</li>
                                    <li>- Filtering & Mapping – Smooth task filtering for better UX</li>
                                </ul>
                            </div>

                            <div className='mt-3 flex flex-wrap gap-4'>
                                <button className='border-1 border-primary px-4 rounded-full text-xs'>React JS</button> <button className='border-1 border-primary px-4 rounded-full text-xs'>Node JS</button> <button className='border-1 border-primary px-4 rounded-full text-xs'>Express JS</button> <button className='border-1 border-primary px-4 rounded-full text-xs'>Firebase</button>
                            </div>


                            <div className='mt-8 flex gap-6'>
                                <a href="https://github.com/Masumiub/favFreelancer-Client" target='_blank' class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                                    <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                                    <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                        <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </span>
                                    <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                        <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </span>
                                    <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Github Client</span>
                                </a>

                                <a href="https://favfreelancer-client.web.app/" target='_blank' class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-white transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-indigo-600 group">
                                    <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                                    <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                        <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </span>
                                    <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                        <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </span>
                                    <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Live Link</span>
                                </a>

                                <a href="https://github.com/Masumiub/favFreelancer-Server" target='_blank' class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                                    <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                                    <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                        <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </span>
                                    <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                        <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </span>
                                    <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Github Server</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* project 3 */}
                    <div className='flex flex-col lg:flex-row p-4 rounded-2xl border-2 border-dashed border-indigo-950 gap-5 items-center backdrop-blur-2xl backdrop-brightness-50 mt-25'>
                        <div className='w-full lg:w-1/2'>
                            <img src='https://media.licdn.com/dms/image/v2/D5622AQE6N91yYJuSzQ/feedshare-shrink_2048_1536/B56Zeby6jIGoAs-/0/1750665507219?e=1753920000&v=beta&t=-qlTRH8EH4_SSlt6vM45QiMy6jo_ja01Z1zZVHXKxmo' alt="banner" className='rounded-2xl' />
                        </div>
                        <div className='w-full lg:w-1/2'>
                            <h1 className='mb-3 text-3xl font-bold'>Job Seeker</h1>
                            <h2 className=''>Job Seeker, a responsive and intuitive job listing platform designed to help users explore job opportunities across multiple companies — all in one place.</h2>

                            <div className='mt-4 '>
                                <h3 className='text-xl'>Features:</h3>
                                <ul className='text-sm'>
                                    <li>- Browse jobs from various companies</li>
                                    <li>- Review job requirements</li>
                                    <li>- Check if they meet qualifications</li>
                                </ul>
                            </div>

                            <div className='mt-3 flex flex-wrap gap-4'>
                                <button className='border-1 border-primary px-4 rounded-full text-xs'>React JS</button>  <button className='border-1 border-primary px-4 rounded-full text-xs'>Tailwind CSS</button> <button className='border-1 border-primary px-4 rounded-full text-xs'>Firebase</button>
                            </div>


                            <div className='mt-8 flex gap-6'>
                                <a href="https://github.com/Masumiub/jobSeekers" target='_blank' class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                                    <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                                    <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                        <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </span>
                                    <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                        <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </span>
                                    <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Github</span>
                                </a>

                                <a href="https://jobseekers-1a20c.web.app/" target='_blank' class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-white transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-indigo-600 group">
                                    <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                                    <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                        <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </span>
                                    <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                        <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </span>
                                    <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Live Link</span>
                                </a>

                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
        </Fade>
    );
};

export default Projects;