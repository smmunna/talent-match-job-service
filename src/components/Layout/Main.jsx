import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import './Main.css';

const Main = () => {
    return (
        <div className='Main'>
            <Header />
            <Outlet />
        </div>
    );
}

export default Main;
