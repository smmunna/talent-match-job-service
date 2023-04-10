import React from 'react';
import './HeadCover.css';
import ProfessionalImg from '../../assets/images/professional.png';

const HeadCover = () => {
    return (
        <div>
            <div className='md:flex justify-center items-center'>
                <div>
                    <h1 className=' text-4xl text-center lg:text-left lg:text-6xl font-bold lg:leading-normal'>One Step <br /> Closer To Your <br /> <span className='text-success'>Dream Job</span></h1>
                    <p className='text-lg text-justify my-4 lg:mt-4'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='px-4 py-3 rounded text-white bg-primary text-sm'>Get Started</button>
                </div>
                <div>
                    <img src={ProfessionalImg} alt="" />
                </div>
            </div>
        </div>
    );
}

export default HeadCover;
