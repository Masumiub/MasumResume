import React from 'react';
import { NavLink, Outlet } from 'react-router';
import logo from '../assets/logo.png'
import './MainLayout.css'
import { FaDownload } from "react-icons/fa6";
import { HiHome } from "react-icons/hi";
import { FaUserCheck } from "react-icons/fa";
import { MdOutlineChecklist } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { RiMailSendFill } from "react-icons/ri";


const MainLayout = () => {
    return (
        <div className="drawer md:drawer-open">
            {/* Drawer toggle for small screen */}
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

            {/* Page content */}
            <div className="drawer-content flex flex-col">
                {/* Navbar (visible only on small screens) */}
                <div className="navbar bg-base-300 md:hidden">
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
                     <NavLink to='/' className="text-3xl font-bold md:hidden"> <i><span className='text-green-500'>Masum</span></i></NavLink>
                    <NavLink to='/' className="text-3xl font-bold hidden md:block"> <i><span className='text-green-500'>Masum</span></i> Musfique</NavLink>
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
                    <li><NavLink to='/'><img src={logo} alt="logo" className='border-b-1 border-white'/></NavLink></li>
                    <li><NavLink to='/' className="text-4xl font-bold md:block mt-8"><span className='text-purple-500'>MASUM</span></NavLink></li>
                    <li><NavLink to='/' className="text-4xl font-bold md:block">  MUSFIQUE</NavLink></li>
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
        </div>
    );
};

export default MainLayout;