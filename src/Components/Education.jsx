import React from 'react';
import { Slide } from "react-awesome-reveal";
import './Education.css'
import { FaBookReader } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";

const Education = () => {
    return (

        <div className='edubg py-20 lg:py-45'>
            <div className='p-5'>
                <div>
                    <h1 className='font-bold text-5xl md:text-7xl lg:text-8xl'>
                        Education
                    </h1>
                </div>

                <div className='flex flex-col md:flex-row my-5 gap-8'>
                    <div className='w-full md:w-2/12'>
                    <FaGraduationCap size={25}/>
                        <h3 className="text-2xl font-semibold">Journey</h3>
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
                                    <time className="text-sm bg-purple-950 border-1 border-purple-600 rounded-lg px-4 py-1">2025 - 2026</time>
                                    <div>
                                        <img src='https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/Jahangirnagar_University_Logo.svg/1200px-Jahangirnagar_University_Logo.svg.png' alt="html" className='bg-white rounded-2xl h-45 w-35 object-cover mt-5' />
                                    </div>
                                    <div className="text-lg font-black mt-2">M.Sc. in Computer Science & Engineering</div>
                                    <p className='mt-4'>
                                        Jahangirnagar University
                                    </p>

                                    <p className='leading-8 mt-3 text-sm'>Pursuing advanced studies in algorithms, software architecture, and intelligent systems. This program is strengthening my theoretical foundation and preparing me for more complex problem-solving in real-world software development.</p>
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
                                <div className="timeline-end md:mb-10">
                                    <time className="text-sm bg-purple-950 border-1 border-purple-600 rounded-lg px-4 py-1">2019 - 2024</time>
                                    <div>
                                        <img src='https://www.eduopinions.com/wp-content/uploads/2020/06/Independent-University-Bangladesh-logo.jpg' alt="html" className='bg-white rounded-2xl h-45 w-35 object-cover mt-5' />
                                    </div>
                                    <div className="text-lg font-black mt-2">B.Sc. in Computer Science & Engineering</div>
                                    <p className='mt-4'>
                                        Independent University, Bangladesh
                                    </p>

                                    <p className='leading-8 mt-3 text-sm'>Completed a well-rounded undergraduate program focused on programming, data structures, databases, and web development. Built a strong base in both theoretical computer science and practical application development.</p>
                                    <button className='btn btn-sm bg-purple-950 border-1 border-purple-600 rounded-lg mt-4 w-30'>CGPA: 3.75</button>
                                </div>
                                <hr />
                            </li>
                        </ul>
                    </div>
                </div>






            </div>
        </div>

    );
};

export default Education;