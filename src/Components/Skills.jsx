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
                                <div className='flex justify-between'>
                                <h2>HTML5</h2> 
                                <p>95%</p>
                                </div>
                                <progress className="progress bg-white progress-primary rounded-2xl" value="95" max="100"></progress>
                            </div>
                        </div>

                        <div className='flex p-4 rounded-2xl border-2 border-dashed border-indigo-950 gap-5 items-center mt-8 backdrop-blur-2xl backdrop-brightness-50'>
                            <div>
                                <img src='https://skillicons.dev/icons?i=css' alt="css" />
                            </div>
                            <div className='w-full'>

                                <div className='flex justify-between'>
                                    <h2>CSS3</h2>
                                    <p>92%</p>
                                </div>
                            
                                <progress className="progress bg-white progress-primary rounded-2xl" value="92" max="100"></progress>
                            </div>
                        </div>

                        <div className='flex p-4 rounded-2xl border-2 border-dashed border-indigo-950 gap-5 items-center mt-8 backdrop-blur-2xl backdrop-brightness-50'>
                            <div>
                                <img src='https://skillicons.dev/icons?i=js' alt="js" />
                            </div>
                            <div className='w-full'>

                                <div className='flex justify-between'>
                                    <h2>JavaScript</h2>
                                    <p>87%</p>
                                </div>
                                
                                <progress className="progress bg-white progress-primary rounded-2xl" value="87" max="100"></progress>
                            </div>
                        </div>

                        <div className='flex p-4 rounded-2xl border-2 border-dashed border-indigo-950 gap-5 items-center mt-8 backdrop-blur-2xl backdrop-brightness-50'>
                            <div>
                                <img src='https://skillicons.dev/icons?i=react' alt="react" />
                            </div>
                            <div className='w-full'>
                                <div className='flex justify-between'>
                                    <h2>React JS</h2>
                                    <p>82%</p>
                                </div>
                                
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
                             <div className='flex justify-between'>
                                    <h2>Express JS</h2>
                                    <p>82%</p>
                                </div>
                                
                                <progress className="progress bg-white progress-primary rounded-2xl" value="82" max="100"></progress>
                            </div>
                        </div>

                        <div className='flex p-4 rounded-2xl border-2 border-dashed border-indigo-950 gap-5 items-center mt-8 backdrop-blur-2xl backdrop-brightness-50'>
                            <div>
                                <img src='https://skillicons.dev/icons?i=mongodb' alt="mongodb" />
                            </div>
                            <div className='w-full'>
                                <div className='flex justify-between'>
                                    <h2>Mongodb</h2>
                                    <p>76%</p>
                                </div>

                                <progress className="progress bg-white progress-primary rounded-2xl" value="76" max="100"></progress>
                            </div>
                        </div>

                        <div className='flex p-4 rounded-2xl border-2 border-dashed border-indigo-950 gap-5 items-center mt-8 backdrop-blur-2xl backdrop-brightness-50'>
                            <div>
                                <img src='https://skillicons.dev/icons?i=nodejs' alt="nodejs" />
                            </div>
                            <div className='w-full'>
                                 <div className='flex justify-between'>
                                    <h2>Node JS</h2>
                                    <p>85%</p>
                                </div>
                                
                                <progress className="progress bg-white progress-primary rounded-2xl" value="85" max="100"></progress>
                            </div>
                        </div>

                        <div className='flex p-4 rounded-2xl border-2 border-dashed border-indigo-950 gap-5 items-center mt-8 backdrop-blur-2xl backdrop-brightness-50'>
                            <div>
                                <img src='https://skillicons.dev/icons?i=firebase' alt="firebase" />
                            </div>
                            <div className='w-full'>

                                <div className='flex justify-between'>
                                   <h2>Firebase</h2>
                                    <p>89%</p>
                                </div>

                                
                                <progress className="progress bg-white progress-primary rounded-2xl" value="89" max="100"></progress>
                            </div>
                        </div>



                    </div>

                    <div className='w-full lg:w-1/2'>

                        <div>
                            <h2 className='mb-5 font-bold text-3xl'>Tools & Platforms</h2>
                        </div>
                        <div className='flex p-4 rounded-2xl border-2 border-dashed border-indigo-950 gap-5 items-center backdrop-blur-2xl backdrop-brightness-50'>
                            <div>
                                <img width="48" height="48" src="https://img.icons8.com/color/48/git.png" alt="git"/>
                            </div>
                            <div className='w-full'>
                             <div className='flex justify-between'>
                                    <h2>Git</h2>
                                    <p>82%</p>
                                </div>
                                
                                <progress className="progress bg-white progress-primary rounded-2xl" value="82" max="100"></progress>
                            </div>
                        </div>

                        <div className='flex p-4 rounded-2xl border-2 border-dashed border-indigo-950 gap-5 items-center mt-8 backdrop-blur-2xl backdrop-brightness-50'>
                            <div>
                                <img width="48" height="48" src="https://img.icons8.com/color-glass/48/github--v1.png" alt="github--v1"/>
                            </div>
                            <div className='w-full'>
                                <div className='flex justify-between'>
                                    <h2>Github</h2>
                                    <p>76%</p>
                                </div>

                                <progress className="progress bg-white progress-primary rounded-2xl" value="76" max="100"></progress>
                            </div>
                        </div>

                        <div className='flex p-4 rounded-2xl border-2 border-dashed border-indigo-950 gap-5 items-center mt-8 backdrop-blur-2xl backdrop-brightness-50'>
                            <div>
                                <img width="48" height="48" src="https://img.icons8.com/color/48/stripe.png" alt="stripe"/>
                            </div>
                            <div className='w-full'>
                                 <div className='flex justify-between'>
                                    <h2>stripe</h2>
                                    <p>85%</p>
                                </div>
                                
                                <progress className="progress bg-white progress-primary rounded-2xl" value="85" max="100"></progress>
                            </div>
                        </div>

                        <div className='flex p-4 rounded-2xl border-2 border-dashed border-indigo-950 gap-5 items-center mt-8 backdrop-blur-2xl backdrop-brightness-50'>
                            <div>
                                <img width="48" height="48" src="https://img.icons8.com/color-glass/48/vercel.png" alt="vercel"/>
                            </div>
                            <div className='w-full'>

                                <div className='flex justify-between'>
                                   <h2>Vercel</h2>
                                    <p>89%</p>
                                </div>

                                
                                <progress className="progress bg-white progress-primary rounded-2xl" value="89" max="100"></progress>
                            </div>
                        </div>



                    </div>


                </div>

                <div className='mt-10'>
                    <div>
                        <h3 className='text-2xl'>Additional Knowledge</h3>
                    </div>

                    <div className='flex flex-wrap gap-5 mt-5'>
                        <button className='btn btn-outline rounded-full backdrop-blur-2xl backdrop-brightness-50'>Axios/TanStack</button>
                        <button className='btn btn-outline rounded-full backdrop-blur-2xl backdrop-brightness-50'>Tailwind CSS</button>
                        <button className='btn btn-outline rounded-full backdrop-blur-2xl backdrop-brightness-50'>React Router</button>
                        <button className='btn btn-outline rounded-full backdrop-blur-2xl backdrop-brightness-50'>JWT</button>
                        <button className='btn btn-outline rounded-full backdrop-blur-2xl backdrop-brightness-50'>VS Code</button>
                        <button className='btn btn-outline rounded-full backdrop-blur-2xl backdrop-brightness-50'>Postman</button>
                        <button className='btn btn-outline rounded-full backdrop-blur-2xl backdrop-brightness-50'>Rest APIs</button>
                        <button className='btn btn-outline rounded-full backdrop-blur-2xl backdrop-brightness-50'>ES6+</button>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default Skills;