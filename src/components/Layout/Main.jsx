import React from 'react';
import Header from '../Header/Header';
import Home from '../Home/Home';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header/>
            <Home/>
            <Outlet/>
        </div>
    );
}

export default Main;
