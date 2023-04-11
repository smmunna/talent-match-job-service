import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import './Main.css';
import Footer from '../Footer/Footer';

const Main = () => {
    return (
        <div className='Main'>
            <Header />
            <Outlet />
            <Footer/>
        </div>
    );
}

export default Main;
