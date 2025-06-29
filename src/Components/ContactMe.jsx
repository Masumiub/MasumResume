import React from 'react';
import './ContactMe.css'
import { FaLinkedinIn } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { RxDiscordLogo } from "react-icons/rx";
import { Slide } from "react-awesome-reveal";


const ContactMe = () => {
    return (
        <Slide direction="right" triggerOnce>
        <div className='bg'>
            <div className='p-5 py-45'>
                <div>
                    <h1 className='font-bold text-8xl'>
                        Contact Me
                    </h1>
                </div>
                <div className='flex flex-col-reverse lg:flex-row gap-10 lg:items-stretch  mt-10'>


                    <div className='w-full lg:w-1/2'>
                        
                            <div className='h-full flex p-4 rounded-2xl border-2 border-dashed border-indigo-950 gap-5 items-center backdrop-blur-2xl backdrop-brightness-50'>
                                <div>
                                    <h3 className='text-2xl'>Personal Information:</h3>

                                    <p className='mt-5'>Email: musfiquemasum@gmail.com</p>
                                    <p>Call/whatsApp: 01632225325</p>
                                    <p>Address: 1217/1/A, East Monipur, Mirpur, Dhaka - 16</p>

                                    <p className='mt-5'>Follow me: </p>
                                    <div className='flex mt-2 gap-5'>
                                    <p> <FaLinkedinIn /></p>
                                    <p> <FiGithub /></p>
                                    <p><RxDiscordLogo /></p>
                                    </div>

                                </div>
                            </div>

                        
                    </div>



                    <div className='w-full lg:w-1/2'>
                        
                            <div className='h-full flex p-4 rounded-2xl border-2 border-dashed border-indigo-950 gap-5 items-center backdrop-blur-2xl backdrop-brightness-50'>
                             <fieldset className="fieldset w-full">
                               <input type="email" placeholder="Enter your email" className="input w-full" />
                                <input type="text" placeholder="Enter your subject" className="input w-full" />
                                <textarea className="textarea w-full" placeholder="message"></textarea>
                                <button className="btn btn-primary mt-4">Send Message</button>
                               </fieldset>

                            </div>
                    
                    </div>

                </div>
            </div>
        </div>
        </Slide>
    );
};

export default ContactMe;