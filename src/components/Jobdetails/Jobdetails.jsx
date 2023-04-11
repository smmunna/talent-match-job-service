import React from 'react';
import { useParams } from 'react-router-dom';
const Jobdetails = () => {
    const paramId = useParams();
    return (
        <div className='p-5 md:px-16'>
            <h2 className='text-3xl font-bold text-center py-5'>Job Details{paramId.jobId}</h2>
        </div>
    );
}

export default Jobdetails;
