import React from 'react';
import './Projects.css'
import { Fade } from "react-awesome-reveal";
import { FaGithub } from "react-icons/fa6";
import { FaGithubAlt } from "react-icons/fa";
import { MdLaptopChromebook } from "react-icons/md";
import { MdFormatListBulleted } from "react-icons/md";
import onlinestudy from '../assets/onlineStudyRoom.png'
import favfreelancer from '../assets/favfreelancer.png'
import jobseekers from '../assets/jobseekers.png'


const Projects = () => {
    return (
        <Fade>
            <div className='p-5 Bg py-20 lg:py-45'>
                <div>
                    <h1 className='font-bold text-5xl md:text-7xl lg:text-8xl'>
                        Projects
                    </h1>
                </div>
                <div className='flex flex-col-reverse lg:flex-row gap-10 lg:items-center mt-10'>
                    <div className='w-full'>

                        {/* project 1 */}
                        <div className='flex flex-col lg:flex-row p-4 rounded-2xl border-2 border-dashed border-indigo-950 gap-5 items-center backdrop-blur-2xl backdrop-brightness-50 '>
                            <div className='w-full lg:w-1/2'>
                                <img src={onlinestudy} alt="banner" className='rounded-2xl' />
                            </div>
                            <div className='w-full lg:w-1/2'>
                                <h1 className='mb-3 text-3xl font-bold'>Online Study Room</h1>
                                <h2 className='leading-8 text-sm'>Online Study Room, a collaborative web application built to enhance online group study experiences. Every registered user becomes a friend, allowing open collaboration, assignment sharing, and peer grading.</h2>

                                <div className='mt-8'>
                                    <h3 className='text-xl font-bold'>Features:</h3>
                                    <ul className='text-sm leading-8  mt-3'>
                                        <li>- Create and share assignments with friends</li>
                                        <li>- Review and grade each other’s submissions</li>
                                        <li>- Track Your Submissions</li>
                                    </ul>
                                </div>

                                <div className='mt-6 flex flex-wrap gap-4'>
                                    <button className='border-1 border-primary px-4 py-2 rounded-full text-xs flex gap-1 bg-indigo-950'><img width="15" height="15" src="https://img.icons8.com/color/48/react-native.png" alt="react-native" />React JS</button>
                                    <button className='border-1 border-primary px-4 py-2 rounded-full text-xs flex gap-1 bg-indigo-950'><img width="15" height="15" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js" />Node JS</button>
                                    <button className='border-1 border-primary px-4 py-2 rounded-full text-xs flex gap-1 bg-indigo-950'><img width="15" height="15" src="https://img.icons8.com/officel/80/express-js.png" alt="express-js" />Express JS</button>
                                    <button className='border-1 border-primary px-4 py-2 rounded-full text-xs flex gap-1 bg-indigo-950'><img width="15" height="15" src="https://img.icons8.com/color/48/firebase.png" alt="firebase" />Firebase</button>
                                </div>


                                <div className='mt-8 flex flex-wrap gap-6'>
                                    <a href="https://github.com/Masumiub/OnlineStudyRoom-Client" target='_blank' className='btn btn-md bg-white text-indigo-500 rounded-md border-b-3 border-indigo-500 hover:bg-indigo-500 hover:text-white'><FaGithub /> Github Client</a>
                                    <a href="https://onlinestudyroom-all.web.app/" target='_blank' className='btn btn-md bg-indigo-500 text-white rounded-md border-b-3 border-indigo-500 hover:bg-white hover:text-indigo-500'><MdLaptopChromebook />Live Link</a>
                                    <a href="https://github.com/Masumiub/OnlineStudyRoom-Server" target='_blank' className='btn btn-md bg-white text-indigo-500 rounded-md border-b-3 border-indigo-500 hover:bg-indigo-500 hover:text-white'><FaGithubAlt />Github Server</a>
                                    <button className='btn btn-md bg-white text-indigo-500 rounded-md border-b-3 border-indigo-500 hover:bg-indigo-500 hover:text-white' onClick={() => document.getElementById('project_1_modal').showModal()}><MdFormatListBulleted />Details</button>
                                </div>

                                <dialog id="project_1_modal" className="modal">
                                    <div className="modal-box rounded-2xl shadow-2xl border-1 border-indigo-900 w-11/12 max-w-5xl">
                                        <h3 className="font-bold text-2xl">Online Study Room</h3>
                                        <div className='max-w-lg mt-3'>
                                            <img src={onlinestudy} alt="banner" className='rounded-2xl' />
                                        </div>
                                        <h2 className='leading-8 text-sm mt-3'>Online Study Room, a collaborative web application built to enhance online group study experiences. Every registered user becomes a friend, allowing open collaboration, assignment sharing, and peer grading.</h2>


                                        <div className='mt-6 flex flex-wrap gap-4'>
                                            <button className='border-1 border-primary px-4 py-2 rounded-full text-xs flex gap-1 bg-indigo-950'><img width="15" height="15" src="https://img.icons8.com/color/48/react-native.png" alt="react-native" />React JS</button>
                                            <button className='border-1 border-primary px-4 py-2 rounded-full text-xs flex gap-1 bg-indigo-950'><img width="15" height="15" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js" />Node JS</button>
                                            <button className='border-1 border-primary px-4 py-2 rounded-full text-xs flex gap-1 bg-indigo-950'><img width="15" height="15" src="https://img.icons8.com/officel/80/express-js.png" alt="express-js" />Express JS</button>
                                            <button className='border-1 border-primary px-4 py-2 rounded-full text-xs flex gap-1 bg-indigo-950'><img width="15" height="15" src="https://img.icons8.com/color/48/firebase.png" alt="firebase" />Firebase</button>
                                        </div>

                                        <div className='mt-8 flex flex-wrap gap-6'>
                                            <a href="https://github.com/Masumiub/OnlineStudyRoom-Client" target='_blank' className='btn btn-md bg-white text-indigo-500 rounded-md border-b-3 border-indigo-500 hover:bg-indigo-500 hover:text-white'>Github Client</a>
                                            <a href="https://onlinestudyroom-all.web.app/" target='_blank' className='btn btn-md bg-indigo-500 text-white rounded-md border-b-3 border-indigo-500 hover:bg-white hover:text-indigo-500'>Live Link</a>
                                            <a href="https://github.com/Masumiub/OnlineStudyRoom-Server" target='_blank' className='btn btn-md bg-white text-indigo-500 rounded-md border-b-3 border-indigo-500 hover:bg-indigo-500 hover:text-white'>Github Server</a>

                                        </div>


                                        <div className='mt-8'>
                                            <h3 className='text-xl font-bold'>Features:</h3>
                                            <ul className='text-sm leading-8  mt-3'>
                                                <li>- Create and share assignments with friends</li>
                                                <li>- Review and grade each other’s submissions</li>
                                                <li>- Track Your Submissions</li>
                                            </ul>
                                        </div>

                                        <div className='mt-8'>
                                            <h3 className='text-xl font-bold'>Challenges & How I Overcame Them:</h3>

                                            <h4 className='mt-3'>1. Firebase JWT Verification:</h4>
                                            <p className='mt-2 text-sm'>One of the main challenges was verifying Firebase JWT tokens securely on the server side. At first, decoding tokens manually caused verification issues.</p>
                                            <p className='mt-2 text-sm'>✅ I solved this by using the Firebase Admin SDK to properly verify and decode tokens, ensuring only authenticated users could access protected routes.</p>

                                            <h4 className='mt-3'>2. Handling Authenticated Requests:</h4>
                                            <p className='mt-2 text-sm'>It was tricky to pass the token from frontend to backend correctly.</p>
                                            <p className='mt-2 text-sm'>✅ I used Axios interceptors to automatically attach the token to all secure API calls, making the flow smooth and secure.</p>
                                        </div>

                                        <div className='mt-8'>
                                            <h3 className='text-xl font-bold'>Future Plans</h3>
                                            <ul className='text-sm leading-8  mt-3'>
                                                <li>- Add real-time collaboration using WebSockets or Firebase Realtime Database</li>
                                                <li>- Implement roles (e.g., student, teacher) for better permission control</li>
                                                <li>- Add commenting and feedback threads on assignment submissions</li>
                                            </ul>
                                        </div>

                                    </div>
                                    <form method="dialog" className="modal-backdrop">
                                        <button>close</button>
                                    </form>
                                </dialog>
                            </div>
                        </div>

                        {/* project 2 */}
                        <div className='flex flex-col lg:flex-row p-4 rounded-2xl border-2 border-dashed border-indigo-950 gap-5 items-center backdrop-blur-2xl backdrop-brightness-50 mt-25'>
                            <div className='w-full lg:w-1/2'>
                                <img src={favfreelancer} alt="banner" className='rounded-2xl' />
                            </div>
                            <div className='w-full lg:w-1/2'>
                                <h1 className='mb-3 text-3xl font-bold'>FavFreelancer</h1>
                                <h2 className='leading-8 text-sm'>FavFreelancer, a full-stack web application that connects freelancers with tasks, allowing users to add, manage, and bid on freelance projects in real-time.</h2>

                                <div className='mt-8'>
                                    <h3 className='text-xl font-bold'>Features:</h3>
                                    <ul className='text-sm leading-8  mt-3'>
                                        <li>- Add / Edit / Delete Tasks – Logged-in users can manage freelance tasks</li>
                                        <li>- Real-Time Bidding System – Tracks bids per task dynamically</li>
                                        <li>- Filtering & Mapping – Smooth task filtering for better UX</li>
                                    </ul>
                                </div>

                                <div className='mt-6 flex flex-wrap gap-4'>
                                    <button className='border-1 border-primary px-4 py-2 rounded-full text-xs flex gap-1 bg-indigo-950'><img width="15" height="15" src="https://img.icons8.com/color/48/react-native.png" alt="react-native" />React JS</button>
                                    <button className='border-1 border-primary px-4 py-2 rounded-full text-xs flex gap-1 bg-indigo-950'><img width="15" height="15" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js" />Node JS</button>
                                    <button className='border-1 border-primary px-4 py-2 rounded-full text-xs flex gap-1 bg-indigo-950'><img width="15" height="15" src="https://img.icons8.com/officel/80/express-js.png" alt="express-js" />Express JS</button>
                                    <button className='border-1 border-primary px-4 py-2 rounded-full text-xs flex gap-1 bg-indigo-950'><img width="15" height="15" src="https://img.icons8.com/color/48/firebase.png" alt="firebase" />Firebase</button>
                                </div>


                                <div className='mt-8 flex flex-wrap gap-6'>
                                    <a href="https://github.com/Masumiub/favFreelancer-Client" target='_blank' className='btn btn-md bg-white text-indigo-500 rounded-md border-b-3 border-indigo-500 hover:bg-indigo-500 hover:text-white'><FaGithub /> Github Client</a>
                                    <a href="https://favfreelancer-client.web.app/" target='_blank' className='btn btn-md bg-indigo-500 text-white rounded-md border-b-3 border-indigo-500 hover:bg-white hover:text-indigo-500'><MdLaptopChromebook />Live Link</a>
                                    <a href="https://github.com/Masumiub/favFreelancer-Server" target='_blank' className='btn btn-md bg-white text-indigo-500 rounded-md border-b-3 border-indigo-500 hover:bg-indigo-500 hover:text-white'><FaGithubAlt />Github Server</a>
                                    <button className='btn btn-md bg-white text-indigo-500 rounded-md border-b-3 border-indigo-500 hover:bg-indigo-500 hover:text-white' onClick={() => document.getElementById('project_2_modal').showModal()}><MdFormatListBulleted />Details</button>
                                </div>
                            </div>

                            <dialog id="project_2_modal" className="modal">
                                <div className="modal-box rounded-2xl shadow-2xl border-1 border-indigo-900 w-11/12 max-w-5xl">
                                    <h3 className="font-bold text-2xl">FavFreelancer</h3>
                                    <div className='max-w-lg mt-3'>
                                        <img src={favfreelancer} alt="banner" className='rounded-2xl' />
                                    </div>
                                    <h2 className='leading-8 text-sm mt-3'>FavFreelancer, a full-stack web application that connects freelancers with tasks, allowing users to add, manage, and bid on freelance projects in real-time.</h2>


                                    <div className='mt-6 flex flex-wrap gap-4'>
                                        <button className='border-1 border-primary px-4 py-2 rounded-full text-xs flex gap-1 bg-indigo-950'><img width="15" height="15" src="https://img.icons8.com/color/48/react-native.png" alt="react-native" />React JS</button>
                                        <button className='border-1 border-primary px-4 py-2 rounded-full text-xs flex gap-1 bg-indigo-950'><img width="15" height="15" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js" />Node JS</button>
                                        <button className='border-1 border-primary px-4 py-2 rounded-full text-xs flex gap-1 bg-indigo-950'><img width="15" height="15" src="https://img.icons8.com/officel/80/express-js.png" alt="express-js" />Express JS</button>
                                        <button className='border-1 border-primary px-4 py-2 rounded-full text-xs flex gap-1 bg-indigo-950'><img width="15" height="15" src="https://img.icons8.com/color/48/firebase.png" alt="firebase" />Firebase</button>
                                    </div>


                                    <div className='mt-8 flex flex-wrap gap-6'>
                                        <a href="https://github.com/Masumiub/favFreelancer-Client" target='_blank' className='btn btn-md bg-white text-indigo-500 rounded-md border-b-3 border-indigo-500 hover:bg-indigo-500 hover:text-white'><FaGithub /> Github Client</a>
                                        <a href="https://favfreelancer-client.web.app/" target='_blank' className='btn btn-md bg-indigo-500 text-white rounded-md border-b-3 border-indigo-500 hover:bg-white hover:text-indigo-500'><MdLaptopChromebook />Live Link</a>
                                        <a href="https://github.com/Masumiub/favFreelancer-Server" target='_blank' className='btn btn-md bg-white text-indigo-500 rounded-md border-b-3 border-indigo-500 hover:bg-indigo-500 hover:text-white'><FaGithubAlt />Github Server</a>
                                    </div>

                                    <div className='mt-8'>
                                        <h3 className='text-xl font-bold'>Features:</h3>
                                        <ul className='text-sm leading-8  mt-3'>
                                            <li>- Add / Edit / Delete Tasks – Logged-in users can manage freelance tasks</li>
                                            <li>- Real-Time Bidding System – Tracks bids per task dynamically</li>
                                            <li>- Filtering & Mapping – Smooth task filtering for better UX</li>
                                        </ul>
                                    </div>

                                    <div className='mt-8'>
                                        <h3 className='text-xl font-bold'>Challenges & How I Overcame Them:</h3>

                                        <h4 className='mt-3'>1. Protecting API Routes:</h4>
                                        <p className='mt-2 text-sm'>Making sure only logged-in users could add or bid on tasks was tricky.</p>
                                        <p className='mt-2 text-sm'>✅ I solved it by verifying Firebase JWT tokens on the server using Firebase Admin SDK.</p>

                                        <h4 className='mt-3'>2. Real-Time Bid Updates:</h4>
                                        <p className='mt-2 text-sm'>Handling bid count updates without refreshing the page was a challenge.</p>
                                        <p className='mt-2 text-sm'>✅ I managed it by refetching data after each bid using React Query's refetch() function for smooth updates.</p>
                                    </div>

                                    <div className='mt-8'>
                                        <h3 className='text-xl font-bold'>Future Plans</h3>
                                        <ul className='text-sm leading-8  mt-3'>
                                            <li>- Add email notifications for bid updates or task acceptance</li>
                                            <li>- Introduce user profiles with bid history and ratings</li>
                                            <li>- Integrate payment gateway for real project workflows</li>
                                        </ul>
                                    </div>

                                </div>
                                <form method="dialog" className="modal-backdrop">
                                    <button>close</button>
                                </form>
                            </dialog>
                        </div>

                        {/* project 3 */}
                        <div className='flex flex-col lg:flex-row p-4 rounded-2xl border-2 border-dashed border-indigo-950 gap-5 items-center backdrop-blur-2xl backdrop-brightness-50 mt-25'>
                            <div className='w-full lg:w-1/2'>
                                <img src={jobseekers} alt="banner" className='rounded-2xl' />
                            </div>
                            <div className='w-full lg:w-1/2'>
                                <h1 className='mb-3 text-3xl font-bold'>Job Seeker</h1>
                                <h2 className='leading-8 text-sm'>Job Seeker, a responsive and intuitive job listing platform designed to help users explore job opportunities across multiple companies — all in one place.</h2>

                                <div className='mt-8'>
                                    <h3 className='text-xl font-bold'>Features:</h3>
                                    <ul className='text-sm leading-8 mt-3'>
                                        <li>- Browse jobs from various companies</li>
                                        <li>- Review job requirements</li>
                                        <li>- Check if they meet qualifications</li>
                                    </ul>
                                </div>

                                <div className='mt-6 flex flex-wrap gap-4'>
                                    <button className='border-1 border-primary px-4 py-2 rounded-full text-xs flex gap-1 bg-indigo-950'><img width="15" height="15" src="https://img.icons8.com/color/48/react-native.png" alt="react-native" />React JS</button>
                                    <button className='border-1 border-primary px-4 py-2 rounded-full text-xs flex gap-1 bg-indigo-950'><img width="15" height="15" src="https://img.icons8.com/color/48/tailwind_css.png" alt="tailwind_css" />Tailwind CSS</button>
                                    <button className='border-1 border-primary px-4 py-2 rounded-full text-xs flex gap-1 bg-indigo-950'><img width="15" height="15" src="https://img.icons8.com/color/48/firebase.png" alt="firebase" />Firebase</button>
                                </div>


                                <div className='mt-8 flex flex-wrap gap-6'>
                                    <a href="https://github.com/Masumiub/jobSeekers" target='_blank' className='btn btn-md bg-white text-indigo-500 rounded-md border-b-3 border-indigo-500 hover:bg-indigo-500 hover:text-white'><FaGithub /> Github</a>
                                    <a href="https://jobseekers-1a20c.web.app/" target='_blank' className='btn btn-md bg-indigo-500 text-white rounded-md border-b-3 border-indigo-500 hover:bg-white hover:text-indigo-500'><MdLaptopChromebook />Live Link</a>
                                    <button className='btn btn-md bg-white text-indigo-500 rounded-md border-b-3 border-indigo-500 hover:bg-indigo-500 hover:text-white' onClick={() => document.getElementById('project_3_modal').showModal()}><MdFormatListBulleted />Details</button>
                                </div>

                            </div>

                            <dialog id="project_3_modal" className="modal shadow-2xl">
                                <div className="modal-box rounded-2xl shadow-2xl border-1 border-indigo-900 w-11/12 max-w-5xl">
                                    <h3 className="font-bold text-2xl">Job Seeker</h3>
                                    <div className='max-w-lg mt-3'>
                                        <img src={jobseekers} alt="banner" className='rounded-2xl' />
                                    </div>
                                    <h2 className='leading-8 text-sm mt-3'>Job Seeker, a responsive and intuitive job listing platform designed to help users explore job opportunities across multiple companies — all in one place.</h2>


                                    <div className='mt-6 flex flex-wrap gap-4'>
                                        <button className='border-1 border-primary px-4 py-2 rounded-full text-xs flex gap-1 bg-indigo-950'><img width="15" height="15" src="https://img.icons8.com/color/48/react-native.png" alt="react-native" />React JS</button>
                                        <button className='border-1 border-primary px-4 py-2 rounded-full text-xs flex gap-1 bg-indigo-950'><img width="15" height="15" src="https://img.icons8.com/color/48/tailwind_css.png" alt="tailwind_css" />Tailwind CSS</button>
                                        <button className='border-1 border-primary px-4 py-2 rounded-full text-xs flex gap-1 bg-indigo-950'><img width="15" height="15" src="https://img.icons8.com/color/48/firebase.png" alt="firebase" />Firebase</button>
                                    </div>
                                    <div className='mt-8 flex flex-wrap gap-6'>
                                        <a href="https://github.com/Masumiub/jobSeekers" target='_blank' className='btn btn-md bg-white text-indigo-500 rounded-md border-b-3 border-indigo-500 hover:bg-indigo-500 hover:text-white'><FaGithub /> Github</a>
                                        <a href="https://jobseekers-1a20c.web.app/" target='_blank' className='btn btn-md bg-indigo-500 text-white rounded-md border-b-3 border-indigo-500 hover:bg-white hover:text-indigo-500'><MdLaptopChromebook />Live Link</a>
                                    </div>

                                    <div className='mt-8'>
                                        <h3 className='text-xl font-bold'>Features:</h3>
                                        <ul className='text-sm leading-8 mt-3'>
                                            <li>- Browse jobs from various companies</li>
                                            <li>- Review job requirements</li>
                                            <li>- Check if they meet qualifications</li>
                                        </ul>
                                    </div>

                                    <div className='mt-8'>
                                        <h3 className='text-xl font-bold'>Challenges & How I Overcame Them:</h3>

                                        <h4 className='mt-3'>1. Secure Login & Route Protection:</h4>
                                        <p className='mt-2 text-sm'>Making sure only logged-in users could access job details was challenging.</p>
                                        <p className='mt-2 text-sm'>✅ I handled this by using Firebase Authentication and protecting routes based on login</p>

                                        <h4 className='mt-3'>2. Managing Fake API Data:</h4>
                                        <p className='mt-2 text-sm'>Displaying and filtering job data from a fake API required clean data handling.</p>
                                        <p className='mt-2 text-sm'>✅ I used React state and filtering logic to keep the UI smooth and responsive.</p>
                                    </div>

                                    <div className='mt-8'>
                                        <h3 className='text-xl font-bold'>Future Plans</h3>
                                        <ul className='text-sm leading-8  mt-3'>
                                            <li>- Add job application submission and tracking</li>
                                            <li>- Implement admin panel for posting and managing job listings</li>
                                            <li>- Enable search by category, location, and company</li>
                                        </ul>
                                    </div>

                                </div>
                                <form method="dialog" className="modal-backdrop">
                                    <button>close</button>
                                </form>
                            </dialog>
                        </div>


                    </div>

                </div>
            </div>
        </Fade>
    );
};

export default Projects;