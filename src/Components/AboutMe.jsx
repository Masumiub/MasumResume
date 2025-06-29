import React from 'react';
import aboutMe from '../assets/aboutme.png';
import { Fade } from "react-awesome-reveal";


const AboutMe = () => {
    return (
        <div>
            <Fade>
            <div className='flex flex-col-reverse lg:flex-row gap-10 lg:items-center p-5 py-45'>
                
                    <div className='w-full lg:w-1/3'>
                        <img src={aboutMe} alt="aboutMe" />
                    </div>


                    <div className='w-full lg:w-2/3'>
                        <h1 className='font-bold text-5xl md:text-7xl lg:text-8xl'>
                            About Me
                        </h1>
                        <p className='mt-10 leading-8'>Hi! I'm a driven and detail-oriented Frontend Developer with hands-on experience in building responsive and dynamic web applications using React.js, Tailwind CSS, DaisyUI, and JavaScript. I’m passionate about creating clean, user-friendly interfaces that deliver great user experiences.
                        
                        </p>

                        <p className='mt-4 leading-8'>I bring a solid foundation in HTML, CSS, and modern JavaScript frameworks, along with backend understanding using Node.js, Express.js, and MongoDB. I'm also comfortable working with tools like Firebase Authentication, GitHub, and Next.js, and have a working knowledge of PHP, C++, Java, and Python
                        </p>

                        <p className='mt-4 leading-8'>I’m actively seeking opportunities as a Junior Frontend Developer or React.js Developer, where I can grow, contribute to real-world projects, and be part of a collaborative team.</p>
                    </div>
                
            </div>
            </Fade>
        </div>
    );
};

export default AboutMe;