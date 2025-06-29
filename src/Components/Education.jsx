import React from 'react';
import { Zoom } from "react-awesome-reveal";
import './Education.css'


const Education = () => {
    return (

        <div className='edubg py-45'>
            <div className='p-5'>
                <div>
                    <h1 className='font-bold text-5xl md:text-7xl lg:text-8xl'>
                        Education
                    </h1>
                </div>
                <Zoom>
                <div className='flex flex-col-reverse lg:flex-row gap-10 lg:items-center mt-10'>

                    
                        <div className='w-full lg:w-1/2'>

                            <div className='flex p-4 rounded-2xl border-2 border-dashed border-indigo-950 gap-5 items-center backdrop-blur-2xl backdrop-brightness-50'>
                                <div>
                                    <img src='https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/Jahangirnagar_University_Logo.svg/1200px-Jahangirnagar_University_Logo.svg.png' alt="html" className='bg-white rounded-2xl h-45 w-45 object-cover' />
                                </div>
                                <div className='w-full'>
                                    <h2 className='text-2xl'>Masters</h2>
                                    <h3>M.Sc. in Computer Science & Engineering</h3>

                                    <h4 className='mt-5'>Jahangirnagar University</h4>
                                    <p>Passing Year: 2026</p>
                                </div>
                            </div>


                        </div>



                        <div className='w-full lg:w-1/2'>

                            <div className='flex p-4 rounded-2xl border-2 border-dashed border-indigo-950 gap-5 items-center backdrop-blur-2xl backdrop-brightness-50'>
                                <div>
                                    <img src='https://scontent.fdac24-5.fna.fbcdn.net/v/t39.30808-6/326433143_527873762741016_3934733276324235841_n.png?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=olR-BN5KWwoQ7kNvwFokXGw&_nc_oc=AdlyJbCNqMJLe69v1Kun34BC1PBa6BTOjG9F1Da7tBq0bayOlca4XT2aQxYh0uOxfQA&_nc_zt=23&_nc_ht=scontent.fdac24-5.fna&_nc_gid=Tf0q7uIQVLDEnlnZEVv2cg&oh=00_AfOWBdR1uIPyQCLpxxZXl3jPOj96HwPw-OudtAwjmHa9eA&oe=6865D0A9' alt="iub" className='bg-white rounded-2xl h-45 w-45 object-cover' />
                                </div>
                                <div className='w-full'>
                                    <h2 className='text-2xl'>Undergradate</h2>
                                    <h3>B.Sc. in Computer Science & Engineering</h3>

                                    <h4 className='mt-5'>Independent University, Bangladesh</h4>
                                    <p>CGPA: 3.75 | Passing Year: 2024</p>
                                </div>
                            </div>

                        </div>
                    
                </div>
                </Zoom>
            </div>
        </div>

    );
};

export default Education;