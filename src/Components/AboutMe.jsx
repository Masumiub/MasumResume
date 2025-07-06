import React from 'react';
import aboutMe from '../assets/aboutme.png';
import { Fade } from "react-awesome-reveal";
import { IoSettingsSharp } from "react-icons/io5";
import { RiTeamFill } from "react-icons/ri";
import { FaBookOpen } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { RiCodeSSlashLine } from "react-icons/ri";

const AboutMe = () => {
    return (
        <div>
            <Fade>
                <div className='flex flex-col-reverse lg:flex-row gap-10 lg:items-center p-5 py-10 lg:py-45'>

                    <div className='w-full lg:w-1/3'>
                        <img src={aboutMe} alt="aboutMe" />

                        <div className='p-8 border-2 border-gray-900 mt-5 rounded-2xl'>
                            <h3 className='text-xl'>What I Enjoy ❤️</h3>

                            <div className='mt-5 leading-8'>
                                <p>⚙️ Learning New Technologies</p>
                                <p>🤝 Building Strong Client Relationships</p>
                                <p>📚 Staying updated with Latest Technologies</p>
                            </div>
                        </div>
                    </div>


                    <div className='w-full lg:w-2/3'>
                        <h1 className='font-bold text-5xl md:text-7xl lg:text-8xl'>
                            About Me
                        </h1>

                        <div className='flex flex-col md:flex-row my-5 gap-8'>
                            <div className='w-full md:w-2/12'>
                                <h3 className="text-2xl font-semibold"> <RiCodeSSlashLine /> Journey</h3>
                            </div>


                            <div className='w-full md:w-10/12'>
                                <ul className="timeline timeline-snap-icon timeline-compact timeline-vertical">

                                    <li>
                                        <hr />
                                        <div className="timeline-middle">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                className="h-5 w-5"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <div className="timeline-end mb-10">
                                            <time className="text-sm bg-purple-950 border-1 border-purple-600 rounded-lg px-4 py-1">May 2019</time>
                                            <div className="text-lg font-black mt-2">Started Learning C++, Java</div>
                                        </div>
                                        <hr />
                                    </li>
                                    <li>
                                        <hr />
                                        <div className="timeline-middle">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                className="h-5 w-5"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <div className="timeline-end mb-10">
                                            <time className="text-sm bg-purple-950 border-1 border-purple-600 rounded-lg px-4 py-1">June 2020</time>
                                            <div className="text-lg font-black mt-2">Explored HTML5, CSS3, JavaScript, PHP</div>

                                        </div>
                                        <hr />
                                    </li>
                                    <li>
                                        <hr />
                                        <div className="timeline-middle">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                className="h-5 w-5"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <div className="timeline-end mb-10">
                                            <time className="text-sm bg-purple-950 border-1 border-purple-600 rounded-lg px-4 py-1">June 2025</time>
                                            <div className="text-lg font-black mt-2">Worked with React JS, Node JS, Express JS, Tailwind & Mongodb</div>

                                        </div>
                                        <hr />
                                    </li>
                                </ul>
                            </div>
                        </div>



                        <p className='mt-4 leading-8'>Hi! I'm Masum Musfique — a passionate and detail-oriented Full-Stack Web Developer based in Dhaka, Bangladesh.
                            I truly enjoy building clean, responsive user interfaces that not only look good but also feel intuitive.
                            I’ve worked on a range of personal and collaborative projects using React, JavaScript, DaisyUI, and Firebase Authentication.
                            I’m also confident working with backend technologies like Node.js, Express.js, and MongoDB, giving me a full-picture understanding of modern web development.

                            <br />
                            <br />
                            Outside of programming, I have a creative side — I love painting and graphic design. These hobbies help me think visually and bring a strong sense of aesthetics to my UI work. Whether it's designing a smooth user flow or selecting the perfect color palette, I enjoy blending creativity with code.

                            <br />
                            <br /> </p>

                        {/* I strongly value clean, maintainable code, continuous learning, and effective teamwork — I believe great software comes from strong collaboration and attention to detail.
                            My dream projects involve building modern dashboards, creative UI experiences, and intuitive e-commerce platforms that offer real value to users.</p> */}

                        <div className='flex flex-wrap gap-5'>
                            <button className='btn bg-purple-950 border-1 border-purple-600 rounded-lg'><IoSettingsSharp />Problem Solver</button>
                            <button className='btn bg-indigo-950 border-1 border-indigo-600 rounded-lg'><RiTeamFill />Team Player</button>
                            <button className='btn bg-blue-950 border-1 border-blue-600 rounded-lg'><FaBookOpen />Fast Learner</button>
                            <button className='btn bg-pink-950 border-1 border-pink-600 rounded-lg'><FaCode />Clean Code</button>
                        </div>
                    </div>

                </div>
            </Fade>
        </div>
    );
};

export default AboutMe;