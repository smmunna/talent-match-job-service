import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h3>Header Components</h3>
            <Link to="">Home</Link>
            <Link to="/statistics">Statistics</Link>
            <Link to="/appliedjobs">Applied Jobs</Link>
        </div>
    );
}

export default Header;
