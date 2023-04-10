import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <div class="navbar bg-base-100">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="lg:hidden">
                            <Bars3Icon class="h-6 w-5" />
                        </label>
                        <ul tabindex="0" class=" menu-compact dropdown-content mt-3 p-2 bg-yellow-100 rounded-box w-52">
                            <li><Link to="">Home</Link></li>
                            <li><Link to="/statistics">Statistics</Link></li>
                            <li><Link to="/appliedjobs">Applied Jobs</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                        </ul>
                    </div>
                    <div className='mx-auto text-2xl font-bold lg:text-3xl'>
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
                    <button className='bg-primary p-1 rounded text-white'>Apply Now</button>
                </div>
            </div>
        </div>

    );
}

export default Header;
