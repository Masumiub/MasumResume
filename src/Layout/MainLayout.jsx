import React from 'react';
import { Link, NavLink, Outlet } from 'react-router';
import logo from '../assets/logo.png'
import newLogo from '../assets/logo-new.png'
import './MainLayout.css'
import { FaDownload, FaLinkedinIn } from "react-icons/fa6";
import { HiHome } from "react-icons/hi";
import { FaUserCheck } from "react-icons/fa";
import { MdOutlineChecklist } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { RiMailSendFill } from "react-icons/ri";
import { FiGithub } from 'react-icons/fi';
import { RxDiscordLogo } from 'react-icons/rx';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const MainLayout = () => {
    return (
        <div className="drawer md:drawer-open">
            {/* Drawer toggle for small screen */}
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

            {/* Page content */}
            <div className="drawer-content flex flex-col">
                {/* Navbar (visible only on small screens) */}
                <div className="navbar bg-black border-b-1 border-white md:hidden fixed z-10">
                    <div className="flex-none">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </label>
                    </div>
                    <Link to='/'> <img src={newLogo} alt="masum" className='w-12'/></Link>
                    <Link to='/' className="text-4xl font-bold md:block"><span className='text-white00'> Masum</span></Link>
                </div>

                {/* Main content */}
                <div className="p-0">
                    <Outlet />
                </div>
            </div>

            {/* Sidebar (drawer side) - always visible on md+ screens */}
            <div className="drawer-side">
                {/* Overlay only for small screens */}
                <label htmlFor="my-drawer-3" className="drawer-overlay md:hidden"></label>

                <ul className="menu bg-base-100 w-80 min-h-full p-4 text-base-content drawerBg">
                    {/* Sidebar content */}
                    <li><Link to='/'><img src={logo} alt="logo" className='border-b-1 border-white h-80' /></Link></li>
                    <li><Link to='/' className="text-4xl font-bold md:block mt-8"><span className='text-purple-500'>MASUM</span></Link></li>
                    <li><Link to='/' className="text-4xl font-bold md:block">  MUSFIQUE</Link></li>
                    <li>                                    <div className='flex mt-2 gap-5'>
                        <p> <a href="https://www.linkedin.com/in/musfique-77-masum/" target='_blank'><FaLinkedinIn size={20}  /></a> </p>
                        <p> <a href="https://github.com/Masumiub" target='_blank'><FiGithub size={20}  /></a> </p>
                        <p> <a href="https://discord.com/users/masummusfique2789" target='_blank'><RxDiscordLogo size={20}  /></a></p>
                    </div></li>
                    <li><NavLink to='/' className='mt-10'><HiHome />Home</NavLink></li>
                    <li><NavLink to='/aboutMe'><FaUserCheck />About Me</NavLink></li>
                    <li><NavLink to='/skills'><MdOutlineChecklist />Skills</NavLink></li>
                    {/* <li><NavLink to='/browseTasks'>Experiences</NavLink></li> */}
                    <li><NavLink to='/education'><FaBookOpen />Education</NavLink></li>
                    <li><NavLink to='/projects'><MdWork />Projects</NavLink></li>
                    <li><NavLink to='/contactme'><RiMailSendFill />Contact</NavLink></li>
                    <li><a href="/MasumMusfique_Resume.pdf" download> <FaDownload />Resume</a></li>

                </ul>
            </div>
            <ToastContainer />
        </div>
    );
};

export default MainLayout;