import React from 'react';
import './ContactMe.css'
import { FaLinkedinIn } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { RxDiscordLogo } from "react-icons/rx";
import { Slide } from "react-awesome-reveal";
import { toast } from "react-toastify";

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
                <div className='p-5 py-45'>
                    <div>
                        <h1 className='font-bold text-5xl md:text-7xl lg:text-8xl'>
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
                                        <p> <a href="https://www.linkedin.com/in/musfique-77-masum/" target="_blank"><FaLinkedinIn size={20} /></a> </p>
                                        <p> <a href="https://github.com/Masumiub" target="_blank"><FiGithub size={20}  /></a> </p>
                                        <p> <a href="https://discord.com/users/masummusfique2789" target="_blank"><RxDiscordLogo size={20}/></a></p>
                                    </div>

                                </div>
                            </div>


                        </div>



                        <div className='w-full lg:w-1/2'>

                            <div className='h-full flex p-4 rounded-2xl border-2 border-dashed border-indigo-950 gap-5 items-center backdrop-blur-2xl backdrop-brightness-50'>
                                <fieldset className="fieldset w-full">
                                    <form
                                        name="contact"
                                        method="POST"
                                        data-netlify="true"
                                        className="w-full"
                                        onSubmit={handleSubmit}
                                    >
                                        <input type="hidden" name="form-name" value="contact" />

                                        <input type="text" name="name" placeholder="Your Name" className="input w-full mb-2" required />
                                        <input type="email" name="email" placeholder="Your Email" className="input w-full mb-2" required />
                                        <textarea name="message" placeholder="Your Message" className="textarea w-full mb-2" required />
                                        <button type="submit" className="btn btn-primary mt-4 w-full ">Send Message</button>
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