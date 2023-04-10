import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { Bars3Icon } from '@heroicons/react/24/solid';

const Header = () => {
    return (
        <div>
            <div class="navbar bg-base-100 px-5 md:px-28">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="lg:hidden">
                            <Bars3Icon class=" h-6 w-6" />
                        </label>
                        <ul tabindex="0" class=" menu-compact dropdown-content mt-3 p-2 bg-yellow-100 rounded-box w-52">
                            <li><Link to="">Home</Link></li>
                            <li><Link to="/statistics">Statistics</Link></li>
                            <li><Link to="/appliedjobs">Applied Jobs</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                        </ul>
                    </div>
                    <div className='mx-auto lg:mx-0 text-lg font-bold lg:text-3xl'>
                        Talent Match
                    </div>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu-horizontal px-1 gap-5">
                        <li className='m-3 lg:m-0'><Link to="">Home</Link></li>
                        <li className='m-3 lg:m-0'><Link to="/statistics">Statistics</Link></li>
                        <li className='m-3 lg:m-0'><Link to="/appliedjobs">Applied Jobs</Link></li>
                        <li className='m-3 lg:m-0'><Link to="/blog">Blog</Link></li>
                    </ul>
                </div>
                <div class="navbar-end">
                    <button className='px-4 py-1 rounded text-white bg-primary text-sm'>Apply Now</button>
                </div>
            </div>
        </div>

    );
}

export default Header;
