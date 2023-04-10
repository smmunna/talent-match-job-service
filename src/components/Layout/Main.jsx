import React from 'react';
import Header from '../Header/Header';
import Home from '../Home/Home';
import { Outlet } from 'react-router-dom';
import './Main.css';

const Main = () => {
    return (
        <div className='Main'>
            <div className='p-2 lg:px-5'>
                <Header />
                <Home />
            </div>
            <Outlet />
        </div>
    );
}

export default Main;
