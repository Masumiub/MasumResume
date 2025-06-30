import React from 'react';
import './ContactMe.css'
import { FaLinkedinIn } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { RxDiscordLogo } from "react-icons/rx";
import { Slide } from "react-awesome-reveal";
import { toast } from "react-toastify";
import { IoSend } from "react-icons/io5";
import { MdOutlineAttachEmail } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";

const ContactMe = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        // Submit form manually to Netlify
        const form = e.target;
        const formData = new FormData(form);

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
        })
            .then(() => {
                toast.success("✅ Message sent successfully!");
                form.reset();
            })
            .catch(() => toast.error("❌ Something went wrong. Please try again."));
    };


    return (
        <Slide direction="right" triggerOnce>
            <div className='bg'>
                <div className='p-5 py-20 lg:py-45'>
                    <div>
                        <h1 className='font-bold text-5xl md:text-7xl lg:text-8xl'>
                            Contact Me
                        </h1>
                    </div>
                    <div className='flex flex-col-reverse lg:flex-row gap-10 lg:items-stretch  mt-10'>


                        <div className='w-full lg:w-1/2'>

                            <div className='h-full flex p-7 rounded-2xl border-2 border-dashed border-indigo-950 gap-5 items-center backdrop-blur-2xl backdrop-brightness-50'>
                                <div>
                                    <h3 className='text-2xl'>Personal Information:</h3>

                                    <div className='flex gap-4 mt-5 items-center'>
                                        <div className='p-5 bg-[#220419] rounded-lg'><MdOutlineAttachEmail size={25} /></div>
                                        <div>
                                            <p className='font-bold'>Email</p>
                                            <p>musfiquemasum@gmail.com</p>
                                        </div>
                                    </div>

                                    <div className='flex gap-4 mt-8 items-center'>
                                        <div className='p-5 bg-[#1c0422] rounded-lg'><BiSolidPhoneCall size={25} /></div>
                                        <div>
                                            <p className='font-bold'>Call/WhatsApp</p>
                                            <p>01632225325</p>
                                        </div>
                                    </div>

                                    <div className='flex gap-4 mt-8 items-center'>
                                        <div className='p-5 bg-[#040f22] rounded-lg'><FaLocationDot size={25} /></div>
                                        <div>
                                            <p className='font-bold'>Address</p>
                                            <p>1217/1/A, East Monipur, Mirpur, Dhaka - 16</p>
                                        </div>
                                    </div>

                                    

                                    <p className='mt-8 text-2xl'>Follow me: </p>
                                    <div className='flex mt-2 gap-5'>
                                        <p className='p-3 rounded-full border-1 hover:bg-white'> <a href="https://www.linkedin.com/in/musfique-77-masum/" target="_blank" className='hover:text-black'><FaLinkedinIn size={20} /></a> </p>
                                        <p className='p-3 rounded-full border-1 hover:bg-white'> <a href="https://github.com/Masumiub" target="_blank" className='hover:text-black'><FiGithub size={20} /></a> </p>
                                        <p className='p-3 rounded-full border-1 hover:bg-white'> <a href="https://discord.com/users/masummusfique2789" target="_blank" className='hover:text-black'><RxDiscordLogo size={20} /></a></p>
                                    </div>

                                </div>
                            </div>


                        </div>



                        <div className='w-full lg:w-1/2'>

                            <div className='h-full flex p-7 rounded-2xl border-2 border-dashed border-indigo-950 gap-5 items-center backdrop-blur-2xl backdrop-brightness-50'>

                                <fieldset className="fieldset w-full">

                                    <div>
                                        <h2 className='mb-4 text-2xl font-bold'>Got any Message?</h2>
                                    </div>
                                    <form
                                        name="contact"
                                        method="POST"
                                        data-netlify="true"
                                        className="w-full"
                                        onSubmit={handleSubmit}
                                    >
                                        <input type="hidden" name="form-name" value="contact" />
                                        <p className='text-gray-600 mb-2'>Your Name</p>
                                        <input type="text" name="name" placeholder="Your Name" className="input w-full mb-2 rounded-lg" required />

                                        <p className='text-gray-600 mb-2 mt-4'>Your Email</p>
                                        <input type="email" name="email" placeholder="Your Email" className="input w-full mb-2 rounded-lg" required />

                                        <p className='text-gray-600 mb-2 mt-4'>Your Message</p>
                                        <textarea name="message" placeholder="Your Message" className="textarea w-full mb-2 rounded-lg" required />
                                        <button type="submit" className="btn btn-primary mt-4 w-full rounded-lg"><IoSend />Send Message</button>
                                    </form>
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