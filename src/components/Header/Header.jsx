import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { Bars3Icon } from '@heroicons/react/24/solid';
import TalentMatchLogo from '../../assets/images/talentMatch.png';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100 px-5 md:px-28">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="lg:hidden">
                            <Bars3Icon className=" h-6 w-6" />
                        </label>
                        <ul tabIndex="0" className=" menu-compact dropdown-content mt-3 p-2 bg-yellow-100 rounded-box w-52">
                            <li><Link to="">Home</Link></li>
                            <li><Link to="/statistics">Statistics</Link></li>
                            <li><Link to="/appliedjobs">Applied Jobs</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                        </ul>
                    </div>
                    <div className='mx-auto lg:mx-0 text-lg font-bold lg:text-3xl'>
                        <img src={TalentMatchLogo} className='h-24' alt="" />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal px-1 gap-5">
                        <li className='m-3 lg:m-0'><Link to="">Home</Link></li>
                        <li className='m-3 lg:m-0'><Link to="/statistics">Statistics</Link></li>
                        <li className='m-3 lg:m-0'><Link to="/appliedjobs">Applied Jobs</Link></li>
                        <li className='m-3 lg:m-0'><Link to="/blog">Blog</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className='px-4 py-3 rounded text-white bg-primary text-sm'>Apply Now</button>
                </div>
            </div>
        </div>

    );
}

export default Header;
