import React from 'react';
import profilePic from '../assets/profile pic.png'
import './Header.css'
import { Slide } from "react-awesome-reveal";
import { motion } from "motion/react";
import { NavLink } from 'react-router';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText as GSAPSplitText } from "gsap/SplitText";
import SplitText from "../Components/SplitText";
import BlurText from "../Components/BlurText"


const Header = () => {
    // const handleAnimationComplete = () => {
    //     console.log('All letters have animated!');
    // };

    return (
        <div>
            <Slide direction="up" triggerOnce>
                <div className='flex flex-col gap-10 lg:flex-row lg:items-center p-5 header py-45'>


                    <div className='w-full lg:w-2/3'>
                        <SplitText
                            text="Hello! This is"
                            className="text-4xl font-semibold text-center"
                            delay={100}
                            duration={0.6}
                            ease="power3.out"
                            splitType="chars"
                            from={{ opacity: 0, y: 40 }}
                            to={{ opacity: 1, y: 0 }}
                            threshold={0.1}
                            rootMargin="-100px"
                            textAlign="center"
                        />

                        
                        <BlurText
                            text="MASUM MUSFIQUE"
                            delay={300}
                            animateBy="words"
                            direction="top"
                            className="mt-7 font-bold text-5xl md:text-7xl lg:text-9xl"
                        />

                        <h3 className='font-semibold text-xl md:text-5xl mt-3'>Full-stack Web Developer</h3>

                        {/* <h1 className='mt-10 font-bold text-5xl md:text-7xl lg:text-9xl'>
                            MASUM <br />
                            MUSFIQUE
                        </h1> */}

                        <div className='mt-15'>
                            <p>Building fast, responsive web apps from Dhaka, Bangladesh — available for remote work worldwide.</p>
                        </div>

                        <div className='mt-10 flex gap-5'>
                            <NavLink to='/projects' className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                                <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                                <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                    <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                    <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Show Projects</span>
                            </NavLink>

                            <a href="/MasumMusfique_Resume.pdf" download class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-white transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-indigo-600 group">
                                <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                                <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                    <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                    <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Download Resume</span>
                            </a>
                        </div>
                    </div>

                    <div className='w-full lg:w-1/3'>
                        <motion.img src={profilePic}
                            animate={{ y: [100, 150, 100] }}
                            transition={{ duration: 5, repeat: Infinity }}
                            alt="profilePic" className='w-full' />
                    </div>


                </div>
            </Slide>
        </div>
    );
};

export default Header;