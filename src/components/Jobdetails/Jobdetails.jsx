import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const Jobdetails = () => {
    const { id } = useParams();
    const [singleData, setSingleData] = useState(null);

    useEffect(() => {
        fetch('/jobs.json')
            .then(res => res.json())
            .then(data => {
                const job = data.find(item => item.id === parseInt(id));
                setSingleData(job);
            });
    }, [id]);


    return (
        <div className='p-5 md:px-16'>
            <h2 className='text-3xl font-bold text-center py-5'>Job Details</h2>
            {singleData ? (
                <div className=' grid grid-cols-1 md:grid-cols-3 justify-between gap-5 '>
                    <div className='col-span-2'>
                        <p className='py-3'>
                            <span className='font-bold'>Job Description:</span> {singleData.description}
                        </p>
                        <p>
                            <span className='font-bold'>Job Responsibility:</span> {singleData.responsibility}
                        </p>
                        <p className='py-3'>
                            <span className='font-bold'>Educational Requirements:</span> {singleData.education}
                        </p>
                        <p>
                            <span className='font-bold'>Experiences:</span> {singleData.experience}
                        </p>

                    </div>

                    <div>
                        <div className='border-2 p-4 bg-blue-100 rounded-lg'>
                            <h2 className='mb-3 font-semibold'>Job Details</h2>
                            <hr className='border-2 border-blue-200 mb-4' />
                            <h3><span className='font-bold'>Salary:</span> {singleData.salary}</h3>
                            <h3 className='mb-4'><span className='font-bold'>Job Title:</span> {singleData.title}</h3>

                            <h2 className='mb-2 font-semibold'>Contact Information</h2>
                            <hr className='border-2 border-blue-200 mb-4' />
                            <h3><span className='font-bold'>Phone:</span> {singleData.phone}</h3>
                            <h3><span className='font-bold'>Email:</span> {singleData.email}</h3>
                            <h3><span className='font-bold'>Address:</span> {singleData.location}</h3>
                        </div>
                        <div>
                        <button className='px-4 py-3 rounded text-white bg-primary text-sm w-full mt-4'>Apply Now</button>
                        </div>
                    </div>
                    {/* Add other fields as needed */}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Jobdetails;
