import React from 'react';
import './Skills.css'
import { Fade } from "react-awesome-reveal";


const Skills = () => {
    return (
        <Fade>
            <div className='p-5 skillBg py-20 lg:py-45'>
                <div>
                    <h1 className='font-bold text-5xl md:text-7xl lg:text-8xl'>
                        Skills
                    </h1>
                </div>
                <div className='flex flex-col-reverse lg:flex-row gap-10 lg:items-center mt-10'>
                    <div className='w-full lg:w-1/2'>

                        <div>
                            <h2 className='mb-5 font-bold text-3xl'>Frontend Development</h2>
                        </div>
                        <div className='flex p-4 rounded-2xl border-2 border-dashed border-indigo-950 gap-5 items-center backdrop-blur-2xl backdrop-brightness-50'>
                            <div>
                                <img src='https://skillicons.dev/icons?i=html' alt="html" />
                            </div>
                            <div className='w-full'>
                                <h2>HTML5</h2>
                                <progress className="progress bg-white progress-primary rounded-2xl" value="95" max="100"></progress>
                            </div>
                        </div>

                        <div className='flex p-4 rounded-2xl border-2 border-dashed border-indigo-950 gap-5 items-center mt-8 backdrop-blur-2xl backdrop-brightness-50'>
                            <div>
                                <img src='https://skillicons.dev/icons?i=css' alt="css" />
                            </div>
                            <div className='w-full'>
                                <h2>CSS3</h2>
                                <progress className="progress bg-white progress-primary rounded-2xl" value="92" max="100"></progress>
                            </div>
                        </div>

                        <div className='flex p-4 rounded-2xl border-2 border-dashed border-indigo-950 gap-5 items-center mt-8 backdrop-blur-2xl backdrop-brightness-50'>
                            <div>
                                <img src='https://skillicons.dev/icons?i=js' alt="js" />
                            </div>
                            <div className='w-full'>
                                <h2>JavaScript</h2>
                                <progress className="progress bg-white progress-primary rounded-2xl" value="87" max="100"></progress>
                            </div>
                        </div>

                        <div className='flex p-4 rounded-2xl border-2 border-dashed border-indigo-950 gap-5 items-center mt-8 backdrop-blur-2xl backdrop-brightness-50'>
                            <div>
                                <img src='https://skillicons.dev/icons?i=react' alt="react" />
                            </div>
                            <div className='w-full'>
                                <h2>React JS</h2>
                                <progress className="progress bg-white progress-primary rounded-2xl" value="82" max="100"></progress>
                            </div>
                        </div>




                    </div>

                    <div className='w-full lg:w-1/2'>

                        <div>
                            <h2 className='mb-5 font-bold text-3xl'>Backend Development</h2>
                        </div>
                        <div className='flex p-4 rounded-2xl border-2 border-dashed border-indigo-950 gap-5 items-center backdrop-blur-2xl backdrop-brightness-50'>
                            <div>
                                <img src='https://skillicons.dev/icons?i=express' alt="express" />
                            </div>
                            <div className='w-full'>
                                <h2>Express JS</h2>
                                <progress className="progress bg-white progress-primary rounded-2xl" value="82" max="100"></progress>
                            </div>
                        </div>

                        <div className='flex p-4 rounded-2xl border-2 border-dashed border-indigo-950 gap-5 items-center mt-8 backdrop-blur-2xl backdrop-brightness-50'>
                            <div>
                                <img src='https://skillicons.dev/icons?i=mongodb' alt="mongodb" />
                            </div>
                            <div className='w-full'>
                                <h2>Mongodb</h2>
                                <progress className="progress bg-white progress-primary rounded-2xl" value="76" max="100"></progress>
                            </div>
                        </div>

                        <div className='flex p-4 rounded-2xl border-2 border-dashed border-indigo-950 gap-5 items-center mt-8 backdrop-blur-2xl backdrop-brightness-50'>
                            <div>
                                <img src='https://skillicons.dev/icons?i=nodejs' alt="nodejs" />
                            </div>
                            <div className='w-full'>
                                <h2>Node JS</h2>
                                <progress className="progress bg-white progress-primary rounded-2xl" value="85" max="100"></progress>
                            </div>
                        </div>

                        <div className='flex p-4 rounded-2xl border-2 border-dashed border-indigo-950 gap-5 items-center mt-8 backdrop-blur-2xl backdrop-brightness-50'>
                            <div>
                                <img src='https://skillicons.dev/icons?i=firebase' alt="firebase" />
                            </div>
                            <div className='w-full'>
                                <h2>Firebase</h2>
                                <progress className="progress bg-white progress-primary rounded-2xl" value="89" max="100"></progress>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default Skills;