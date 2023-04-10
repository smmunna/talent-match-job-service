import React from 'react';
import './Home.css'
import HeadCover from '../HeadCover/HeadCover';
import JobCategory from '../JobCategory/JobCategory';
const Home = () => {
    return (
        <div className='px-5 md:px-28'>
            <HeadCover/>
            <JobCategory/>
        </div>
    );
}

export default Home;
