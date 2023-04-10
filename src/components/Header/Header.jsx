import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div className='md:flex md:justify-between md:items-center py-3'>
            {/* Brand Name */}
            <div>
                <h3 className='text-2xl lg:text-3xl font-bold'>TalentMatch</h3>
            </div>
            {/* Routes Links */}
            <div>
                <ul className='md:flex gap-4'>
                    <li><Link to="">Home</Link></li>
                    <li> <Link to="/statistics">Statistics</Link></li>
                    <li><Link to="/appliedjobs">Applied Jobs</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                </ul>
            </div>
            {/* Apply Button */}
            <div>
                <button className='text-white p-2 rounded bg-primary'>Start Applying</button>
            </div>

        </div>
    );
}

export default Header;
